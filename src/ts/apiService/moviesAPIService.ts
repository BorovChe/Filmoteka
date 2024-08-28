import { getData } from './requestMiddleware';

import { createNewMoviesDetails, createNewMoviesList } from 'ts/helpers/formattedData';
import { initPagination } from 'ts/common/pagination/pagination';

import { GenresResponse, MoviesResponse } from 'ts/types/responses';
import { Details, Genre, NewDetails, NewMovie } from 'ts/types/movies';
import { IQueryParams } from 'ts/types/helpers';

let genres_list: Genre[] = [];
let totalPages: number = 0;
const checkingListGenres: boolean = Boolean(genres_list.length);

const getGenresMovie = async (): Promise<Genre[]> => {
  const { genres } = await getData<GenresResponse>(`3/genre/movie/list?language=en-US`);
  return genres;
};

const getTrendingMovies = async (pageNum: number): Promise<NewMovie[]> => {
  const data = await getData<MoviesResponse>(`3/trending/movie/day?language=en-US&page=${pageNum}`);
  if (!checkingListGenres) {
    const genres: Genre[] = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_pages }: MoviesResponse = data;

  totalPages = total_pages;
  initPagination(page, results.length, 10000);

  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);
  return newMoviesList;
};

const getSearchMovies = async (value: string, pageNum: number): Promise<NewMovie[]> => {
  const queryParam: IQueryParams = { searchValue: value, pageNumber: pageNum };

  const data = await getData<MoviesResponse>(
    `3/search/movie?query=${queryParam.searchValue}&include_adult=false&language=en-US&page=${queryParam.pageNumber}`
  );
  if (!checkingListGenres) {
    const genres: Genre[] = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_pages, total_results }: MoviesResponse = data;

  totalPages = total_pages;
  initPagination(page, results.length, total_results);

  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);
  return newMoviesList;
};

const getMovieDetails = async (id: string): Promise<NewDetails> => {
  const data = await getData<Details>(`3/movie/${id}?language=en-US`);

  const createNewDetails: NewDetails = createNewMoviesDetails(data);
  return createNewDetails;
};

const getMovieVideos = async (id: string): Promise<any> => {
  const response = await getData(`3/movie/${id}/videos?language=en-US`);
  return response;
};

export { getTrendingMovies, getSearchMovies, getMovieDetails, getMovieVideos, totalPages };
