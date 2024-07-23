import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

axios.defaults.headers.common = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg',
};

const getTrendingMovies = async () => {
  return await axios.get(`3/trending/movie/day?language=en-US`);
};

const getSearchMovies = async (value: string) => {
  return await axios.get(
    `3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`
  );
};

const getMovieDetails = async (id: string) => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );
};

const getMovieVideos = async (id: string) => {
  return await axios.get(`3/movie/${id}/videos?language=en-US`);
};

export { getTrendingMovies, getSearchMovies, getMovieDetails, getMovieVideos };
