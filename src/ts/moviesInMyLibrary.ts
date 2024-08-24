import { headerLinkRefs, moviesListRefs, btnLibraryMoviesRefs } from './common/refs';
import { getDataFromLocalStorage } from './localStorage/localStorageController';
import { checkingForLibraryMoviesAndRender } from './helpers/checkingForMovies';
import { movieListStubTitles } from './helpers/movieListStubTitles';
import { initPagination, paginationSettings } from './common/pagination/pagination';
import { getMoviesListOnLibrary } from './helpers/getPromiseSettled';

import { NewMovie } from './helpers/types/movies';

const watchedList: NewMovie[] = getDataFromLocalStorage('watchedListMovies');
const queueList: NewMovie[] = getDataFromLocalStorage('queueListMovies');

btnLibraryMoviesRefs.watchedBtn.addEventListener('click', onClickWatchedBtn);
btnLibraryMoviesRefs.queueBtn.addEventListener('click', onClickQueueBtn);

async function libraryMoviesRender(): Promise<void> {
  paginationSettings.moviesType = 'WATCHED_MOVIES';

  headerLinkRefs.library.classList.add('header-link-active');
  btnLibraryMoviesRefs.watchedBtn.classList.add('active-movie-list');

  const sliceMovies = sliceMoviesForPagination(watchedList);
  checkingForLibraryMoviesAndRender(
    moviesListRefs.libraryMoviesList,
    await getMoviesListOnLibrary(sliceMovies),
    movieListStubTitles.watched,
    watchedList.length
  );

  initPagination({ page: 1, itemsPerPage: 20, totalItems: watchedList.length });
}

libraryMoviesRender();

async function onClickWatchedBtn(): Promise<void> {
  paginationSettings.moviesType = 'WATCHED_MOVIES';

  btnLibraryMoviesRefs.queueBtn.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.watchedBtn.classList.add('active-movie-list');

  const sliceMovies = sliceMoviesForPagination(watchedList);

  checkingForLibraryMoviesAndRender(
    moviesListRefs.libraryMoviesList,
    await getMoviesListOnLibrary(sliceMovies),
    movieListStubTitles.watched,
    watchedList.length
  );

  initPagination({ page: 1, itemsPerPage: 20, totalItems: watchedList.length });
}

async function onClickQueueBtn(): Promise<void> {
  paginationSettings.moviesType = 'QUEUE_MOVIES';

  btnLibraryMoviesRefs.watchedBtn.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.queueBtn.classList.add('active-movie-list');

  const sliceMovies = sliceMoviesForPagination(queueList);
  checkingForLibraryMoviesAndRender(
    moviesListRefs.libraryMoviesList,
    await getMoviesListOnLibrary(sliceMovies),
    movieListStubTitles.queue,
    queueList.length
  );

  initPagination({ page: 1, itemsPerPage: 20, totalItems: queueList.length });
}

function sliceMoviesForPagination(moviesList: NewMovie[]): NewMovie[] {
  if (moviesList.length >= 20) {
    const slice = moviesList.slice(0, 20);
    return slice;
  } else {
    return moviesList;
  }
}
