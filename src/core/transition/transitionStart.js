import transitionEmit from './transitionEmit.js';

export default function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const { params } = swiper;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  transitionEmit({ swiper, runCallbacks, direction, step: 'Start' });
}
