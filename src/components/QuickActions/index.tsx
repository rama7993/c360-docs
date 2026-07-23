import React from 'react';
import styles from './styles.module.css';

interface QuickActionsProps {
  title?: string;
  children: React.ReactNode;
}

export default function QuickActions({
  title = 'Click to see quick actions',
  children,
}: QuickActionsProps): React.ReactElement {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{title}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
