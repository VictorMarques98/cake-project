"use client"

import styles from './styles.module.scss'
import { Modal } from '@/components/ui/modal'
import { useState } from 'react'
import { Text } from '@/components/ui/text'
import clsx from 'clsx'
import { useTheme } from '@/hooks/useTheme'

export function IntroModal() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { toggleTheme } = useTheme()

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
    >
      {currentStep === 1 && (
        <div className={styles.container}>
          <Text
            type="h1"
            content="Welcome!"
            className={styles.title}
          />
          <Text
            type="p"
            content="Image a modal that can be used to introduce new features or explain how to use the app"
            className={styles.description}
          />
          <button
            type="button"
            className={styles.button}
            onClick={() => setCurrentStep(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
      {currentStep === 2 && (
        <div className={styles.container}>
          <Text
            type="h1"
            content="Hello, i am a modal"
            className={styles.title}
          />
          <Text
            type="p"
            content="By clicking switch, you will toggle the mood"
            className={styles.description}
          />
          <div className={styles.buttons_container}>
            <button
              className={styles.button}
              onClick={closeModal}
            >
              Secondary button
            </button>
            <button
              className={clsx(styles.button, styles.primary)}
              onClick={toggleTheme}
            >
              Toggle
            </button>
          </div>
        </div>
      )}
    </Modal>
  )
}
