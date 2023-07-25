import React from 'react';
import { useLoading } from './LoadingContext';
import styles from './LoadingScreen.module.css'
import logo from '../logo.svg'

export function LoadingScreen() {
  const { loading } = useLoading();

  if (!loading) return null; // Don't render anything if loading is false

  return (
    <div className={styles["loading-screen"]}>
      <div className={styles["loader"]}>
        <img src={logo} className="App-logo" alt="logo" />

        <p> Loading...</p>
      </div>
    </div>
  );
}
