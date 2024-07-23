import { moviesListRef, modalRefs } from './refs';
import { getMovieDetails } from './apiService/moviesAPIService';
import { movieDetailsTemplate } from './templates/templates';
import { onOpenModal } from './modal';

moviesListRef?.addEventListener('click', onClickMovieItem);

async function onClickMovieItem(e: any) {
  const li = e.target.closest('li');
  if (!li) return;
  const itemId = li.dataset.id;
  try {
    onOpenModal();
    const { data } = await getMovieDetails(itemId);
    modalRefs.modal!.innerHTML = movieDetailsTemplate(data);
  } catch (error) {
    console.log(error);
  }
}
