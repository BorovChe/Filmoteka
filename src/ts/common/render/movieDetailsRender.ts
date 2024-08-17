import { movieDetailsTemplate } from 'ts/templates/templates';

import { ModalRefs } from 'ts/helpers/interfaces/domRefsIntarfaces';

function movieDetailsRender(modalRef: any, data: any) {
  modalRef!.innerHTML = '';
  modalRef?.insertAdjacentHTML('afterbegin', movieDetailsTemplate(data));
}

export { movieDetailsRender };
