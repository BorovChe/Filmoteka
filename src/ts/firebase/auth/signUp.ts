import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Notify } from 'notiflix';
import { onCloseModal } from 'ts/common/modals/modal';
import { authRefs } from 'ts/common/refs';

async function signUp(auth: any, name: string, email: string, password: string): Promise<void> {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: name });
    authRefs.currentUser.textContent = credentials.user.displayName;
    onCloseModal();
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    Notify.failure(message);
  }
}

export { signUp };
