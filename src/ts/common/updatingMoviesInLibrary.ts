import { findIndexMovie, someFunctionMovie } from 'ts/helpers/filterMethods';
import { NewMovie } from 'ts/helpers/interfaces/movies';
import { setDataFromLocalSrorage, getDataFromLocalStorage } from 'ts/localStorage/localStorageController';

const watchedList = getDataFromLocalStorage('watchedListMovies');
const queueList = getDataFromLocalStorage('queueListMovies');

function onClickWacthedBtn(movie: NewMovie, targetId: string, btnRef: HTMLElement | null): void {
  if (btnRef && btnRef?.textContent === 'remove to Watched') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Watched';

    const index = findIndexMovie(watchedList, targetId);
    watchedList.splice(index, 1);
    setDataFromLocalSrorage('watchedListMovies', watchedList);
  } else if (btnRef) {
    btnRef.textContent = 'remove to Watched';
    btnRef.classList.add('modal-library-btn-active');

    watchedList.push(targetId);
    setDataFromLocalSrorage('watchedListMovies', watchedList);
  }
}

function onClickQueueBtn(movie: NewMovie, targetId: string, btnRef: HTMLElement | null): void {
  if (btnRef && btnRef.textContent === 'remove to Queue') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Queue';

    const index = findIndexMovie(queueList, targetId);
    console.log(index);
    queueList.splice(index, 1);
    setDataFromLocalSrorage('queueListMovies', queueList);
  } else if (btnRef) {
    btnRef.textContent = 'remove to Queue';
    btnRef.classList.add('modal-library-btn-active');

    queueList.push(targetId);
    setDataFromLocalSrorage('queueListMovies', queueList);
  }
}

function watchedMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): void {
  if (someFunctionMovie(watchedList, movieId) && btnRef) {
    btnRef.textContent = 'remove to Watched';
    btnRef.classList.add('modal-library-btn-active');
  }
}

function queueMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): void {
  if (someFunctionMovie(queueList, movieId) && btnRef) {
    btnRef.textContent = 'remove to Queue';
    btnRef.classList.add('modal-library-btn-active');
  }
}

export { onClickWacthedBtn, onClickQueueBtn, watchedMovieAdditionCheck, queueMovieAdditionCheck };
