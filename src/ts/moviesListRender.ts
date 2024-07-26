import { moviesListRefs } from './refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

async function getTrendingMoviesAndUpdateUI() {
  try {
    const { data } = await getTrendingMovies();
    const movieItems = data.results.map(moviesTemplate).join('');
    moviesListRefs.trendingMoviesList?.insertAdjacentHTML('beforeend', movieItems);
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI();
