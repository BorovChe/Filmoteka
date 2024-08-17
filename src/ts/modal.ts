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

moviesListRefs.generalMoviesList?.addEventListener('click', onClickMovieItem);
modalRefs.backdrop?.addEventListener('click', onClickBackdrop);
modalRefs.closeModalBtn?.addEventListener('click', onClickCloseBtn);

const btnRefs: BtnLibraryRefsInModal = {
  watched: null,
  queue: null,
};

let movieId: string = '';

let movieDetails = {} as NewDetails;

async function onClickMovieItem(e: any) {
  const li = e.target.closest('li');
  if (!li) return;

  movieId = li.dataset.id;

  try {
    movieDetails = await getMovieDetails(movieId);

    movieDetailsRender(modalRefs.movieDetailsContainer, movieDetails);
    onOpenModal();

    btnRefs.watched = document.querySelector('.js-btn-watched');
    btnRefs.queue = document.querySelector('.js-btn-queue');

    watchedMovieAdditionCheck(btnRefs.watched, movieId);
    queueMovieAdditionCheck(btnRefs.queue, movieId);
  } catch (error) {
    console.log(error);
  }
}

function onClickCloseBtn() {
  onCloseModal();
}

function onClickBackdrop(e: any) {
  if (e.target === btnRefs.watched) {
    onClickWacthedBtn(movieDetails, movieId, btnRefs.watched);
  }
  if (e.target === btnRefs.queue) {
    onClickQueueBtn(movieDetails, movieId, btnRefs.queue);
  }
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  disableScroll();
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyDown);
  toggleClassListBody();
  enableScroll();
}

function onEscKeyDown(e: any) {
  if (e.code === 'Escape') onCloseModal();
}

function toggleClassListBody() {
  bodyRef!.classList.toggle('show-modal');
}

export { onCloseModal };
