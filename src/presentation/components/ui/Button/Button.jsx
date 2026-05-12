import styles from './Button.module.css';

/**
 * Botón reutilizable.
 * variant: "primary" | "outline" | "ghost" | "green"
 * as:      "button" | "a"
 */
export default function Button({
  children,
  variant = 'primary',
  as: Tag  = 'button',
  className = '',
  ...props
}) {
  return (
    <Tag
      className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}
