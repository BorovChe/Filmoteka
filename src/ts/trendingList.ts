import { homebodyRef, moviesListRefs } from './common/refs';
import { getTrendingMovies, getGenresMovie } from './apiService/moviesAPIService';
import { initPagination, paginationSettings } from './helpers/pagination';
import { createNewMoviesList } from './helpers/formattedData';
import { moviesListRender } from './helpers/moviesListRender';

async function getTrendingMoviesAndUpdateUI(renderPage: number) {
  try {
    if (homebodyRef) {
      paginationSettings.moviesType = 'TRENDING_MOVIES';

      // const movies = await getTrendingMovies(renderPage);
      // const { page, results, total_results: totalItems } = movies;

      // console.log(movies);
      // console.log(genres);

      const [movies, genres] = await Promise.all([getTrendingMovies(renderPage), getGenresMovie()]);
      const { page, results, total_results: totalItems } = movies;

      // console.log(movies);
      // console.log(genres);

      // console.log(genres);

      const refactoringData = createNewMoviesList(results, genres);

      moviesListRender(moviesListRefs.homeMoviesList, refactoringData);
      initPagination({ page, itemsPerPage: results.length, totalItems });
    }
  } catch (error) {
    console.log(error);
  }
}

getTrendingMoviesAndUpdateUI(paginationSettings.startPage);
