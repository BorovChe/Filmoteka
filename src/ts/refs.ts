const bodyRef = document.body;

const modalRefs = {
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
};

const moviesListRef = document.querySelector('.movies-list');

const searchFormRef = document.querySelector('.js-form');
// const movieDetailsRefs = {

// };

export { bodyRef, moviesListRef, modalRefs, searchFormRef };
