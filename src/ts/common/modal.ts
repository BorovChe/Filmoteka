import { bodyRef, modalRefs, moviesListRefs } from 'ts/common/refs';
import { getMovieDetails } from 'ts/apiService/moviesAPIService';
import { disableScroll, enableScroll } from 'ts/helpers/scroll/controllersScroll';
import { movieDetailsRender } from 'ts/common/render/movieDetailsRender';
import {
  onClickWacthedBtn,
  onClickQueueBtn,
  watchedMovieAdditionCheck,
  queueMovieAdditionCheck,
} from 'ts/library/updatingMoviesInLibrary';

import { BtnLibraryRefsInModal } from 'ts/types/domRefsIntarfaces';
import { ListIdsMoviesFromStorage, NewDetails } from 'ts/types/movies';

moviesListRefs.generalMoviesList.addEventListener('click', onClickMovieItem);

const btnRefs: BtnLibraryRefsInModal = {
  watched: null,
  queue: null,
};

let movieId: ListIdsMoviesFromStorage = { id: '' };

let movieDetails = {} as NewDetails;

async function onClickMovieItem(e: any): Promise<void> {
  modalRefs.backdrop.addEventListener('click', onClickBackdrop);
  modalRefs.closeModalBtn.addEventListener('click', onClickCloseBtn);

  const li = e.target.closest('li');
  if (!li) return;
  movieId.id = li.dataset.id;
  movieDetails = await getMovieDetails(movieId.id);

  movieDetailsRender(modalRefs.movieDetailsContainer, movieDetails);
  onOpenModal();

  btnRefs.watched = document.querySelector('.js-btn-watched');
  btnRefs.queue = document.querySelector('.js-btn-queue');

  watchedMovieAdditionCheck(btnRefs.watched, movieId.id);
  queueMovieAdditionCheck(btnRefs.queue, movieId.id);
}

function onClickCloseBtn(): void {
  onCloseModal();
}

function onClickBackdrop(e: Event): void {
  if (e.target === btnRefs.watched) {
    onClickWacthedBtn(btnRefs.watched, movieId);
  }
  if (e.target === btnRefs.queue) {
    onClickQueueBtn(btnRefs.queue, movieId);
  }
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onOpenModal(): void {
  window.addEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  disableScroll();
}

function onCloseModal(): void {
  clearEventListeners();
  toggleClassListBody();
  enableScroll();
}

function onEscKeyDown(e: KeyboardEvent): void {
  if (e.code === 'Escape') onCloseModal();
}

function toggleClassListBody(): void {
  bodyRef.classList.toggle('show-modal');
}

function clearEventListeners(): void {
  modalRefs.closeModalBtn.addEventListener('click', onClickCloseBtn);
  modalRefs.backdrop.removeEventListener('click', onClickBackdrop);
  window.removeEventListener('keydown', onEscKeyDown);
}

export { onCloseModal };
