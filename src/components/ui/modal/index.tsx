"use client"

import styles from './styles.module.scss'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { ChildrenProps } from '@/types/react'

type Props = ChildrenProps & {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    setIsMounted(true);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen || !isMounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}