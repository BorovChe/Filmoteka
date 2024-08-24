import { findIndexMovie, someFunctionMovie } from 'ts/helpers/filterMethods';
import { ListIdsMoviesFromStorage } from 'ts/helpers/types/movies';
import { setDataFromLocalSrorage, getDataFromLocalStorage } from 'ts/localStorage/localStorageController';

const watchedList: ListIdsMoviesFromStorage[] = getDataFromLocalStorage('watchedListMovies');
const queueList: ListIdsMoviesFromStorage[] = getDataFromLocalStorage('queueListMovies');

function onClickWacthedBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): void {
  console.log(movieId);
  if (btnRef?.textContent === 'remove to Watched') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Watched';

    const index: number = findIndexMovie(watchedList, movieId.id);
    watchedList.splice(index, 1);
    setDataFromLocalSrorage('watchedListMovies', watchedList);
  } else {
    btnRef!.textContent = 'remove to Watched';
    btnRef!.classList.add('modal-library-btn-active');

    watchedList.push(movieId);
    setDataFromLocalSrorage('watchedListMovies', watchedList);
  }
}

function onClickQueueBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): void {
  if (btnRef?.textContent === 'remove to Queue') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Queue';

    const index: number = findIndexMovie(queueList, movieId.id);
    queueList.splice(index, 1);
    setDataFromLocalSrorage('queueListMovies', queueList);
  } else {
    btnRef!.textContent = 'remove to Queue';
    btnRef!.classList.add('modal-library-btn-active');

    queueList.push(movieId);
    setDataFromLocalSrorage('queueListMovies', queueList);
  }
}

function watchedMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): void {
  if (someFunctionMovie(watchedList, movieId)) {
    btnRef!.textContent = 'remove to Watched';
    btnRef!.classList.add('modal-library-btn-active');
  }
}

function queueMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): void {
  if (someFunctionMovie(queueList, movieId)) {
    btnRef!.textContent = 'remove to Queue';
    btnRef!.classList.add('modal-library-btn-active');
  }
}

export { onClickWacthedBtn, onClickQueueBtn, watchedMovieAdditionCheck, queueMovieAdditionCheck };
