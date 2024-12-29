import styles from './styles.module.scss'
import React, { forwardRef } from 'react'
import Image from 'next/image'
import { Text } from '@/components/ui/text'

type Props = {
  cards: Array<{
    category: string;
    title: string;
    duration: string;
    thumbnail: string;
  }>;
};

export const CarouselLearning = forwardRef<HTMLUListElement, Props>(({ cards }, ref) => {
  return (
    <ul
      className={styles.carousel}
      ref={ref}
    >
      {cards.map(({ category, title, duration, thumbnail }) => (
        <li key={`${category}_${title}`}>
          <button
            type="button"
            onClick={() => { }}
            className={styles.card}
          >
            <div className={styles.carousel_thumbnail}>
              <Image
                src={thumbnail}
                alt={title}
                height={130}
                width={130}
              />
              <span className={styles.carousel_duration}>
                {duration}
              </span>
            </div>
            <div className={styles.carousel_content}>
              <Text
                content={category}
                type="span"
              />
              <Text
                content={title}
                type="p"
              />
              <div className={styles.carousel_progress}>
                <div />
              </div>
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
});

CarouselLearning.displayName = 'CarouselLearning';