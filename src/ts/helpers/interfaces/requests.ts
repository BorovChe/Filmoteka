import { GenresList, MoviesList } from './movies';

interface GenresRequest {
  genres: GenresList[];
}

interface MoviesRequest {
  page: number;
  results: MoviesList[];
  total_pages: number;
  total_results: number;
}

export { GenresRequest, MoviesRequest };
