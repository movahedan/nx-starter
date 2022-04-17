import type { FC, ReactNode, ButtonHTMLAttributes } from 'react';

type OriginalButtonProps = Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

export interface ButtonProps {
  type?: OriginalButtonProps['type'];
  role?: OriginalButtonProps['role'];
  'data-testid'?: string;
  'aria-label'?: string;

  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'outline';
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  disabled?: boolean;
  loading?: boolean;

  onClick?: OriginalButtonProps['onClick'];

  style?: OriginalButtonProps['style'];
  className?: OriginalButtonProps['className'];
}

export const Button: FC<ButtonProps> = ({
  type = 'button',
  role = 'button',
  'data-testid': dataTestId = 'button',
  'aria-label': ariaLabel = 'button',

  iconStart,
  iconEnd,
  loading = false,
  disabled = false,

  onClick,

  style,
  className,
  children,
}) => (
  <button
    role={role}
    type={type}
    disabled={disabled || loading}
    data-testid={dataTestId}
    aria-label={ariaLabel}
    aria-disabled={disabled || loading}
    onClick={onClick}
    style={style}
    className={className}
  >
    <span role='img' aria-hidden={true}>
      {iconStart}
    </span>
    {loading ? 'Loading...' : children}
    <span role='img' aria-hidden={true}>
      {iconEnd}
    </span>
  </button>
);
