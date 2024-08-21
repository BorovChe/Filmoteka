import { moviesListRefs, headerLinkRefs } from './common/refs';
import { checkingForMoviesAndRender } from './helpers/checkingForMovies';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { movieListStubTitles } from './helpers/movieListStubTitles';
import { paginationSettings } from './common/pagination/pagination';

import { NewMovie } from './helpers/interfaces/movies';

async function getTrendingMoviesAndUpdateUI(renderPage: number): Promise<void> {
  headerLinkRefs.home.classList.add('header-link-active');

  paginationSettings.moviesType = 'TRENDING_MOVIES';

  const trendingMovies: NewMovie[] = await getTrendingMovies(renderPage);
  checkingForMoviesAndRender(moviesListRefs.homeMoviesList, trendingMovies, movieListStubTitles.common);
}

getTrendingMoviesAndUpdateUI(paginationSettings.startPage);
