import { movieDetailsTemplate } from 'ts/templates/templates';

import { NewDetails } from 'ts/helpers/types/movies';

function movieDetailsRender(modalRef: HTMLElement, data: NewDetails) {
  modalRef.innerHTML = '';
  modalRef.insertAdjacentHTML('afterbegin', movieDetailsTemplate(data));
}

export { movieDetailsRender };
