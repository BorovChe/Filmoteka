import { ModalRefs, MoviesListRefs, BtnLibraryRefs } from 'ts/helpers/interfaces/domRefsIntarfaces';

const bodyRef: HTMLElement | null = document.body;
const homebodyRef: HTMLElement | null = document.querySelector('.homeBody');
const libraryBodyRef: HTMLElement | null = document.querySelector('.library-body');

const modalRefs: ModalRefs = {
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
};

const moviesListRefs: MoviesListRefs = {
  generalMoviesList: document.querySelector('.movies-list'),
  homeMoviesList: document.querySelector('.js-trendingMovies-list'),
  libraryMoviesList: document.querySelector('.js-libraryMovies-list'),
};

const btnLibraryMoviesRefs: BtnLibraryRefs = {
  watchedBtn: document.querySelector('.wached-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

const paginationRef: HTMLElement | null = document.querySelector('.tui-pagination');

const searchFormRef: HTMLElement | null = document.querySelector('.js-form');

export {
  bodyRef,
  homebodyRef,
  libraryBodyRef,
  modalRefs,
  searchFormRef,
  moviesListRefs,
  btnLibraryMoviesRefs,
  paginationRef,
};
