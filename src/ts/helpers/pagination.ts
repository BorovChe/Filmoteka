// @ts-ignore
import Pagination from 'tui-pagination';
import { paginationRef } from '../common/refs';
import 'tui-pagination/dist/tui-pagination.css';

import { moviesListRefs } from '../common/refs';
import { getTrendingMovies, getSearchMovies, getMovieDetails } from '../apiService/moviesAPIService';
import { getDataFromLocalStorage } from '../localStorage/localStorageController';
import { libraryMoviesListRender, moviesListRender } from '../common/render/moviesListRender';

interface PaginationSetting {
  startPage: number;
  moviesType: string;
  totalItemsHome: number;
  searchQuery: string;
}

const paginationSettings: PaginationSetting = {
  startPage: 1,
  moviesType: '',
  totalItemsHome: 0,
  searchQuery: '',
};

let moviesList: any = [];

function initPagination({ page, itemsPerPage, totalItems }: any) {
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
  pagination.on('afterMove', async ({ page }: any) => {
    if (paginationSettings.moviesType === 'TRENDING_MOVIES') {
      try {
        const trendingMovies = await getTrendingMovies(page);
        moviesListRender(moviesListRefs.homeMoviesList, trendingMovies);
      } catch (error) {
        console.log(error);
      }
    }
    if (paginationSettings.moviesType === 'SEARCH_MOVIES') {
      try {
        const searchMovies = await getSearchMovies(paginationSettings.searchQuery, page);

        moviesListRender(moviesListRefs.homeMoviesList, searchMovies);
      } catch (error) {
        console.log(error);
      }
    }

    const watchedList = getDataFromLocalStorage('watchedListMovies');
    if (paginationSettings.moviesType === 'WATCHED_MOVIES') {
      let start = (page - 1) * itemsPerPage;
      let end = start + itemsPerPage;
      const slice = watchedList.slice(start, end);

      const promises = slice.map((item: any) => getMovieDetails(item));
      moviesList = await Promise.allSettled(promises);

      libraryMoviesListRender(moviesListRefs.libraryMoviesList, moviesList);
    }

    const queueList = getDataFromLocalStorage('queueListMovies');
    if (paginationSettings.moviesType === 'QUEUE_MOVIES') {
      let start = (page - 1) * itemsPerPage;
      let end = start + itemsPerPage;
      const slice = queueList.slice(start, end);

      const promises = slice.map((item: any) => getMovieDetails(item));
      moviesList = await Promise.allSettled(promises);

      libraryMoviesListRender(moviesListRefs.libraryMoviesList, moviesList);
    }
  });
}

export { initPagination, paginationSettings };
