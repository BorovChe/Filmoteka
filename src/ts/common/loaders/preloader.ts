import { preloaderRef } from '../refs';
import { disableScroll, enableScroll } from 'ts/helpers/scroll/controllersScroll';

disableScroll();

document.body.onload = function (): void {
  setTimeout((): void => {
    if (!preloaderRef.classList.contains('done')) {
      preloaderRef.classList.add('done');
      enableScroll();
    }
  }, 400);
};
