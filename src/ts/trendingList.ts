import { moviesListRefs, headerLinkRefs } from './common/refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { paginationSettings } from './helpers/pagination';
import { moviesListRender } from './common/render/moviesListRender';

import { NewMovie } from './helpers/interfaces/movies';

async function getTrendingMoviesAndUpdateUI(renderPage: number): Promise<void> {
  headerLinkRefs.home?.classList.add('header-link-active');
  try {
    paginationSettings.moviesType = 'TRENDING_MOVIES';
    const trendingMovies: NewMovie[] = await getTrendingMovies(renderPage);
    moviesListRender(moviesListRefs.homeMoviesList, trendingMovies);
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI(paginationSettings.startPage);
