import { bodyRef, modalRefs } from 'ts/common/refs';
import { disableScroll, enableScroll } from 'ts/helpers/scroll/controllersScroll';

modalRefs.backdrop.addEventListener('click', onClickBackdrop);
modalRefs.closeModalBtn.addEventListener('click', onClickCloseBtn);

function onOpenModal(): void {
  window.addEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  disableScroll();
}

function onClickBackdrop(e: Event): void {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onClickCloseBtn(): void {
  onCloseModal();
}

function onCloseModal(): void {
  modalRefs.modalContainer.classList.remove('modal-details-container');
  clearEventListeners();
  toggleClassListBody();
  enableScroll();
}

function onEscKeyDown(e: KeyboardEvent): void {
  if (e.code === 'Escape') onCloseModal();
}

function toggleClassListBody(): void {
  bodyRef.classList.toggle('show-modal');
}

function clearEventListeners(): void {
  modalRefs.closeModalBtn.addEventListener('click', onClickCloseBtn);
  window.removeEventListener('keydown', onEscKeyDown);
}

export { onOpenModal, onCloseModal };
