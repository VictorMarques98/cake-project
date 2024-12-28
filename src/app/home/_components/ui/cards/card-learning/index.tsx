"use client"

import styles from './styles.module.scss'
import { useRef } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { CarouselLearning } from '@/app/home/_components/ui/carousel-learning'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/icons'

const learningCards = [
  {
    category: "Investment",
    title: "Types of options and how they works",
    duration: "2:02",
    thumbnail: "/images/learning_card.webp"
  },
  {
    category: "Investment",
    title: "Types of options and how they works",
    duration: "2:02",
    thumbnail: "/images/learning_card.webp"
  },
  {
    category: "Investment",
    title: "Types of options and how they works",
    duration: "2:02",
    thumbnail: "/images/learning_card.webp"
  }
];

type NavigationControlProps = {
  onPrevious: () => void;
  onNext: () => void;
  onSeeAll: () => void;
}

function NavigationControl({ onPrevious, onNext, onSeeAll }: NavigationControlProps) {
  return (
    <div className={styles.navigation_control}>
      <button
        type="button"
        className={styles.navigation_control_button}
        onClick={onSeeAll}
      >
        See all
      </button>
      <Button
        variant='secondary'
        size='small'
        onClick={onPrevious}
      >
        <Icon name='arrow-left' />
      </Button>
      <Button
        variant='secondary'
        size='small'
        onClick={onNext}
      >
        <Icon name='arrow-right' />
      </Button>
    </div>
  )
}

export function CardLearning() {
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <Card className={styles.card}>
      <CardHeader
        title="Learning"
        action={
          <NavigationControl
            onPrevious={scrollLeft}
            onNext={scrollRight}
            onSeeAll={() => console.log('See all')}
          />
        }
      />
      <CarouselLearning
        cards={learningCards}
        ref={carouselRef}
      />
    </Card>
  )
}
