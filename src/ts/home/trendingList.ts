import { moviesListRefs } from '../common/refs';
import { checkingForMoviesAndRender } from '../helpers/checkingForMovies';
import { getTrendingMovies } from '../apiService/moviesAPIService';
import { movieListStubTitles } from '../helpers/movieListStubTitles';

import { NewMovie } from '../types/movies';
import { createCurrentPageFromStorage } from 'ts/common/currentPageFromStorage';

async function getTrendingMoviesAndUpdateUI(renderPage: number): Promise<void> {
  createCurrentPageFromStorage(renderPage, 'TRENDING_MOVIES', '');

  const trendingMovies: NewMovie[] = await getTrendingMovies(renderPage);
  checkingForMoviesAndRender(moviesListRefs.homeMoviesList, trendingMovies, movieListStubTitles.common);
}

export { getTrendingMoviesAndUpdateUI };
