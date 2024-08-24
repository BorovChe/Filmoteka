import { bodyRef } from '../../common/refs';

function disableScroll(): void {
  const lockPaddingValue: string = window.innerWidth - bodyRef!.offsetWidth + 'px';
  bodyRef!.style.paddingRight = lockPaddingValue;
  bodyRef!.style.overflow = 'hidden';
}

function enableScroll(): void {
  bodyRef!.style.paddingRight = '0';
  bodyRef!.style.overflow = '';
}

export { disableScroll, enableScroll };
