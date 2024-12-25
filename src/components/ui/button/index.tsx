import styles from './styles.module.scss'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
}

const buttonVariantMap = {
  'primary': styles.primary,
  'secondary': styles.secondary,
};

const buttonSizeMap = {
  'small': styles.small,
  'medium': styles.medium,
  'large': styles.large,
};

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: Props) {
  return (
    <button
      type="button"
      className={clsx(
        buttonVariantMap[variant],
        buttonSizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
