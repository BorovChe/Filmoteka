import { getData } from './requestMiddleware';

import { createNewMoviesDetails, createNewMoviesList } from 'ts/helpers/formattedData';
import { initPagination } from 'ts/common/pagination/pagination';

import { IApiResponse } from 'ts/helpers/types/responses';
import { Genre, Movie, NewDetails, NewMovie } from 'ts/helpers/types/movies';

let genres_list: Genre[] = [];
let totalPages: number = 0;

const getGenresMovie = async (): Promise<Genre[]> => {
  const { genres }: IApiResponse = await getData(`3/genre/movie/list?language=en-US`);
  return genres as Genre[];
};

const getTrendingMovies = async (pageNumber: number): Promise<NewMovie[]> => {
  const response: IApiResponse = await getData(`3/trending/movie/day?language=en-US&page=${pageNumber}`);
  if (genres_list.length <= 0) {
    const genres: Genre[] = await getGenresMovie();

    genres_list = genres;
  }

  const { page, results, total_pages, total_results }: IApiResponse = response;
  totalPages = total_pages;
  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);

  initPagination(page, results.length, total_results);
  return newMoviesList;
};

const getSearchMovies = async (value: string, pageNumber: number): Promise<NewMovie[]> => {
  const { data } = await getData(`3/search/movie?query=${value}&include_adult=false&language=en-US&page=${pageNumber}`);
  if (genres_list.length <= 0) {
    const genres: Genre[] = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_pages, total_results } = data;
  totalPages = total_pages;
  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);

  initPagination(page, results.length, total_results);
  return newMoviesList;
};

const getMovieDetails = async (id: string): Promise<NewDetails> => {
  const response: IApiResponse = await getData(`3/movie/${id}?language=en-US`);
  const createNewDetails: NewDetails = createNewMoviesDetails(response);
  return createNewDetails;
};

const getMovieVideos = async (id: string): Promise<any> => {
  const response = await getData(`3/movie/${id}/videos?language=en-US`);
  return response;
};

export { getTrendingMovies, getSearchMovies, getMovieDetails, getMovieVideos, totalPages };
