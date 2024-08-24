// @ts-ignore
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

import { paginationRef } from '../refs';
import { moviesListRefs } from '../refs';
import { getTrendingMovies, getSearchMovies } from '../../apiService/moviesAPIService';
import { getDataFromLocalStorage } from '../../localStorage/localStorageController';
import { moviesListRender } from '../render/moviesListRender';
import { scrollToTop } from 'ts/helpers/scroll/backToTop';
import { getMoviesListOnLibrary } from 'ts/helpers/getPromiseSettled';

import { PaginationInit, PaginationSetting } from 'ts/helpers/types/pagination';
import { NewDetails } from 'ts/helpers/types/movies';

const paginationSettings: PaginationSetting = {
  startPage: 1,
  moviesType: '',
  totalItemsHome: 0,
  searchQuery: '',
};

function initPagination(page: number, itemsPerPage: number, totalItems: number) {
  const options = {
    page,
    itemsPerPage,
    totalItems,
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

  pagination.on('afterMove', async ({ page }: any): Promise<void> => {
    if (paginationSettings.moviesType === 'TRENDING_MOVIES') {
      const trendingMovies = await getTrendingMovies(page);
      moviesListRender(moviesListRefs.homeMoviesList, trendingMovies);
    }

    if (paginationSettings.moviesType === 'SEARCH_MOVIES') {
      const searchMovies = await getSearchMovies(paginationSettings.searchQuery, page);
      moviesListRender(moviesListRefs.homeMoviesList, searchMovies);
    }

    const watchedList = getDataFromLocalStorage('watchedListMovies');
    if (paginationSettings.moviesType === 'WATCHED_MOVIES') {
      const staticPage = createStaticPage(watchedList, itemsPerPage, page);

      moviesListRender(moviesListRefs.libraryMoviesList, await getMoviesListOnLibrary(staticPage));
    }

    const queueList = getDataFromLocalStorage('queueListMovies');
    if (paginationSettings.moviesType === 'QUEUE_MOVIES') {
      const staticPage = createStaticPage(queueList, itemsPerPage, page);

      moviesListRender(moviesListRefs.libraryMoviesList, await getMoviesListOnLibrary(staticPage));
    }

    scrollToTop();
  });
}

function createStaticPage(moviesList: NewDetails[], page: number, itemsPerPage: number): NewDetails[] {
  let start = (page - 1) * itemsPerPage;
  let end = start + itemsPerPage;
  const slice = moviesList.slice(start, end);
  return slice;
}

export { initPagination, paginationSettings };
