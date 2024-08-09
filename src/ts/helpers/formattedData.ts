// import { getGenresMovie } from 'ts/apiService/moviesAPIService';

async function createNewMoviesList(data: any, genresList: any) {
  // const genresList = await getGenresMovie();
  const copyData = [...data];
  const newArr: any[] = [];

  copyData.map((item: any) => {
    const { id, poster_path, backdrop_path, original_title, original_name, genre_ids, genres, release_date } = item;
    const newMoviesList: any = {};

    newMoviesList.id = id;
    newMoviesList.title = original_title || original_name;
    newMoviesList.posterSrc = `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`;
    newMoviesList.releaseDate = release_date.slice(0, 4);
    newMoviesList.genres = createGenresName(genresList, genre_ids, genres) || '';

    newArr.push(newMoviesList);
  });

  return newArr;
}

function createGenresName(genresList: any, genre_ids: any, genres: any) {
  if (genre_ids) {
    if (genre_ids.length === 0) {
      return 'Genre unknown';
    }

    if (genre_ids > 3) {
      genre_ids.splice(3);
    }

    const firstGenreName = genresList.genres.find(({ id }: any) => id === genre_ids[0]).name;
    return firstGenreName;
  } else if (genres) {
    if (genres.length === 0) {
      return 'Genre unknown';
    }
    return genres[0].name;
  }
}

export { createNewMoviesList };

const moviesTemplate = ({ id, poster_path, original_title, original_name, genre_ids, release_date }: any): string => {
  return `
        <li data-id=${id} class='movie-item'>
          <img class='movie-img' loading='lazy' src="${poster_path}"
           alt=${original_title || original_name} 
            width="394" height="574"/>
          <h3>${original_title || original_name}</h3>
          <p> ${genre_ids} | <span>${release_date}</span></p>
        </li>
      `;
};

// if (item.poster_path || item.backdrop_path) {
//   item.poster_path =
//     `https://image.tmdb.org/t/p/w500${item.poster_path}` || `https://image.tmdb.org/t/p/w500${item.backdrop_path}`;
// } else {
//   item.poster_path =
//     'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg';
// }

// if (item.original_name || item.original_name) {
//   item.original_title = item.original_name || item.original_name;
// }

// if (item.release_date) {
//   item.release_date = item.release_date.slice(0, 4);
// }

// console.log(genresList.genres);
// const genres = genresList.filter();

// if (item.genre_ids.length > 3) {
//   item.genre_ids.splice(0, 2);
// }
// console.log(genresList);
// console.log(item);
// const cityId = genresList.genres.find((genre: any) => genre.id === item.genre_ids[0]).name;
// console.log(cityId);
// item.genre_ids[item.genre_ids.length - 1] = 'Other';
// console.log(item.genre_ids.join(',  '));

// const newMoviesList: any = {
//   id: '',
//   title: '',
//   posterSrc: '',
//   releaseDate: '',
//   genres: '',
// };
