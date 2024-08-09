import { libraryBodyRef, moviesListRefs, btnLibraryMoviesRefs } from './common/refs';
import { getDataFromLocalStorage } from './localStorage/localStorageController';
import { initPagination, paginationSettings } from './helpers/pagination';
import { moviesListRender } from './helpers/moviesListRender';
import { createNewMoviesList } from './helpers/formattedData';
import { getGenresMovie } from './apiService/moviesAPIService';

const startList = getDataFromLocalStorage('watchedListMovies');

btnLibraryMoviesRefs.watchedBtn?.addEventListener('click', onClickWatchedBtn);
btnLibraryMoviesRefs.queueBtn?.addEventListener('click', onClickQueueBtn);

async function libraryMoviesRender() {
  if (libraryBodyRef) {
    paginationSettings.moviesType = 'WATCHED_MOVIES';
    const genres = await getGenresMovie();
    const slice = startList.slice(0, 20);
    console.log(slice);
    const refactoringData = createNewMoviesList(slice, genres);
    moviesListRender(moviesListRefs.libraryMoviesList, refactoringData);

    initPagination({ page: 1, itemsPerPage: 20, totalItems: startList.length });
  }
}

libraryMoviesRender();

async function onClickWatchedBtn() {
  const watchedList = getDataFromLocalStorage('watchedListMovies');
  btnLibraryMoviesRefs.queueBtn?.classList.remove('active-btn');
  btnLibraryMoviesRefs.watchedBtn?.classList.add('active-btn');

  const slice = watchedList.slice(0, 20);
  const genres = await getGenresMovie();

  const refactoringData = createNewMoviesList(slice, genres);
  moviesListRender(moviesListRefs.libraryMoviesList, refactoringData);

  initPagination({ page: 1, itemsPerPage: 20, totalItems: watchedList.length });
}

async function onClickQueueBtn() {
  paginationSettings.moviesType = 'QUEUE_MOVIES';
  const queueList = getDataFromLocalStorage('queueListMovies');
  btnLibraryMoviesRefs.watchedBtn?.classList.remove('active-btn');
  btnLibraryMoviesRefs.queueBtn?.classList.add('active-btn');

  const slice = queueList.slice(0, 20);

  const genres = await getGenresMovie();

  const refactoringData = createNewMoviesList(slice, genres);
  moviesListRender(moviesListRefs.libraryMoviesList, refactoringData);

  initPagination({ page: 1, itemsPerPage: 20, totalItems: queueList.length - 1 });
}
