import { NewDetails, NewMovie } from 'ts/types/movies';

const moviesTemplate = ({ id, title, posterSrc, releaseDate, genres }: NewMovie): string => {
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

const movieDetailsTemplate = ({ id, posterSrc, vote, votes, popularity, title, genres, about }: NewDetails): string => {
  return `
    <img class='details-poster' loading='lazy' src="${posterSrc}" alt="" />
    <div>
     <h2 class='modal-title'>${title}</h2>
    <div class="details-block">
      <div class="details-title-block">
        <p>Vote / Votes</p>
        <p>Popularity</p>
        <p>Original Title </p>
        <p>Genre</p>
      </div>
      <div class="details-value-block">
       <p class=vote-block><span class='vote' >${vote}</span>/<span class='votes' >${votes}</span></p>
       <p>${popularity}</p> 
       <p>${title}</p>
       <p>${genres}</p>
      </div>
    </div>
      <div class='about'>
        <h3 class='about-title' >About</h3>
        <p>${about}</p>
      </div>
        <ul class="btn-list">
          <li><button class='modal-library-btn js-btn-watched' data-id="${id}">add to Watched</button></li>
          <li><button class='modal-library-btn js-btn-queue' data-id="${id}">add to Queue</button></li>
        </ul>
        <p class='checked-auth'><button type=button class='signIn-btn-inModal'>SignIn</button> or <button type=button class='signUp-btn-inModal'>SignUp</button> to add movies</p>
        </div>
       `;
};

const moviesListStub = (warningText: string): string => {
  return `
  <div class='stub-block'>
  <h2 class='stub-title' >${warningText}</h2>
  <img class='stub-gif' width='400px' src="https://i.gifer.com/1FaK.gif" alt="stub movies gif" />
  </div>
  `;
};

export { moviesTemplate, movieDetailsTemplate, moviesListStub };
