import { bodyRef, modalRefs, moviesListRefs } from './common/refs';
import { getMovieDetails } from './apiService/moviesAPIService';
import { disableScroll, enableScroll } from './helpers/scroll/disableScroll';
import { movieDetailsRender } from './common/render/movieDetailsRender';
import {
  onClickWacthedBtn,
  onClickQueueBtn,
  watchedMovieAdditionCheck,
  queueMovieAdditionCheck,
} from './common/updatingMoviesInLibrary';

import { BtnLibraryRefsInModal } from './helpers/interfaces/domRefsIntarfaces';
import { NewDetails } from './helpers/interfaces/movies';

moviesListRefs.generalMoviesList.addEventListener('click', onClickMovieItem);
modalRefs.backdrop.addEventListener('click', onClickBackdrop);
modalRefs.closeModalBtn.addEventListener('click', onClickCloseBtn);

const btnRefs: BtnLibraryRefsInModal = {
  watched: null,
  queue: null,
};

let movieId = {} as { id: string };

let movieDetails = {} as NewDetails;

async function onClickMovieItem(e: any): Promise<void> {
  const li = e.target.closest('li');
  if (!li) return;
  const id = li.dataset.id;
  movieId.id = id;

  movieDetails = await getMovieDetails(movieId.id);

  movieDetailsRender(modalRefs.movieDetailsContainer, movieDetails);
  onOpenModal();

  btnRefs.watched = document.querySelector('.js-btn-watched');
  btnRefs.queue = document.querySelector('.js-btn-queue');

  watchedMovieAdditionCheck(btnRefs.watched, id);
  queueMovieAdditionCheck(btnRefs.queue, id);
}

function onClickCloseBtn(): void {
  onCloseModal();
}

function onClickBackdrop(e: Event): void {
  if (e.target === btnRefs.watched) {
    onClickWacthedBtn(movieId, btnRefs.watched);
  }
  if (e.target === btnRefs.queue) {
    onClickQueueBtn(movieId, btnRefs.queue);
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
  window.removeEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  enableScroll();
}

function onEscKeyDown(e: KeyboardEvent): void {
  if (e.code === 'Escape') onCloseModal();
}

function toggleClassListBody(): void {
  bodyRef.classList.toggle('show-modal');
}

export { onCloseModal };
