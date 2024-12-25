import styles from './styles.module.scss'

type Props = React.HTMLAttributes<HTMLElement> & {
  icon?: React.ReactNode;
  text: string;
  color: 'primary' | 'secondary';
  className?: string;
}

const colorMap = {
  primary: styles.primary,
  secondary: styles.secondary,
};

export function Tag({ icon, text, color, className, ...props }: Props) {
  return (
    <div
      className={[
        styles.tag,
        colorMap[color],
        className
      ].join(' ')}
    >
      {icon}
      <span>{text}</span>
    </div>
  )
}