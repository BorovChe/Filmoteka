import { modalRefs, moviesListRefs } from 'ts/common/refs';
import { ListIdsMoviesFromStorage, NewDetails } from 'ts/types/movies';
import { modalRender } from 'ts/common/render/movieDetailsRender';
import { getMovieDetails } from 'ts/apiService/moviesAPIService';
import { onOpenModal } from './modal';
import {
  onClickWacthedBtn,
  onClickQueueBtn,
  watchedMovieAdditionCheck,
  queueMovieAdditionCheck,
} from 'ts/library/updatingMoviesInLibrary';

import { IBtnLibraryRefsInModal } from 'ts/types/domRefsIntarfaces';
import { movieDetailsTemplate } from 'ts/templates/templates';
import { getDataFromLocalStorage } from 'ts/storage/localStorage/localStorageController';

modalRefs.modalContainer.addEventListener('click', onClickContainer);
moviesListRefs.generalMoviesList.addEventListener('click', onClickMovieItem);

const detailsRefs: IBtnLibraryRefsInModal = {
  watched: null,
  queue: null,
  checkedAuth: null,
};

let movieId: ListIdsMoviesFromStorage = { id: '' };

async function onClickMovieItem(e: any): Promise<void> {
  const test = getDataFromLocalStorage('auth');

  modalRefs.modalContainer.classList.add('modal-details-container');
  const li = e.target.closest('li');
  if (!li) return;
  movieId.id = li.dataset.id;
  const movieDetails = await getMovieDetails(movieId.id);

  modalRender(movieDetailsTemplate(movieDetails));
  onOpenModal();

  detailsRefs.watched = document.querySelector('.js-btn-watched');
  detailsRefs.queue = document.querySelector('.js-btn-queue');
  detailsRefs.checkedAuth = document.querySelector('.checked-auth');

  if (!test) {
    detailsRefs.checkedAuth!.style.display = 'block';
    detailsRefs.queue!.disabled = true;
    detailsRefs.watched!.disabled = true;
  } else {
    watchedMovieAdditionCheck(detailsRefs.watched, movieId.id);
    queueMovieAdditionCheck(detailsRefs.queue, movieId.id);
  }
}

function onClickContainer(e: any) {
  if (e.target === detailsRefs.watched) {
    onClickWacthedBtn(detailsRefs.watched, movieId);
  }
  if (e.target === detailsRefs.queue) {
    onClickQueueBtn(detailsRefs.queue, movieId);
  }
}
