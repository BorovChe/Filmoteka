import { getDataFromLocalStorage } from 'ts/storage/localStorage/localStorageController';
import { database } from '../firebaseInit';
import { doc, DocumentData, DocumentReference, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';

const currentUser: any = getDataFromLocalStorage('auth');

let ref: DocumentReference<DocumentData, DocumentData>;

async function getFirebaseData() {
  try {
    // if (!currentUser) return { watchedList: [], queueList: [] };

    ref = doc(database, `users`, currentUser.uid);
    const response = await getDoc(ref);

    if (!response.data()) {
      await setDoc(ref, { watchedList: [], queueList: [] });
      return { watchedList: [], queueList: [] };
    } else {
      return response.data();
    }
  } catch (error) {
    console.log(error);
  }
}

async function addDataForStorage(data: any) {
  await updateDoc(ref, data);
}

async function removeDataForStorage(data: any) {
  await updateDoc(ref, data);
}

export { getFirebaseData, addDataForStorage, removeDataForStorage, ref };
