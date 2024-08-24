import { Details, Genre, Movie, NewDetails } from './movies';
import { AxiosHeaders } from 'axios';

type ResponseDataType = GenresResponse & MoviesResponse & Details;

type IApiResponse = {
  config: string;
  data: ResponseDataType;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
};

interface IApiError {
  message: string;
  status: number;
}

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

export { IApiResponse, IApiError, GenresResponse, MoviesResponse, PromisesMovieDetails, ResponseDataType };
