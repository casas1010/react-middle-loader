import React from 'react';
import { useSnackbar } from './SnackBarContext';
import styles from './SnackBar.module.css'; // Add CSS styles for snackbar

export function Snackbar() {
  const { snackbar } = useSnackbar();

  if (!snackbar) return null; // Don't render anything if snackbar is null

  const { message, severity } = snackbar;

  return (
    <div className={`${styles["snackbar"]} ${styles[severity]}`}>
      {message}
    </div>
  );
}
