import { getMovieDetails } from 'ts/apiService/moviesAPIService';

import { NewMovie, ListIdsMoviesFromStorage } from '../types/movies';

function getMoviesListOnLibrary<T>(listMovies: ListIdsMoviesFromStorage[]): Promise<any> {
  const promises: Promise<NewMovie>[] = listMovies.map(
    ({ id }: ListIdsMoviesFromStorage): Promise<NewMovie> => getMovieDetails(id)
  );
  return Promise.allSettled(promises);
}

export { getMoviesListOnLibrary };
