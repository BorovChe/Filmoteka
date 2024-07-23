import { moviesListRef } from './refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

const test = [];

async function getTrendingMoviesAndUpdateUI() {
  try {
    const movie = await getTrendingMovies();
    // test.push(movie);
    const movieItems = movie.data.results.map(moviesTemplate).join('');
    moviesListRef?.insertAdjacentHTML('beforeend', movieItems);
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI();
console.log(test);
