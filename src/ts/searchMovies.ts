import { searchFormRef, moviesListRefs } from './common/refs';
import { getSearchMovies, getGenresMovie } from './apiService/moviesAPIService';
import { initPagination, paginationSettings } from './helpers/pagination';
import { createNewMoviesList } from './helpers/formattedData';
import { moviesListRender } from './helpers/moviesListRender';

searchFormRef?.addEventListener('submit', onSubmit);

async function onSubmit(e: any) {
  e.preventDefault();
  const form = e.target;
  const searchValue = form.elements.searchMovies.value.trim();

  paginationSettings.moviesType = 'SEARCH_MOVIES';
  paginationSettings.searchQuery = searchValue;

  if (searchValue === '') {
    alert('Введи что то, куда ты бля жмешь');
    return;
  }
  try {
    const [movies, genres]: any = await Promise.all([
      getSearchMovies(searchValue, paginationSettings.startPage),
      getGenresMovie(),
    ]);
    const { page, results, total_results: totalItems } = movies;

    const refactoringData = createNewMoviesList(results, genres);

    moviesListRender(moviesListRefs.homeMoviesList, refactoringData);
    initPagination({ page, itemsPerPage: results.length, totalItems });
  } catch (error) {
    console.log(error);
  }
  form.reset();
  // searchFormRef?.removeEventListener('submit', onSubmit);
}
