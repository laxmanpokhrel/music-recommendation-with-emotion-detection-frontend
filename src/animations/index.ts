export const overlayAnimation = {
  initial: { translateX: '100%', opacity: 0 },
  animate: { translateX: 0, opacity: 1, scale: 1 },
  transition: { duration: 0.2, ease: 'linear' },
};

export const textAnimation = {
  initial: { opacity: 0, width: '45%', height: '45%' },
  animate: { opacity: 1, width: '50%', height: '50%' },
  transition: { duration: 0.2, ease: 'easeIn' },
};

export const backDropAnimation = {
  initial: { opacity: 0.3 },
  animate: { opacity: 1 },
  transition: { duration: 0.2, ease: 'easeIn', delay: 0 },
};

export const removeComponentAnimation = {
  initial: { opacity: 0, transform: 'translateX(-50%)' },
  animate: { opacity: 1, transform: 'translateX(0%)' },
  exit: { opacity: 1, transform: 'translateX(-100%)', background: 'red' },
  tr: { duration: 0.2, ease: 'easeOut' },
};
