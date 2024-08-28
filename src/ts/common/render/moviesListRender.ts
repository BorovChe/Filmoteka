import { moviesTemplate } from 'ts/templates/templates';

import { NewMovie } from 'ts/types/movies';

function moviesListRender(listRef: HTMLElement, data: NewMovie[]): void {
  listRef!.innerHTML = '';
  const movieItems = data
    .map((item: NewMovie): string => {
      if (item.value) return moviesTemplate(item.value);
      else return moviesTemplate(item);
    })
    .join('');
  listRef.insertAdjacentHTML('afterbegin', movieItems);
}

export { moviesListRender };
