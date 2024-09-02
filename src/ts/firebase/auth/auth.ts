import { authRefs, headerLinkRefs, modalRefs } from 'ts/common/refs';
import { onOpenModal } from 'ts/common/modal';
import { modalRender } from 'ts/common/render/movieDetailsRender';
import { signInTemplate, signUpTemplate } from 'ts/templates/modalTempates';
import { auth } from '../firebaseInit';
import { getDataFromLocalStorage, setDataFromLocalSrorage } from 'ts/storage/localStorage/localStorageController';
import { authFromGoogle } from './googleAuth';
import { signIn } from './signIn';
import { signUp } from './signUp';
import { signOutFunc } from './signOut';

authRefs.authBlock.addEventListener('click', onClickAuthBlock);

let formRef: HTMLFormElement | null = null;

function onClickAuthBlock(e: any): void {
  if (e.target === authRefs.signUp) {
    modalRefs.modalContainer.classList.add('auth-container');
    modalRender(signUpTemplate());
    onOpenModal();
    formRef = document.querySelector('.signUp-form');
  }
  if (e.target === authRefs.signIn) {
    modalRefs.modalContainer.classList.add('auth-container');
    modalRender(signInTemplate());
    onOpenModal();
    formRef = document.querySelector('.signIn-form');
  }
  if (e.target === authRefs.signOut) {
    signOutFunc(auth);
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

auth.onAuthStateChanged(user => {
  if (user !== null) {
    authRefs.signUp.style.display = 'none';
    authRefs.signIn.style.display = 'none';
    authRefs.signOut.style.display = 'block';
    headerLinkRefs.library.style.pointerEvents = '';
    authRefs.currentUser.style.display = 'block';
    authRefs.currentUser.textContent = user.email;
    setDataFromLocalSrorage('auth', user);
  } else {
    authRefs.signUp.style.display = 'inline-block';
    authRefs.signIn.style.display = 'inline-block';
    authRefs.signOut.style.display = 'none';
    headerLinkRefs.library.style.pointerEvents = 'none';
    headerLinkRefs.library.style.pointerEvents = 'none';
    authRefs.currentUser.style.display = 'none';
    setDataFromLocalSrorage<null>('auth', null);
  }
});

function authController(): void {
  const user: any = getDataFromLocalStorage('auth');
  if (user) {
    authRefs.signUp.style.display = 'none';
    authRefs.signIn.style.display = 'none';
    authRefs.signOut.style.display = 'block';
    headerLinkRefs.library.style.pointerEvents = '';
    authRefs.currentUser.style.display = 'block';
    authRefs.currentUser.textContent = user.email;
  } else {
    authRefs.signUp.style.display = 'inline-block';
    authRefs.signIn.style.display = 'inline-block';
    authRefs.signOut.style.display = 'none';
    headerLinkRefs.library.style.pointerEvents = 'none';
    authRefs.currentUser.style.display = 'none';
  }
}

authController();
