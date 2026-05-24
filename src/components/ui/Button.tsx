'use client';

import { forwardRef } from 'react';

type ButtonVariant = 'filled' | 'ghost' | 'outlined' | 'text' | 'soft';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  filled:   'btn-filled',
  ghost:    'btn-ghost',
  outlined: 'btn-outlined',
  text:     'btn-text',
  soft:     'btn-soft',
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'filled',
    size = 'md',
    loading = false,
    disabled,
    leftIcon,
    rightIcon,
    children,
    className = '',
    ...props
  },
  ref
) {
  return (
    <button
      ref={ref}
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </button>
  );
});

/* Link variant — renders as <a> with button styling */
interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function LinkButton({
  variant = 'filled',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={`btn ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
}
