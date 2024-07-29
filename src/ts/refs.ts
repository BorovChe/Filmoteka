const bodyRef = document.body;
const libraryBodyRef = document.querySelector('.library-body');

const modalRefs = {
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
};

const moviesListRefs = {
  generalMoviesList: document.querySelector('.movies-list'),
  trendingMoviesList: document.querySelector('.js-trendingMovies-list'),
  libraryMoviesList: document.querySelector('.js-libraryMovies-list'),
};

const btnLibraryMoviesRefs = {
  watchedBtn: document.querySelector('.wached-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

const searchFormRef = document.querySelector('.js-form');

export { bodyRef, libraryBodyRef, modalRefs, searchFormRef, moviesListRefs, btnLibraryMoviesRefs };
