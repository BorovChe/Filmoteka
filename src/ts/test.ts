// const BASE_URL = "https://api.themoviedb.org/3/";
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzU4OTM3MzlhNzkwZmJjNzM2YWZmNDM4ZmMyMjIyZCIsIm5iZiI6MTcyMTU4MjQ3OS4yNjUxMDQsInN1YiI6IjY2OWQ0MWIzMWRkMDEwYjU1ZGRkNWMwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oT75Tmqq8mBXk-oA__ELZPxaQf-AGunpiBYR9_cjfUg";
// const AUTH_HEADER = {
//   Authorization: `Bearer ${token}`,
// };

// const buttonForFetching = document.querySelector(".clickBtn");

// let genres_list = [];

// buttonForFetching.addEventListener("click", () =>
//   getTrendingMoviesAndUpdateUI(1)
// );
// async function fetchData(endpoint, options = {}) {
//   try {
//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//       headers: AUTH_HEADER,
//       ...options,
//     });
//     if (!response.ok) {
//       throw new Error(`Failed to fetch: ${response.statusText}`);
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error in fetchData:", error);
//     throw error;
//   }
// }

// export async function getTrendingMovies(page) {
//   return await fetchData(`trending/movie/day?language=en-US&page=${page}`);
// }

// export async function getGenresMovie() {
//   const data = await fetchData("genre/movie/list?language=en-US");
//   return data.genres;
// }

// export async function getSearchMovies(query) {
//   return await fetchData(
//    ` search/movie?query=${query}&include_adult=false&language=en-US&page=1`
//   );
// }

// export async function getMovieDetails(id) {
//   return await fetchData(`movie/${id}?language=en-US`);
// }

// export async function getMovieVideos(id) {
//   return await fetchData(`movie/${id}/videos?language=en-US`);
// }

// async function getTrendingMoviesAndUpdateUI(renderPage) {
//   try {
//     if (genres_list.length <= 0) {
//       genres_list = await getGenresMovie();
//     }
//     const movies = await getTrendingMovies(renderPage);

//     const refactoringData = await createNewMoviesList(
//       movies.results,
//       genres_list
//     );

//     console.log("changes Movies:", refactoringData);
//   } catch (error) {
//     console.error("Error fetching trending movies:", error);
//   }
// }

// getTrendingMoviesAndUpdateUI(1);

// async function createNewMoviesList(data, genresList) {
//   const copyData = [...data];
//   const newArr = [];

//   copyData.map((item) => {
//     if (!item) return;
//     const {
//       id,
//       poster_path,
//       backdrop_path,
//       original_title,
//       original_name,
//       genre_ids,
//       genres,
//       release_date,
//     } = item;
//     const newMovie = {};

//     newMovie.id = id;
//     newMovie.title = original_title  backdrop_path
//     }

//     newMovie.releaseDate = release_date.slice(0, 4);
//     newMovie.genres = createGenresName(genresList, genre_ids, genres) || "";

//     newArr.push(newMovie);

//   return newArr;
// }

// function createGenresName(genresList, genre_ids, genres) {
//   if (genre_ids && genre_ids.length > 0) {
//     const limitedGenreIds = genre_ids.slice(0, 3);

//     const genreNames = limitedGenreIds
//       .map((id) => genresList.find((genre) => genre.id === id)?.name)
//       .filter((name) => name !== undefined);

//     return genreNames.length > 0 ? genreNames.join(", ") : "Genre unknown";
//   }

//   if (genres && genres.length > 0) {
//     return genres.map((genre) => genre.name).join(", ");
//   }

//   return "Genre unknown";
// }
