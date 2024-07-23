import { searchFormRef, moviesListRef } from './refs';
import { getSearchMovies } from './apiService/moviesAPIService';
import { moviesTemplate } from './templates/templates';

searchFormRef?.addEventListener('submit', onSubmit);

async function onSubmit(e: any) {
  e.preventDefault();
  const form = e.target;
  const searchValue = form.elements.searchMovies.value;
  try {
    const { data } = await getSearchMovies(searchValue);
    moviesListRef!.innerHTML = '';
    const movieItems = data.results.map(moviesTemplate).join('');
    moviesListRef?.insertAdjacentHTML('beforeend', movieItems);
    console.log(data);
  } catch (error) {}
  console.log(searchValue);
  form.reset();
}
