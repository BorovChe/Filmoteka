import { findIndexMovie, someFunctionMovie } from 'ts/helpers/filterMethods';
import { setDataFromLocalSrorage, getDataFromLocalStorage } from 'ts/storage/localStorage/localStorageController';
import { checkingForLibraryMoviesAndRender } from 'ts/helpers/checkingForMovies';
import { moviesListRefs } from 'ts/common/refs';
import { getMoviesListOnLibrary } from 'ts/helpers/getPromiseSettled';
import { movieListStubTitles } from 'ts/helpers/movieListStubTitles';
import { createLibraryPage } from 'ts/library/createPageForLibrary';

import { ListIdsMoviesFromStorage } from 'ts/types/movies';
import { ICurrentPage } from 'ts/types/helpers';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';

const watchedList: ListIdsMoviesFromStorage[] = getDataFromLocalStorage('watchedListMovies');
const queueList: ListIdsMoviesFromStorage[] = getDataFromLocalStorage('queueListMovies');

async function onClickWacthedBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): Promise<void> {
  const currentId: ListIdsMoviesFromStorage = { ...movieId };

  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination')!;

  if (btnRef?.textContent === 'remove to Watched') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Watched';

    const index: number = findIndexMovie(watchedList, currentId.id);
    watchedList.splice(index, 1);
    setDataFromLocalSrorage('watchedListMovies', watchedList);

    if (currentPage.type === 'WATCHED_MOVIES') {
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(watchedList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.watched,
        watchedList.length
      );
    }
  } else {
    btnRef!.textContent = 'remove to Watched';
    btnRef!.classList.add('modal-library-btn-active');

    watchedList.push(currentId);
    setDataFromLocalSrorage('watchedListMovies', watchedList);

    if (currentPage.type === 'WATCHED_MOVIES') {
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(watchedList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.watched,
        watchedList.length
      );
    }
  }
}

async function onClickQueueBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): Promise<void> {
  const currentId: ListIdsMoviesFromStorage = { ...movieId };
  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination')!;

  if (btnRef?.textContent === 'remove to Queue') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Queue';

    const index: number = findIndexMovie(queueList, movieId.id);
    queueList.splice(index, 1);
    setDataFromLocalSrorage('queueListMovies', queueList);
    if (currentPage.type === 'QUEUE_MOVIES') {
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(queueList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.queue,
        queueList.length
      );
    }
  } else {
    btnRef!.textContent = 'remove to Queue';
    btnRef!.classList.add('modal-library-btn-active');

    queueList.push(currentId);
    setDataFromLocalSrorage('queueListMovies', queueList);

    if (currentPage.type === 'QUEUE_MOVIES') {
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(queueList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.queue,
        queueList.length
      );
    }
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
