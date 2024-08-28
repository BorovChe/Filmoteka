import { HeaderLinkRefs, ModalRefs, MoviesListRefs, BtnLibraryRefs } from 'ts/types/domRefsIntarfaces';

const bodyRef: HTMLElement = document.body;

const preloaderRef: HTMLElement = document.getElementById('preloader')!;

const headerLinkRefs: HeaderLinkRefs = {
  home: document.querySelector('.header-home-link')!,
  library: document.querySelector('.header-library-link')!,
};

const logoRef: HTMLElement = document.querySelector('.js-redirectToHome')!;

const modalRefs: ModalRefs = {
  closeModalBtn: document.querySelector('.btn-close-modal')!,
  backdrop: document.querySelector('.backdrop')!,
  modal: document.querySelector('.modal')!,
  movieDetailsContainer: document.querySelector('.movieDetailsContainer')!,
};

const moviesListRefs: MoviesListRefs = {
  generalMoviesList: document.querySelector('.movies-list')!,
  homeMoviesList: document.querySelector('.js-trendingMovies-list')!,
  libraryMoviesList: document.querySelector('.js-libraryMovies-list')!,
};

const btnLibraryMoviesRefs: BtnLibraryRefs = {
  watchedBtn: document.querySelector('.wached-btn')!,
  queueBtn: document.querySelector('.queue-btn')!,
};

const paginationRef: HTMLDivElement = document.querySelector('.tui-pagination')!;

const searchFormRef: HTMLFormElement = document.querySelector('.js-form')!;

const scrollToTopBtnRef: HTMLElement = document.querySelector('.btn-scroll-top ')!;

export {
  bodyRef,
  preloaderRef,
  headerLinkRefs,
  logoRef,
  modalRefs,
  searchFormRef,
  moviesListRefs,
  btnLibraryMoviesRefs,
  paginationRef,
  scrollToTopBtnRef,
};
