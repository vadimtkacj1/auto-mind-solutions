"use client"

import { memo } from 'react';
import { DataBlocks } from './components/DataBlocks/DataBlocks';
import { FloatingPanels } from './components/FloatingPanels/FloatingPanels';
import { MainArrow } from './components/MainArrow/MainArrow';
import styles from './IsometricIllustration.module.css';

export function IsometricIllustration() {
  return (
    <div className={styles.container}>
      <div className={styles.staticBackground} />

      <svg
        viewBox="0 0 600 600"
        className={styles.svg}
        shapeRendering="optimizeSpeed"
      >
        <DataBlocks />
        <FloatingPanels />
        <MainArrow />
      </svg>
      
      <div className={styles.optimizedGlow} />
    </div>
  );
}

export default memo(IsometricIllustration);