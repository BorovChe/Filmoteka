// @ts-ignore
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { paginationRef } from '../refs';
import { moviesListRefs } from '../refs';
import { getTrendingMovies, getSearchMovies } from '../../apiService/moviesAPIService';
import { getDataFromLocalStorage } from '../../storage/localStorage/localStorageController';
import { moviesListRender } from '../render/moviesListRender';
import { scrollToTop } from 'ts/helpers/scroll/backToTop';
import { getMoviesListOnLibrary } from 'ts/helpers/getPromiseSettled';

import { NewDetails, NewMovie } from 'ts/types/movies';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { ICurrentPage } from 'ts/types/helpers';
import { updateCurrentPageFromPagination } from './paginationHelpers';
import { createLibraryPage } from 'ts/library/createPageForLibrary';

function initPagination(page: number, itemsPerPage: number, totalItems: number) {
  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination')!;

  const options = {
    page,
    totalItems,
    itemsPerPage,
    visiblePages: 5,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' + '<span class="tui-ico-{{type}}">{{type}}</span>' + '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span class="tui-ico-ellip">...</span>' + '</a>',
    },
  };

  const pagination = new Pagination(paginationRef, options);

  pagination.on('beforeMove', async ({ page }: any): Promise<void> => {
    if (currentPage.type === 'TRENDING_MOVIES') {
      updateCurrentPageFromPagination(currentPage, page);

      const trendingMovies: NewMovie[] = await getTrendingMovies(page);
      moviesListRender(moviesListRefs.homeMoviesList, trendingMovies);
    }

    if (currentPage.type === 'SEARCH_MOVIES') {
      updateCurrentPageFromPagination(currentPage, page);

      const searchMovies: NewMovie[] = await getSearchMovies(currentPage.query, page);
      moviesListRender(moviesListRefs.homeMoviesList, searchMovies);
    }

    const watchedList = getDataFromLocalStorage<NewDetails[]>('watchedListMovies');
    const queueList = getDataFromLocalStorage<NewDetails[]>('queueListMovies');

    if (currentPage.type === 'WATCHED_MOVIES') {
      updateCurrentPageFromPagination(currentPage, page);

      const staticPage: NewDetails[] = createLibraryPage(watchedList, page, itemsPerPage);
      moviesListRender(moviesListRefs.libraryMoviesList, await getMoviesListOnLibrary(staticPage));
    }

    if (currentPage.type === 'QUEUE_MOVIES') {
      updateCurrentPageFromPagination(currentPage, page);

      const staticPage: NewDetails[] = createLibraryPage(queueList, page, itemsPerPage);
      moviesListRender(moviesListRefs.libraryMoviesList, await getMoviesListOnLibrary(staticPage));
    }

    scrollToTop();
  });
}

export { initPagination };
