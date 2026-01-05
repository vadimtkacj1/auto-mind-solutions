import { SVGDefs } from './components/SVGDefs/SVGDefs';
import { BackgroundGrid } from './components/BackgroundGrid/BackgroundGrid';
import { LightBeams } from './components/LightBeams/LightBeams';
import { BasePlatform } from './components/BasePlatform/BasePlatform';
import { DataBlocks } from './components/DataBlocks/DataBlocks';
import { FloatingPanels } from './components/FloatingPanels/FloatingPanels';
import { ConnectionNodes } from './components/ConnectionNodes/ConnectionNodes';
import { InteractiveNodes } from './components/InteractiveNodes/InteractiveNodes';
import { MainArrow } from './components/MainArrow/MainArrow';
import { SecondaryArrows } from './components/SecondaryArrows/SecondaryArrows';
import { DecorativeHexagons } from './components/DecorativeHexagons/DecorativeHexagons';
import { Caustics } from './components/Caustics/Caustics';
import { AmbientGlow } from './components/AmbientGlow/AmbientGlow';
import styles from './IsometricIllustration.module.css';

export function IsometricIllustration() {
  return (
    <div className={styles.container}>
      <svg
        viewBox="0 0 600 600"
        className={styles.svg}
        style={{ filter: 'drop-shadow(0 0 40px rgba(0, 208, 132, 0.3))' }}
      >
        <SVGDefs />
        <BackgroundGrid />
        <LightBeams />
        <BasePlatform />
        <DataBlocks />
        <FloatingPanels />
        <ConnectionNodes />
        <InteractiveNodes />
        <MainArrow />
        <SecondaryArrows />
        <DecorativeHexagons />
        <Caustics />
      </svg>
      <AmbientGlow />
    </div>
  );
}

