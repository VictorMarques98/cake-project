import styles from './styles.module.scss'
import React from 'react'
import { ChildrenProps } from '@/types/react'
import { Text } from '@/components/ui/text'

const countChildren = (nodes: React.ReactNode): number => {
  let count = 0;

  React.Children.forEach(nodes, (child) => {
    if (React.isValidElement(child)) {
      count += 1;
      if ((child.props as { children?: React.ReactNode })) {
        count += countChildren((child.props as { children?: React.ReactNode }).children);
      }
    }
  });

  return count;
};

export function ChildCounter({ children }: ChildrenProps) {
  const totalChildren = countChildren(children);

  return (
    <>
      {children}
      {/* <div className={styles.child_counter}>
        <Text
          content={`Number of children: ${totalChildren}`}
          type='span'
        />
      </div> */}
    </>
  );
}
