const bodyRef = document.body;

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

const searchFormRef = document.querySelector('.js-form');

export { bodyRef, modalRefs, searchFormRef, moviesListRefs };
