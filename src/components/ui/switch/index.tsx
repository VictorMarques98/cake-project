import styles from './styles.module.scss'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLDivElement> & {
  options: Array<{
    value: string;
    label: string;
  }>
  currentValue: string;
  onSwitch: (value: string) => void;
}

export function Switch({
  options,
  currentValue,
  onSwitch,
  className,
  ...props
}: Props) {
  return (
    <div
      className={clsx(styles.switch, className)}
      {...props}
    >
      {options.map(({ value, label }) => (
        <button
          type="button"
          key={value}
          className={clsx(styles.option, currentValue === value && styles.is_active)}
          aria-label={label}
          onClick={() => onSwitch(value)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}