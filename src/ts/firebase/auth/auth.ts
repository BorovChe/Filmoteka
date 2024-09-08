import { authRefs, headerLinkRefs, modalRefs } from 'ts/common/refs';
import { onOpenModal } from 'ts/common/modals/modal';
import { modalRender } from 'ts/common/render/movieDetailsRender';
import { signInTemplate, signUpTemplate } from 'ts/templates/modalTempates';
import { auth } from '../firebaseInit';
import { getDataFromLocalStorage, setDataFromLocalSrorage } from 'ts/storage/localStorage/localStorageController';
import { authFromGoogle } from './googleAuth';
import { signIn } from './signIn';
import { signUp } from './signUp';
import { signOutFunc } from './signOut';
import { onAuthStateChanged } from 'firebase/auth';

authRefs.authBlock.addEventListener('click', onClickAuthBlock);

let formRef: HTMLFormElement | null = null;

function onClickAuthBlock(e: any): void {
  if (e.target === authRefs.signUp) {
    modalRefs.modalContainer.classList.remove('modal-details-container');
    modalRefs.modalContainer.classList.add('auth-container');
    modalRender(signUpTemplate());
    onOpenModal();
    formRef = document.querySelector('.signUp-form');
  }
  if (e.target === authRefs.signIn) {
    modalRefs.modalContainer.classList.remove('modal-details-container');
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
  const name: string = formData.get('name') as string;
  const email: string = formData.get('email') as string;
  const password: string = formData.get('password') as string;

  formRef.classList.contains('signUp-form') ? signUp(auth, name, email, password) : signIn(auth, email, password);
}

onAuthStateChanged(auth, user => {
  if (user !== null) {
    authStyles(user);
    setDataFromLocalSrorage('auth', user);
  } else {
    notAuthStyles();
    setDataFromLocalSrorage<null>('auth', null);
  }
});

function authController(): void {
  const user: any = getDataFromLocalStorage('auth');
  if (user) {
    authStyles(user);
  } else {
    notAuthStyles();
  }
}

authController();

function authStyles(user: any) {
  authRefs.signUp.style.display = 'none';
  authRefs.signIn.style.display = 'none';
  authRefs.signOut.style.display = 'flex';
  headerLinkRefs.library.style.pointerEvents = '';
  headerLinkRefs.library.style.opacity = '1';
  authRefs.currentUser.style.display = 'block';
  authRefs.currentUser.textContent = user.displayName;
  authRefs.userWrapper.style.display = 'flex';
}

function notAuthStyles() {
  authRefs.signUp.style.display = 'inline-block';
  authRefs.signIn.style.display = 'inline-block';
  authRefs.signOut.style.display = 'none';
  headerLinkRefs.library.style.pointerEvents = 'none';
  headerLinkRefs.library.style.opacity = '0.6';
  authRefs.userWrapper.style.display = 'none';
}
