import { bodyRef, modalRefs, moviesListRefs, btnLibraryMoviesRefs } from './refs';
import { getMovieDetails } from './apiService/moviesAPIService';
import { renderMovies, createTemplate } from './moviesInMyLibrary';
import { getDataFromLocalStorage, setDataFromLocalSrorage } from './localStorage/localStorageController';
import { disableScroll, enableScroll } from './scroll/disableScroll';
import { movieDetailsTemplate } from './templates/templates';

const watchedList = getDataFromLocalStorage('watchedListMovies');
const queueList = getDataFromLocalStorage('queueListMovies');

moviesListRefs.generalMoviesList?.addEventListener('click', onClickMovieItem);

async function onClickMovieItem(e: any) {
  const li = e.target.closest('li');
  if (!li) return;
  const movieId = li.dataset.id;
  try {
    onOpenModal();
    const { data } = await getMovieDetails(movieId);
    modalRefs.modal!.innerHTML = movieDetailsTemplate(data);

    modalRefs.backdrop?.addEventListener('click', onClickBackdrop);

    const btnRefs = {
      watched: document.querySelector('.js-btn-watched'),
      queue: document.querySelector('.js-btn-queue'),
    };

    if (someFunction(watchedList, movieId)) {
      btnRefs.watched!.textContent = 'remove to Watched';
    }

    if (someFunction(queueList, movieId)) {
      btnRefs.queue!.textContent = 'remove to Queue';
    }

    function onClickBackdrop(e: any) {
      if (e.target === btnRefs.watched) {
        onClickWacthedBtn(data, movieId, btnRefs.watched);
      }
      if (e.target === btnRefs.queue) {
        onClickQueueBtn(data, movieId, btnRefs.queue);
      }
      if (e.currentTarget === e.target) {
        modalRefs.backdrop?.removeEventListener('click', onClickBackdrop);
        onCloseModal();
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function onClickWacthedBtn(movie: any, targetId: any, btnRef: any) {
  if (btnRef?.textContent === 'remove to Watched') {
    btnRef!.textContent = 'add to Watched';
    const index = findIndexMovie(watchedList, targetId);
    watchedList.splice(index, 1);
    setDataFromLocalSrorage('watchedListMovies', watchedList);

    if (btnLibraryMoviesRefs.watchedBtn?.classList.contains('active-btn')) {
      renderMovies(createTemplate(watchedList));
    }
  } else {
    btnRef!.textContent = 'remove to Watched';
    watchedList.push(movie);
    setDataFromLocalSrorage('watchedListMovies', watchedList);

    if (btnLibraryMoviesRefs.watchedBtn?.classList.contains('active-btn')) {
      renderMovies(createTemplate(watchedList));
    }
  }
}

function onClickQueueBtn(movie: any, targetId: any, btnRef: any) {
  if (btnRef?.textContent === 'remove to Queue') {
    btnRef!.textContent = 'add to Queue';
    const index = findIndexMovie(queueList, targetId);
    queueList.splice(index, 1);
    setDataFromLocalSrorage('queueListMovies', queueList);

    if (btnLibraryMoviesRefs.queueBtn?.classList.contains('active-btn')) {
      renderMovies(createTemplate(queueList));
    }
  } else {
    btnRef!.textContent = 'remove to Queue';
    queueList.push(movie);
    setDataFromLocalSrorage('queueListMovies', queueList);

    if (btnLibraryMoviesRefs.queueBtn?.classList.contains('active-btn')) {
      renderMovies(createTemplate(queueList));
    }
  }
}

function findIndexMovie(movielist: any, targetId: any) {
  return movielist.findIndex(({ id }) => String(id) === targetId);
}

function someFunction(movielist: any, targetId: any) {
  return movielist.some(({ id }: any) => String(id) === targetId);
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
  bodyRef.classList.toggle('show-modal');
}

export { onCloseModal };
