export default function setGrabCursor(moving) {
  const swiper = this;
  if (
    swiper.support.touch ||
    !swiper.params.simulateTouch ||
    (swiper.params.watchOverflow && swiper.isLocked)
  )
    return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}
