import { moviesListRefs } from './refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';
import { initPagination } from './pagination';

async function getTrendingMoviesAndUpdateUI(renderPage: number) {
  try {
    const { page, results } = await getTrendingMovies(renderPage);
    const totalItems = 10000;
    initPagination({ page, itemsPerPage: results.length, totalItems });
    moviesListRefs.trendingMoviesList!.innerHTML = '';
    const movieItems = results.map(moviesTemplate).join('');
    moviesListRefs.trendingMoviesList?.insertAdjacentHTML('afterbegin', movieItems);
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI(1);
