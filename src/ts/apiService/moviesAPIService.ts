import { getData } from './requestMiddleware';

import { createNewMoviesDetails, createNewMoviesList } from 'ts/helpers/formattedData';
import { initPagination } from 'ts/common/pagination/pagination';

import { GenresRequest, MoviesRequest } from 'ts/helpers/interfaces/requests';
import { Genre, NewDetails, NewMovie } from 'ts/helpers/interfaces/movies';

let genres_list: Genre[] = [];
let totalPages: number = 0;

const getGenresMovie = async (): Promise<GenresRequest> => {
  const { data } = await getData(`3/genre/movie/list?language=en-US`);
  return data;
};

const getTrendingMovies = async (pageNumber: number): Promise<NewMovie[]> => {
  const { data } = await getData(`3/trending/movie/day?language=en-US&page=${pageNumber}`);
  if (genres_list.length <= 0) {
    const { genres }: GenresRequest = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_pages, total_results: totalItems }: MoviesRequest = data;
  totalPages = total_pages;
  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);

  initPagination({ page, itemsPerPage: results.length, totalItems });
  return newMoviesList;
};

const getSearchMovies = async (value: string, pageNumber: number): Promise<NewMovie[]> => {
  const { data } = await getData(`3/search/movie?query=${value}&include_adult=false&language=en-US&page=${pageNumber}`);
  if (genres_list.length <= 0) {
    const { genres }: GenresRequest = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_pages, total_results: totalItems }: MoviesRequest = data;
  totalPages = total_pages;
  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);

  initPagination({ page, itemsPerPage: results.length, totalItems });
  return newMoviesList;
};

const getMovieDetails = async (id: string): Promise<NewDetails> => {
  const { data } = await getData(`3/movie/${id}?language=en-US`);
  const createNewDetails = createNewMoviesDetails(data);
  return createNewDetails;
};

const getMovieVideos = async (id: string): Promise<any> => {
  const response = await getData(`3/movie/${id}/videos?language=en-US`);
  return response.data;
};

export { getTrendingMovies, getSearchMovies, getMovieDetails, getMovieVideos, totalPages };
