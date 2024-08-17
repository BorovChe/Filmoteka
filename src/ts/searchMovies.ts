import { searchFormRef, moviesListRefs } from './common/refs';
import { getSearchMovies } from './apiService/moviesAPIService';
import { paginationSettings } from './helpers/pagination';
import { moviesListRender } from './common/render/moviesListRender';

import { NewMovie } from './helpers/interfaces/movies';

searchFormRef?.addEventListener('submit', onSubmit);

async function onSubmit(e: any): Promise<void> {
  e.preventDefault();
  const form = e.target;
  const searchValue: string = form.elements.searchMovies.value.trim();

  paginationSettings.moviesType = 'SEARCH_MOVIES';
  paginationSettings.searchQuery = searchValue;

  if (searchValue === '') {
    alert('Введи что то, куда ты бля жмешь');
    return;
  }
  try {
    const searchMovies: NewMovie[] = await getSearchMovies(searchValue, paginationSettings.startPage);
    moviesListRender(moviesListRefs.homeMoviesList, searchMovies);
  } catch (error) {
    console.log(error);
  }
  form.reset();
}
