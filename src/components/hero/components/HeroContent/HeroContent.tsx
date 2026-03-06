import { motion, MotionValue } from 'framer-motion';
import { HeroBadge } from './components/HeroBadge/HeroBadge';
import { HeroTitle } from './components/HeroTitle/HeroTitle';
import { HeroDescription } from './components/HeroDescription/HeroDescription';
import { HeroButtons } from './components/HeroButtons/HeroButtons';
import styles from './HeroContent.module.css';

interface HeroContentProps {
  opacity: MotionValue<number>;
}

export function HeroContent({ opacity }: HeroContentProps) {
  return (
    <motion.div
      style={{ opacity }}
      className={styles.container}
    >
      <HeroBadge />
      <HeroTitle />
      <HeroDescription />
      <HeroButtons />
    </motion.div>
  );
}
