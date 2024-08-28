import { Genre, Movie, NewDetails } from './movies';

type GenresResponse = {
  genres: Genre[];
};

type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

interface PromisesMovieDetails {
  status: string;
  value: NewDetails;
}

export { GenresResponse, MoviesResponse, PromisesMovieDetails };
