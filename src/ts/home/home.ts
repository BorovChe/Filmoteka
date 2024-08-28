import { getSearchMovies } from 'ts/apiService/moviesAPIService';
import { headerLinkRefs, moviesListRefs } from 'ts/common/refs';
import { checkingForMoviesAndRender } from 'ts/helpers/checkingForMovies';
import { movieListStubTitles } from 'ts/helpers/movieListStubTitles';
import { getTrendingMoviesAndUpdateUI } from './trendingList';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { paginationSettings } from 'ts/common/pagination/paginationHelpers';

import { ICurrentPage } from 'ts/types/helpers';
import { NewMovie } from 'ts/types/movies';

const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination');

async function homeRender() {
  headerLinkRefs.home.classList.add('header-link-active');

  if (!currentPage) return getTrendingMoviesAndUpdateUI(paginationSettings.startPage);

  if (currentPage.type === 'SEARCH_MOVIES') {
    const searchMovies: NewMovie[] = await getSearchMovies(currentPage.query, currentPage.page);
    checkingForMoviesAndRender(moviesListRefs.homeMoviesList, searchMovies, movieListStubTitles.search);
  } else {
    getTrendingMoviesAndUpdateUI(currentPage.page || paginationSettings.startPage);
  }
}

homeRender();
