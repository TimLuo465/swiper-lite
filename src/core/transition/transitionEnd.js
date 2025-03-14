import transitionEmit from './transitionEmit.js';

export default function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  swiper.animating = false;
  swiper.setTransition(0);

  transitionEmit({ swiper, runCallbacks, direction, step: 'End' });
}
