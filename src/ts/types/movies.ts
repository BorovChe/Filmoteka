interface Genre {
  id: number;
  name: string;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  posterSrc?: string;
  genres?: string;
  id: string;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  releaseDate: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface NewMovie {
  genres: string;
  id: string;
  posterSrc: string;
  releaseDate: string;
  title: string;
  value?: NewDetails;
}

interface Details {
  id: string;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  title: string;
  genres: Genre[];
  release_date: string;
  vote_average: number;
  vote_count: number;
}

interface NewDetails {
  id: string;
  posterSrc: string;
  vote: number;
  votes: number;
  popularity: number;
  releaseDate: string;
  title: string;
  genres: string;
  about: string;
}

interface ListIdsMoviesFromStorage {
  id: string;
}

export { Genre, Movie, NewMovie, Details, NewDetails, ListIdsMoviesFromStorage };
