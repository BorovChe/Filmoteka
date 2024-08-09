import { moviesTemplate } from 'ts/templates/templates';

async function moviesListRender(listRef: any, data: any) {
  const test = await data;
  listRef!.innerHTML = '';
  const movieItems = test.map(moviesTemplate).join('');
  listRef?.insertAdjacentHTML('afterbegin', movieItems);
}

export { moviesListRender };
