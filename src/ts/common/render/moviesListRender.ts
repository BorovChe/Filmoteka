import { moviesTemplate } from 'ts/templates/templates';

function moviesListRender(listRef: any, data: any) {
  listRef!.innerHTML = '';
  const movieItems = data
    .map((item: any) => {
      return moviesTemplate(item);
    })
    .join('');
  listRef?.insertAdjacentHTML('afterbegin', movieItems);
}

function libraryMoviesListRender(listRef: any, data: any) {
  listRef!.innerHTML = '';
  const movieItems = data
    .map((item: any) => {
      return moviesTemplate(item.value);
    })
    .join('');
  listRef?.insertAdjacentHTML('afterbegin', movieItems);
}

export { moviesListRender, libraryMoviesListRender };
