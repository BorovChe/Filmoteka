import { signInWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix';

import { onCloseModal } from 'ts/common/modals/modal';

async function signIn(auth: any, email: string, password: string): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    onCloseModal();
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    Notify.failure(message);
  }
}

export { signIn };
