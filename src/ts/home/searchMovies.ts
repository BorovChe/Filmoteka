import { searchFormRef, moviesListRefs } from '../common/refs';
import { checkingForMoviesAndRender } from '../helpers/checkingForMovies';
import { getSearchMovies } from '../apiService/moviesAPIService';
import { movieListStubTitles } from '../helpers/movieListStubTitles';
import { paginationSettings } from 'ts/common/pagination/paginationHelpers';
import { Notify } from 'notiflix';
import { settingsNotify } from '../helpers/notificationSetting';
import { setDataFromLocalSrorage } from '../storage/localStorage/localStorageController';

import { NewMovie } from '../types/movies';
import { createCurrentPageFromStorage } from 'ts/common/currentPageFromStorage';

searchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(e: any): Promise<void> {
  e.preventDefault();
  const form = e.target;
  const searchValue: string = form.elements.searchMovies.value.trim();

  createCurrentPageFromStorage(paginationSettings.startPage, 'SEARCH_MOVIES', searchValue);

  if (searchValue === '') {
    Notify.warning('Please enter the movie title!', settingsNotify);
    return;
  }

  const searchMovies: NewMovie[] = await getSearchMovies(searchValue, paginationSettings.startPage);
  checkingForMoviesAndRender(moviesListRefs.homeMoviesList, searchMovies, movieListStubTitles.search);

  form.reset();
}
