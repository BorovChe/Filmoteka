import { moviesListRef } from './refs';
import { getTrendingMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

const test = [];

async function getTrendingMoviesAndUpdateUI() {
  try {
    const { data } = await getTrendingMovies();
    // test.push(data);
    const movieItems = data.results.map(moviesTemplate).join('');
    moviesListRef?.insertAdjacentHTML('beforeend', movieItems);
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI();
console.log(test);
