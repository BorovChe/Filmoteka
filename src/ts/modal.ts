import { bodyRef, modalRefs } from './refs';
import { disableScroll, enableScroll } from './scroll/disableScroll';

modalRefs.backdrop?.addEventListener('click', onClickBackdrop);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  disableScroll();
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  enableScroll();
}

function onClickBackdrop(e: any) {
  if (e.currentTarget === e.target) onCloseModal();
}

function onEscKeyDown(e: any) {
  if (e.code === 'Escape') onCloseModal();
}

function toggleClassListBody() {
  bodyRef.classList.toggle('show-modal');
}

export { onOpenModal, onCloseModal };
