import { signOut } from 'firebase/auth';
import { auth } from '../firebaseInit';
import { setDataFromLocalSrorage } from 'ts/storage/localStorage/localStorageController';
import { signOutLibraryRef } from 'ts/common/refs';
import { Notify } from 'notiflix';

signOutLibraryRef?.addEventListener('click', signOutInLibrary);

function signOutInLibrary(): void {
  signOutFunc(auth);
  setDataFromLocalSrorage<null>('auth', null);
  window.location.href = 'index.html';
}

async function signOutFunc(auth: any): Promise<void> {
  try {
    await signOut(auth);
  } catch (e) {
    let message;
    if (e instanceof Error) message = e.message;
    else message = String(e);
    Notify.failure(message);
  }
}

export { signOutFunc };
