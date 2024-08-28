import { Movie, Genre, NewMovie, NewDetails, Details } from '../types/movies';
import PosterStub from '../../images/stubs/PosterStub.jpg';

function createNewMoviesList(data: Movie[], genresList?: Genre[]): NewMovie[] {
  const copyData: Movie[] = [...data];
  const newArr: NewMovie[] = [];

  copyData.map((item: Movie): void => {
    const {
      id,
      posterSrc,
      poster_path,
      backdrop_path,
      original_title,
      title,
      genre_ids,
      genres,
      release_date,
      releaseDate,
    }: Movie = item;

    const newMoviesList = {} as NewMovie;
    newMoviesList.id = String(id);
    newMoviesList.title = title || original_title;
    newMoviesList.posterSrc = posterSrc || moviePosterCheck(poster_path, backdrop_path);
    newMoviesList.releaseDate = releaseDate ? releaseDate : release_date !== '' ? release_date.slice(0, 4) : 'No date';
    newMoviesList.genres = createGenresName(genre_ids, genres, genresList);

    newArr.push(newMoviesList);
  });

  return newArr;
}

function createNewMoviesDetails(details: Details): NewDetails {
  const copyDetails: Details = { ...details };
  const newDetails = {} as NewDetails;
  const {
    id,
    backdrop_path,
    original_title,
    overview,
    popularity,
    poster_path,
    title,
    genres,
    release_date,
    vote_average,
    vote_count,
  }: Details = copyDetails;

  newDetails.id = id;
  newDetails.posterSrc = moviePosterCheck(poster_path, backdrop_path);
  newDetails.vote = roundSecondDecimalPlace(vote_average);
  newDetails.votes = roundSecondDecimalPlace(vote_count);
  newDetails.popularity = roundSecondDecimalPlace(popularity);
  newDetails.releaseDate = release_date.slice(0, 4);
  newDetails.title = title || original_title;
  newDetails.genres = genresInDetails(genres);
  newDetails.about = overview;

  return newDetails;
}

function roundSecondDecimalPlace(number: number): number {
  return Math.round(number * 10) / 10;
}

function moviePosterCheck(poster_path: string, backdrop_path: string): string {
  if (poster_path || backdrop_path) {
    return `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`;
  } else {
    return PosterStub;
  }
}

function createGenresName(genre_ids: [number], genres?: string, genresList?: Genre[]): string {
  if (genre_ids && genre_ids.length > 0) {
    const limitedGenreIds: number[] = genre_ids.slice(0, 2);

    if (genresList) {
      const genreNames: string[] = limitedGenreIds
        .map((id: number) => genresList.find((genre: Genre) => genre.id === id)?.name)
        .filter((name?: string) => name !== undefined);

      if (genre_ids.length > 2) {
        return genreNames.join(', ') + ', Other';
      } else {
        return genreNames.length > 0 ? genreNames.join(', ') : 'Genre unknown';
      }
    }
  }

  if (genres) {
    return genres;
  }

  return 'Genre unknown';
}

function genresInDetails(genres: Genre[]): string {
  if (!genres) return 'Genre unknown';
  const genresList: string[] = genres.map(({ name }) => name);
  if (genres.length > 2) {
    const limitedGenres: string = genresList.slice(0, 2).join(', ');
    return limitedGenres + ', Other';
  } else {
    return genres.length > 0 ? genresList.join(', ') : 'Genre unknown';
  }
}

export { createNewMoviesList, createNewMoviesDetails };
