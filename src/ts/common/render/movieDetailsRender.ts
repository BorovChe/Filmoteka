import { modalRefs } from '../refs';

function modalRender(template: string): void {
  modalRefs.modalContainer.innerHTML = '';
  modalRefs.modalContainer.insertAdjacentHTML('afterbegin', template);
}

export { modalRender };
