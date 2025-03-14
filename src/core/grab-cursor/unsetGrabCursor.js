export default function unsetGrabCursor() {
  const swiper = this;
  if (swiper.support.touch || (swiper.params.watchOverflow && swiper.isLocked)) {
    return;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}
