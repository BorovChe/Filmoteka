import { searchFormRef, moviesListRefs } from './common/refs';
import { checkingForMoviesAndRender } from './helpers/checkingForMovies';
import { getSearchMovies } from './apiService/moviesAPIService';
import { movieListStubTitles } from './helpers/movieListStubTitles';
import { paginationSettings } from './common/pagination/pagination';
import { Notify } from 'notiflix';
import { settingsNotify } from './helpers/notificationSetting';

import { NewMovie } from './helpers/interfaces/movies';

searchFormRef?.addEventListener('submit', onSubmit);

async function onSubmit(e: any): Promise<void> {
  e.preventDefault();
  paginationSettings.moviesType = 'SEARCH_MOVIES';
  const form = e.target;
  const searchValue: string = form.elements.searchMovies.value.trim();

  paginationSettings.searchQuery = searchValue;

  if (searchValue === '') {
    Notify.warning('Please enter the movie title!', settingsNotify);
    return;
  }

  const searchMovies: NewMovie[] = await getSearchMovies(searchValue, paginationSettings.startPage);
  checkingForMoviesAndRender(moviesListRefs.homeMoviesList, searchMovies, movieListStubTitles.search);
  form.reset();
}
