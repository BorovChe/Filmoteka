import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseInit';
import { onCloseModal } from 'ts/common/modals/modal';
import { Notify } from 'notiflix';

const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider();

async function authFromGoogle() {
  try {
    await signInWithPopup(auth, googleAuthProvider);
    onCloseModal();
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    Notify.failure(message);
  }
}

export { authFromGoogle };
