interface BadgeProps {
  children: React.ReactNode;
  variant?: 'accent' | 'neutral' | 'success';
  className?: string;
}

export function Badge({ children, variant = 'accent', className = '' }: BadgeProps) {
  const variantClass =
    variant === 'neutral' ? 'badge-neutral' :
    variant === 'success' ? 'badge-success' :
    'badge';

  return (
    <span className={`${variantClass} ${className}`}>
      {children}
    </span>
  );
}
