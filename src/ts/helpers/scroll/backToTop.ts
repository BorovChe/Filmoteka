import { scrollToTopBtnRef } from 'ts/common/refs';

window.addEventListener('scroll', trackScroll);
scrollToTopBtnRef!.addEventListener('click', onClickScrollToTopBtn);

function trackScroll(): void {
  scrollToTopBtnRef!.classList.toggle('hide-scroll', window.scrollY < 500);
}

function onClickScrollToTopBtn(): void {
  scrollToTop();
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

export { scrollToTop };
