import clsx from 'clsx';
import styles from './styles.module.scss'

type Props = React.HTMLAttributes<HTMLElement> & {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  content: string;
}

const textStyleMap = {
  'h1': styles.h1,
  'h2': styles.h2,
  'h3': styles.h3,
  'h4': styles.h4,
  'h5': styles.h5,
  'h6': styles.h6,
  'p': styles.p,
  'span': styles.span,
};

export function Text({
  content,
  type,
  className,
  ...props
}: Props) {
  const Tag = type;

  return (
    <Tag
      className={clsx(textStyleMap[type], className)}
      {...props}
    >
      {content}
    </Tag>
  )
}