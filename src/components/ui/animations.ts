/**
 * Animation Components Export
 * 
 * Централизованный экспорт всех анимационных компонентов
 * для удобного импорта в других частях приложения
 */

export { Reveal } from './Reveal';
export { FadeIn } from './FadeIn';
export { ScaleIn } from './ScaleIn';
export { SlideIn } from './SlideIn';
export { Parallax } from './Parallax';
export { StaggerContainer } from './StaggerContainer';
export { StaggerItem } from './StaggerItem';

// Типы для удобства
export type AnimationType = 'fade' | 'slide' | 'scale' | 'blur' | 'rotate';
export type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

