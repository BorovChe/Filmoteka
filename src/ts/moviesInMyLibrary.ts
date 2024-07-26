import { moviesListRefs } from './refs';
import { moviesTemplate } from './templates/templates';
import { getDataFromLocalStorage } from './localStorage/localStorageController';

const watchedList = getDataFromLocalStorage('watchedListMovies');
const queueList = getDataFromLocalStorage('queueListMovies');

function test() {
  const movieItems = watchedList.map(moviesTemplate).join('');
  moviesListRefs.libraryMoviesList!.innerHTML = movieItems;
}

test();
