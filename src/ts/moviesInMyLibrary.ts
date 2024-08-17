import { headerLinkRefs, moviesListRefs, btnLibraryMoviesRefs, paginationRef } from './common/refs';
import { getDataFromLocalStorage } from './localStorage/localStorageController';
import { initPagination, paginationSettings } from './helpers/pagination';
import { libraryMoviesListRender } from './common/render/moviesListRender';
import { getMovieDetails } from './apiService/moviesAPIService';

const watchedList: any = getDataFromLocalStorage('watchedListMovies');
const queueList = getDataFromLocalStorage('queueListMovies');

let moviesList: any = [];

btnLibraryMoviesRefs.watchedBtn?.addEventListener('click', onClickWatchedBtn);
btnLibraryMoviesRefs.queueBtn?.addEventListener('click', onClickQueueBtn);

async function libraryMoviesRender() {
  paginationSettings.moviesType = 'WATCHED_MOVIES';

  headerLinkRefs.library?.classList.add('header-link-active');
  btnLibraryMoviesRefs.watchedBtn?.classList.add('active-movie-list');
  try {
    const promises = watchedList.map((item: any) => getMovieDetails(item));
    moviesList = await Promise.allSettled(promises);

    sliceMoviesForPagination(moviesList);
  } catch (error) {
    console.log(error);
  }

  initPagination({ page: 1, itemsPerPage: 20, totalItems: watchedList.length });
}

libraryMoviesRender();

async function onClickWatchedBtn() {
  paginationSettings.moviesType = 'WATCHED_MOVIES';

  btnLibraryMoviesRefs.queueBtn?.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.watchedBtn?.classList.add('active-movie-list');

  const promises = watchedList.map((item: any) => getMovieDetails(item));
  moviesList = await Promise.allSettled(promises);

  sliceMoviesForPagination(moviesList);

  initPagination({ page: 1, itemsPerPage: 20, totalItems: watchedList.length });
}

async function onClickQueueBtn() {
  paginationSettings.moviesType = 'QUEUE_MOVIES';
  btnLibraryMoviesRefs.watchedBtn?.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.queueBtn?.classList.add('active-movie-list');

  const promises = watchedList.map((item: any) => getMovieDetails(item));
  moviesList = await Promise.allSettled(promises);

  sliceMoviesForPagination(moviesList);

  initPagination({ page: 1, itemsPerPage: 20, totalItems: queueList.length - 1 });
}

function sliceMoviesForPagination(moviesList: any) {
  console.log(moviesList);
  if (moviesList.length > 20) {
    paginationRef?.classList.remove('hidden');
    const slice = moviesList.slice(0, 20);
    libraryMoviesListRender(moviesListRefs.libraryMoviesList, slice);
  } else {
    paginationRef?.classList.add('hidden');
    libraryMoviesListRender(moviesListRefs.libraryMoviesList, moviesList);
  }
}
