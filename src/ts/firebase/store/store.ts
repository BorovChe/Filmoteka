import { child, get, getDatabase, push, ref, set } from 'firebase/database';
import { getDataFromLocalStorage } from 'ts/storage/localStorage/localStorageController';
import { database } from '../firebaseInit';

const currentUser: any = getDataFromLocalStorage('auth');

const moviesListRef = ref(database, 'movies/' + currentUser.uid);

// function writeMoviesData(movieid: string) {
//   set(moviesListRef, [{ movieid: movieid }]);
// }

// function updateMoviesData(movieid: string) {
//   // const postListRef = ref(database, 'movies/' + currentUser.uid);
//   const newPostRef = push(ref(database));
//   console.log(newPostRef);
//   set(newPostRef + currentUser.uid, { movieid: movieid });
// }

// const dbRef = ref(getDatabase());

// async function getFirebaseFata() {
//   await get(child(dbRef, `users/${currentUser}`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// export { writeMoviesData, updateMoviesData };
