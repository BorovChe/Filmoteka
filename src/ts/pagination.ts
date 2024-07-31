// @ts-ignore
import Pagination from 'tui-pagination';
import { paginationRef } from './refs';
import 'tui-pagination/dist/tui-pagination.css';

import { moviesListRefs } from './refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

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
    try {
      const { results } = await getTrendingMovies(page);
      moviesListRefs.trendingMoviesList!.innerHTML = '';
      const movieItems = results.map(moviesTemplate).join('');

      moviesListRefs.trendingMoviesList?.insertAdjacentHTML('afterbegin', movieItems);
    } catch (error) {
      console.log(error);
    }
  });
}

export { initPagination };
