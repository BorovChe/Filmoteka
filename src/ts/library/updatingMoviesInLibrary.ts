import { checkingForLibraryMoviesAndRender } from 'ts/helpers/checkingForMovies';
import { moviesListRefs } from 'ts/common/refs';
import { getMoviesListOnLibrary } from 'ts/helpers/getPromiseSettled';
import { movieListStubTitles } from 'ts/helpers/movieListStubTitles';
import { createLibraryPage } from 'ts/library/createPageForLibrary';

import { ListIdsMoviesFromStorage } from 'ts/types/movies';
import { ICurrentPage } from 'ts/types/helpers';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { addDataForStorage, getFirebaseData, ref, removeDataForStorage } from 'ts/firebase/store/store';
import { arrayRemove, arrayUnion } from 'firebase/firestore';

async function onClickWacthedBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): Promise<void> {
  const currentId: ListIdsMoviesFromStorage = { ...movieId };
  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination')!;

  if (btnRef?.textContent === 'remove to Watched') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Watched';

    removeDataForStorage({ watchedList: arrayRemove(currentId) });

    if (currentPage.type === 'WATCHED_MOVIES') {
      const { watchedList }: any = await getFirebaseData();
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(watchedList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.watched,
        watchedList.length
      );
    }
  } else {
    btnRef!.textContent = 'remove to Watched';
    btnRef!.classList.add('modal-library-btn-active');

    addDataForStorage({ watchedList: arrayUnion(currentId) });

    if (currentPage.type === 'WATCHED_MOVIES') {
      const { watchedList }: any = await getFirebaseData();
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(watchedList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.watched,
        watchedList.length
      );
    }
  }
}

async function onClickQueueBtn(btnRef: HTMLElement | null, movieId: ListIdsMoviesFromStorage): Promise<void> {
  const currentId: ListIdsMoviesFromStorage = { ...movieId };
  const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination')!;

  if (btnRef?.textContent === 'remove to Queue') {
    btnRef.classList.remove('modal-library-btn-active');
    btnRef.textContent = 'add to Queue';

    removeDataForStorage({ queueList: arrayRemove(currentId) });

    if (currentPage.type === 'QUEUE_MOVIES') {
      const { queueList }: any = await getFirebaseData();
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(queueList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.queue,
        queueList.length
      );
    }
  } else {
    btnRef!.textContent = 'remove to Queue';
    btnRef!.classList.add('modal-library-btn-active');

    addDataForStorage({ queueList: arrayUnion(currentId) });

    if (currentPage.type === 'QUEUE_MOVIES') {
      const { queueList }: any = await getFirebaseData();
      const staticPage: ListIdsMoviesFromStorage[] = createLibraryPage(queueList, currentPage.page, 20);
      checkingForLibraryMoviesAndRender(
        moviesListRefs.libraryMoviesList,
        await getMoviesListOnLibrary(staticPage),
        movieListStubTitles.queue,
        queueList.length
      );
    }
  }
}

async function watchedMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): Promise<void> {
  const { watchedList }: any = await getFirebaseData();
  const checkedMovies = watchedList.some(({ id }: ListIdsMoviesFromStorage): boolean => id === movieId);

  if (checkedMovies) {
    btnRef!.textContent = 'remove to Watched';
    btnRef!.classList.add('modal-library-btn-active');
  }
}

async function queueMovieAdditionCheck(btnRef: HTMLElement | null, movieId: string): Promise<void> {
  const { queueList }: any = await getFirebaseData();
  const checkedMovies = queueList.some(({ id }: ListIdsMoviesFromStorage): boolean => id === movieId);

  if (checkedMovies) {
    btnRef!.textContent = 'remove to Queue';
    btnRef!.classList.add('modal-library-btn-active');
  }
}

export { onClickWacthedBtn, onClickQueueBtn, watchedMovieAdditionCheck, queueMovieAdditionCheck };
