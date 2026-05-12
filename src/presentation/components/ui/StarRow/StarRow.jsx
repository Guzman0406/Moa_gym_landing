/**
 * Fila de estrellas llenas.
 * count: número de estrellas (1-5)
 */
export default function StarRow({ count = 5, size = 16 }) {
  return (
    <span aria-label={`${count} de 5 estrellas`} style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="oklch(0.60 0.20 142)"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}
