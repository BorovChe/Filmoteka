import { searchFormRef, moviesListRefs } from './refs';
import { getSearchMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

searchFormRef?.addEventListener('submit', onSubmit);

async function onSubmit(e: any) {
  e.preventDefault();
  const form = e.target;
  const searchValue = form.elements.searchMovies.value;
  try {
    const { data } = await getSearchMovies(searchValue);
    moviesListRefs.trendingMoviesList!.innerHTML = '';
    const movieItems = data.results.map(moviesTemplate).join('');
    moviesListRefs.trendingMoviesList?.insertAdjacentHTML('beforeend', movieItems);
  } catch (error) {
    console.log(error);
  }
  form.reset();
}
