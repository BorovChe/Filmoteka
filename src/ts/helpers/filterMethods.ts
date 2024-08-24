import { ListIdsMoviesFromStorage } from './types/movies';

function findIndexMovie(movielist: ListIdsMoviesFromStorage[], movieId: string): number {
  return movielist.findIndex(({ id }: ListIdsMoviesFromStorage): boolean => {
    return id === movieId;
  });
}

function someFunctionMovie(movielist: ListIdsMoviesFromStorage[], movieId: string): boolean {
  return movielist.some(({ id }: ListIdsMoviesFromStorage): boolean => {
    return id === movieId;
  });
}

export { findIndexMovie, someFunctionMovie };
