import { headerLinkRefs, moviesListRefs, btnLibraryMoviesRefs } from '../common/refs';
import { getDataFromLocalStorage, setDataFromLocalSrorage } from '../storage/localStorage/localStorageController';
import { checkingForLibraryMoviesAndRender } from '../helpers/checkingForMovies';
import { movieListStubTitles } from '../helpers/movieListStubTitles';
import { initPagination } from '../common/pagination/pagination';
import { paginationSettings } from 'ts/common/pagination/paginationHelpers';
import { getMoviesListOnLibrary } from '../helpers/getPromiseSettled';
import { createCurrentPageFromStorage } from 'ts/common/currentPageFromStorage';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { createLibraryPage } from './createPageForLibrary';

import { ListIdsMoviesFromStorage } from '../types/movies';
import { ICurrentPage } from 'ts/types/helpers';

const { startPage } = paginationSettings;
const itemsPerPage: number = 20;

btnLibraryMoviesRefs.watchedBtn.addEventListener('click', onClickWatchedBtn);
btnLibraryMoviesRefs.queueBtn.addEventListener('click', onClickQueueBtn);

async function onClickWatchedBtn(): Promise<void> {
  btnLibraryMoviesRefs.queueBtn.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.watchedBtn.classList.add('active-movie-list');

  const watchedList = getDataFromLocalStorage<ListIdsMoviesFromStorage>('watchedListMovies');

  createCurrentPageFromStorage(startPage, 'WATCHED_MOVIES', '');

  const staticPage = createLibraryPage<ListIdsMoviesFromStorage>(watchedList, 1, itemsPerPage);
  checkingForLibraryMoviesAndRender(
    moviesListRefs.libraryMoviesList,
    await getMoviesListOnLibrary(staticPage),
    movieListStubTitles.watched,
    watchedList.length
  );

  initPagination(startPage, itemsPerPage, watchedList.length);
}

async function onClickQueueBtn(): Promise<void> {
  btnLibraryMoviesRefs.watchedBtn.classList.remove('active-movie-list');
  btnLibraryMoviesRefs.queueBtn.classList.add('active-movie-list');

  const queueList = getDataFromLocalStorage<ListIdsMoviesFromStorage>('queueListMovies');

  createCurrentPageFromStorage(startPage, 'QUEUE_MOVIES', '');

  const staticPage = createLibraryPage<ListIdsMoviesFromStorage>(queueList, 1, itemsPerPage);

  checkingForLibraryMoviesAndRender(
    moviesListRefs.libraryMoviesList,
    await getMoviesListOnLibrary(staticPage),
    movieListStubTitles.queue,
    queueList.length
  );

  initPagination(startPage, itemsPerPage, queueList.length);
}

async function libraryRender() {
  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination');
  const watchedList = getDataFromLocalStorage<ListIdsMoviesFromStorage>('watchedListMovies');
  const queueList = getDataFromLocalStorage<ListIdsMoviesFromStorage>('queueListMovies');

  headerLinkRefs.library.classList.add('header-link-active');

  if (!currentPage) {
    btnLibraryMoviesRefs.watchedBtn.classList.add('active-movie-list');

    createCurrentPageFromStorage(startPage, 'WATCHED_MOVIES', '');

    const staticPage = createLibraryPage<ListIdsMoviesFromStorage>(watchedList, startPage, itemsPerPage);
    checkingForLibraryMoviesAndRender(
      moviesListRefs.libraryMoviesList,
      await getMoviesListOnLibrary(staticPage),
      movieListStubTitles.watched,
      watchedList.length
    );

    initPagination(startPage, itemsPerPage, watchedList.length);
    return;
  }

  if (currentPage.type !== 'QUEUE_MOVIES') {
    btnLibraryMoviesRefs.watchedBtn.classList.add('active-movie-list');

    createCurrentPageFromStorage(currentPage.page || startPage, 'WATCHED_MOVIES', '');

    const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(
      watchedList,
      currentPage.page || startPage,
      itemsPerPage
    );
    checkingForLibraryMoviesAndRender(
      moviesListRefs.libraryMoviesList,
      await getMoviesListOnLibrary(staticPage),
      movieListStubTitles.watched,
      watchedList.length
    );

    initPagination(currentPage.page, itemsPerPage, watchedList.length);
  }
  if (currentPage.type === 'QUEUE_MOVIES') {
    btnLibraryMoviesRefs.queueBtn.classList.add('active-movie-list');

    createCurrentPageFromStorage(currentPage.page || startPage, 'QUEUE_MOVIES', '');

    const staticPage = createLibraryPage<ListIdsMoviesFromStorage>(
      queueList,
      currentPage.page || startPage,
      itemsPerPage
    );
    checkingForLibraryMoviesAndRender(
      moviesListRefs.libraryMoviesList,
      await getMoviesListOnLibrary(staticPage),
      movieListStubTitles.queue,
      queueList.length
    );

    initPagination(currentPage.page, itemsPerPage, queueList.length);
  }
}

libraryRender();
