import { HeaderLinkRefs, ModalRefs, MoviesListRefs, BtnLibraryRefs } from 'ts/helpers/interfaces/domRefsIntarfaces';

const bodyRef: HTMLElement | null = document.body;

const headerLinkRefs: HeaderLinkRefs = {
  home: document.querySelector('.header-home-link'),
  library: document.querySelector('.header-library-link'),
};

const modalRefs: ModalRefs = {
  closeModalBtn: document.querySelector('.btn-close-modal'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  movieDetailsContainer: document.querySelector('.movieDetailsContainer'),
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

const searchFormRef = document.querySelector('.js-form') as HTMLFormElement;

export { bodyRef, headerLinkRefs, modalRefs, searchFormRef, moviesListRefs, btnLibraryMoviesRefs, paginationRef };
