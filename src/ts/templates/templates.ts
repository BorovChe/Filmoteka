const moviesTemplate = ({ id, title, posterSrc, releaseDate, genres }: any): string => {
  return `
        <li data-id=${id} class='movie-item'>
          <img class='movie-img' loading='lazy' src="${posterSrc}"
           alt=${title} 
            width="394" height="574"/>
          <h3 class='movie-title' >${title}</h3>
          <p class='movie-details'> ${genres} | <span>${releaseDate}</span></p>
        </li>
      `;
};

const movieDetailsTemplate = ({
  id,
  poster_path,
}: // original_title,
// popularity,
// vote_average,
// vote_count,
// overview,
any): string => {
  return `
   <div class='movieDetailsContainer'>
  <img loading='lazy' src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" />
      <div class="details">
        <h2>grgrg</h2>
        <h3>about</h3>
        <p>grg</p>
        <ul class="btn-list">
          <li><button class='js-btn-watched' data-id="${id}">add to Watched</button></li>
          <li><button class='js-btn-queue' data-id="${id}">add to Queue</button></li>
        </ul>
        </div>
       `;
};

export { moviesTemplate, movieDetailsTemplate };
