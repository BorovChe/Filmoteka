import { Genre, Movie, NewDetails } from './movies';

interface GenresRequest {
  genres: Genre[];
}

interface MoviesRequest {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface PromisesMovieDetails {
  status: string;
  value: NewDetails;
}

export { GenresRequest, MoviesRequest, PromisesMovieDetails };
