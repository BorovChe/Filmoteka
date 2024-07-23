const moviesTemplate = ({
  id,
  poster_path,
  original_title,
  original_name,
  release_date,
}): string => {
  return `
        <li data-id=${id} class='movie-item'>
          <img src="https://image.tmdb.org/t/p/w500${poster_path}"
           alt=${original_title || original_name} 
            width="394" height="574"/>
          <h3>${original_title || original_name}</h3>
          <p> | <span>${release_date}</span></p>
        </li>
      `;
};

const movieDetailsTemplate = ({
  poster_path,
  // original_title,
  // popularity,
  // vote_average,
  // vote_count,
  // overview,
}) => {
  return `
  <div class='movieDetailsContainer'>
  <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="" />
      <div class="details">
        <h2>grgrg</h2>
        <h3>about</h3>
        <p>grg</p>
        <ul class="btn-list">
          <li><button>add to Watched</button></li>
          <li><button>add to queue</button></li>
        </ul>
        </div>`;
};

export { moviesTemplate, movieDetailsTemplate };
