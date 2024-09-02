import { modalRefs } from 'ts/common/refs';
import { modalRender } from 'ts/common/render/movieDetailsRender';
import { signInTemplate, signUpTemplate } from 'ts/templates/modalTempates';
import { authFromGoogle } from './googleAuth';
import { auth } from '../firebaseInit';
import { signUp } from './signUp';
import { signIn } from './signIn';

modalRefs.modalContainer.addEventListener('click', onClickModalContainer);

let formRef: HTMLFormElement | null = null;

function onClickModalContainer(e: any): void {
  const signUpRef = document.querySelector('.signUp-btn-inModal');
  const signInRef = document.querySelector('.signIn-btn-inModal');

  if (e.target === signUpRef) {
    modalRefs.modalContainer.classList.remove('modal-details-container');
    modalRefs.modalContainer.classList.add('auth-container');
    modalRender(signUpTemplate());
    formRef = document.querySelector('.signUp-form');
  }
  if (e.target === signInRef) {
    modalRefs.modalContainer.classList.remove('modal-details-container');
    modalRefs.modalContainer.classList.add('auth-container');
    modalRender(signInTemplate());
    formRef = document.querySelector('.signIn-form');
  }

  if (formRef) {
    formRef.addEventListener('submit', onSubmit);
    const googleAuthRef: HTMLElement | null = document.querySelector('.google-signIn');
    googleAuthRef?.addEventListener('click', authFromGoogle);
  }
}

async function onSubmit(e: any): Promise<void> {
  if (!formRef) return;
  e.preventDefault();
  const formData: FormData = new FormData(formRef);
  const email: string = formData.get('email') as string;
  const password: string = formData.get('password') as string;

  formRef.classList.contains('signUp-form') ? signUp(auth, email, password) : signIn(auth, email, password);
}
