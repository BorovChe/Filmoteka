import { libraryBodyRef, moviesListRefs, btnLibraryMoviesRefs } from './refs';
import { moviesTemplate } from './templates/templates';
import { getDataFromLocalStorage } from './localStorage/localStorageController';

const startList = getDataFromLocalStorage('watchedListMovies');

btnLibraryMoviesRefs.watchedBtn?.addEventListener('click', onClickWatchedBtn);
btnLibraryMoviesRefs.queueBtn?.addEventListener('click', onClickQueueBtn);

function libraryMoviesRender(): void {
  if (libraryBodyRef) {
    const movieItems = startList.map(moviesTemplate).join('');
    renderMovies(movieItems);
  }
}

libraryMoviesRender();

function onClickWatchedBtn(): void {
  const watchedList = getDataFromLocalStorage('watchedListMovies');
  btnLibraryMoviesRefs.queueBtn?.classList.remove('active-btn');
  btnLibraryMoviesRefs.watchedBtn?.classList.add('active-btn');
  const movieItems = createTemplate(watchedList);
  renderMovies(movieItems);
}

function onClickQueueBtn(): void {
  const queueList = getDataFromLocalStorage('queueListMovies');
  btnLibraryMoviesRefs.watchedBtn?.classList.remove('active-btn');
  btnLibraryMoviesRefs.queueBtn?.classList.add('active-btn');
  const movieItems = createTemplate(queueList);
  renderMovies(movieItems);
}

function renderMovies(movies: any) {
  moviesListRefs.libraryMoviesList!.innerHTML = movies;
}

function createTemplate(moviesList: any) {
  return moviesList.map(moviesTemplate).join('');
}

export { renderMovies, createTemplate };
