import { paginationRef } from '../common/refs';
import { moviesListRender } from 'ts/common/render/moviesListRender';
import { moviesListStub } from '../templates/templates';
import { totalPages } from 'ts/apiService/moviesAPIService';

import { NewMovie } from './interfaces/movies';

function checkingForMoviesAndRender(listMoviesRef: HTMLElement, listMovies: NewMovie[], stubTitle: string): void {
  if (listMovies.length === 0) {
    paginationRef.classList.add('hidden');
    listMoviesRef.innerHTML = moviesListStub(stubTitle);
  } else if (totalPages > 1) {
    paginationRef.classList.remove('hidden');
    moviesListRender(listMoviesRef, listMovies);
  }
}

function checkingForLibraryMoviesAndRender(
  listMoviesRef: HTMLElement,
  listMovies: NewMovie[],
  stubTitle: string,
  totalMovies: number
): void {
  if (listMovies.length === 0) {
    paginationRef.classList.add('hidden');
    listMoviesRef.innerHTML = moviesListStub(stubTitle);
  } else if (totalMovies <= 20) {
    paginationRef.classList.add('hidden');
    moviesListRender(listMoviesRef, listMovies);
  } else {
    paginationRef.classList.remove('hidden');
    moviesListRender(listMoviesRef, listMovies);
  }
}

export { checkingForMoviesAndRender, checkingForLibraryMoviesAndRender };
