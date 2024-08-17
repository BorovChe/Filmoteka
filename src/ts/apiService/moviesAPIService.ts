import axios, { AxiosResponse } from 'axios';
import { createNewMoviesDetails, createNewMoviesList } from 'ts/helpers/formattedData';
import { initPagination } from 'ts/helpers/pagination';

import { GenresRequest, MoviesRequest } from 'ts/helpers/interfaces/requests';
import { Genre, NewMovie } from 'ts/helpers/interfaces/movies';

let genres_list: Genre[] = [];

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.headers.common = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg',
};

const getGenresMovie = async () => {
  const response: AxiosResponse = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`);
  return response.data;
};

const getTrendingMovies = async (pageNumber: number) => {
  const { data }: AxiosResponse = await axios.get(`3/trending/movie/day?language=en-US&page=${pageNumber}`);
  if (genres_list.length <= 0) {
    const { genres }: GenresRequest = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_results: totalItems }: MoviesRequest = data;

  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);
  initPagination({ page, itemsPerPage: results.length, totalItems });

  return newMoviesList;
};

const getSearchMovies = async (value: string, pageNumber: number) => {
  const { data }: AxiosResponse = await axios.get(
    `3/search/movie?query=${value}&include_adult=false&language=en-US&page=${pageNumber}`
  );

  if (genres_list.length <= 0) {
    const { genres }: GenresRequest = await getGenresMovie();
    genres_list = genres;
  }

  const { page, results, total_results: totalItems }: MoviesRequest = data;
  const newMoviesList: NewMovie[] = createNewMoviesList(results, genres_list);

  initPagination({ page, itemsPerPage: results.length, totalItems });

  return newMoviesList;
};

const getMovieDetails = async (id: string) => {
  const { data }: AxiosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
  const createNewDetails = createNewMoviesDetails(data);
  return createNewDetails;
};

const getMovieVideos = async (id: string) => {
  const response: AxiosResponse = await axios.get(`3/movie/${id}/videos?language=en-US`);
  return response.data;
};

export { getTrendingMovies, getSearchMovies, getMovieDetails, getMovieVideos, getGenresMovie };
