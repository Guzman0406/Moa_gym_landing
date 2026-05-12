import fs   from 'fs';
import path from 'path';

import { container } from '@infrastructure/container';

import { toGymViewModel, toPlanViewModels, toSupplementViewModels } from '@presentation/mappers/gymMapper';
import { toReviewViewModels } from '@presentation/mappers/reviewMapper';

import Nav              from '@presentation/components/sections/Nav/Nav';
import Hero             from '@presentation/components/sections/Hero/Hero';
import FactStrip        from '@presentation/components/sections/FactStrip/FactStrip';
import WhyUs            from '@presentation/components/sections/WhyUs/WhyUs';
import Supplements      from '@presentation/components/sections/Supplements/Supplements';
import Plans            from '@presentation/components/sections/Plans/Plans';
import Reviews          from '@presentation/components/sections/Reviews/Reviews';
import Contact          from '@presentation/components/sections/Contact/Contact';
import Footer           from '@presentation/components/sections/Footer/Footer';
import FloatingWhatsApp from '@presentation/components/ui/FloatingWhatsApp';

import { GYM_IMG, WORKOUT_IMG } from '@presentation/constants';

/**
 * Lee las fotos de /public/images/gym/ y devuelve sus rutas web.
 * Si la carpeta está vacía o no existe, usa las imágenes de Unsplash.
 */
function getGymPhotos() {
  const dir = path.join(process.cwd(), 'public', 'images', 'gym');
  try {
    const photos = fs
      .readdirSync(dir)
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      .sort()
      .map((f) => `/images/gym/${f}`);
    if (photos.length > 0) return photos;
  } catch {
    /* carpeta aún no existe — usar placeholders */
  }
  // Fallback: imágenes Unsplash mientras llegan las fotos reales
  return [GYM_IMG, WORKOUT_IMG];
}

/**
 * Página principal (Server Component).
 *
 * Flujo:
 *   container.<useCase>.execute()  →  entidades de dominio
 *   mappers.toXxxViewModel(...)    →  plain objects serializables
 *   <Section ... />                →  recibe solo DTOs
 */
export default async function HomePage() {
  const [gymEntity, plansEntities, supplementsEntities, reviewsEntities] =
    await Promise.all([
      container.getGym.execute(),
      container.getPlans.execute(),
      container.getSupplements.execute(),
      container.getReviews.execute(),
    ]);

  const gym         = toGymViewModel(gymEntity);
  const plans       = toPlanViewModels(plansEntities);
  const supplements = toSupplementViewModels(supplementsEntities);
  const reviews     = toReviewViewModels(reviewsEntities);
  const gymPhotos   = getGymPhotos();

  return (
    <>
      <Nav         phone={gym.phone} />
      <Hero        gym={gym} />
      <FactStrip   gym={gym} />
      <WhyUs       gym={gym} photos={gymPhotos} />
      <Supplements supplements={supplements} />
      <Plans       plans={plans} />
      <Reviews     reviews={reviews} gym={gym} />
      <Contact     gym={gym} />
      <Footer      gym={gym} />
      <FloatingWhatsApp whatsapp={gym.whatsapp} />
    </>
  );
}
