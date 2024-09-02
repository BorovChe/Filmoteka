import { IHeaderLinkRefs, IModalRefs, IMoviesListRefs, IBtnLibraryRefs, IAuthRefs } from 'ts/types/domRefsIntarfaces';

const bodyRef: HTMLElement = document.body;

const preloaderRef: HTMLElement = document.getElementById('preloader')!;

const headerLinkRefs: IHeaderLinkRefs = {
  home: document.querySelector('.header-home-link')!,
  library: document.querySelector('.header-library-link')!,
};

const signOutLibraryRef: HTMLButtonElement = document.querySelector('.signOutLibrary-btn')!;

const authRefs: IAuthRefs = {
  authBlock: document.querySelector('.auth-block')!,
  signUp: document.querySelector('.signUp-btn')!,
  signIn: document.querySelector('.signIn-btn')!,
  signOut: document.querySelector('.signOut-btn')!,
  currentUser: document.querySelector('.userName')!,
};

const logoRef: HTMLElement = document.querySelector('.js-redirectToHome')!;

const modalRefs: IModalRefs = {
  closeModalBtn: document.querySelector('.btn-close-modal')!,
  backdrop: document.querySelector('.backdrop')!,
  modal: document.querySelector('.modal')!,
  modalContainer: document.querySelector('.modal-container')!,
};

const moviesListRefs: IMoviesListRefs = {
  generalMoviesList: document.querySelector('.movies-list')!,
  homeMoviesList: document.querySelector('.js-trendingMovies-list')!,
  libraryMoviesList: document.querySelector('.js-libraryMovies-list')!,
};

const btnLibraryMoviesRefs: IBtnLibraryRefs = {
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
  signOutLibraryRef,
  authRefs,
  logoRef,
  modalRefs,
  searchFormRef,
  moviesListRefs,
  btnLibraryMoviesRefs,
  paginationRef,
  scrollToTopBtnRef,
};
