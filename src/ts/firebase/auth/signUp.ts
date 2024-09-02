import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Notify } from 'notiflix';
import { onCloseModal } from 'ts/common/modal';

async function signUp(auth: any, email: string, password: string): Promise<void> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    onCloseModal();
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    Notify.failure(message);
  }
}

export { signUp };
