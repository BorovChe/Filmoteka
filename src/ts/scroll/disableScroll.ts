import { bodyRef } from '../refs';

function disableScroll() {
  const lockPaddingValue = window.innerWidth - bodyRef.offsetWidth + 'px';
  bodyRef.style.paddingRight = lockPaddingValue;
  bodyRef.style.overflow = 'hidden';
  //   fixBlocks.forEach(e => {
  //     e.style.paddingRight = lockPaddingValue;
  //   });
}

function enableScroll() {
  bodyRef.style.paddingRight = '0';
  bodyRef.style.overflow = '';
  //   fixBlocks.forEach((e) => {
  //     e.style.paddingRight = "";
  //   });
}

export { disableScroll, enableScroll };

// scrollBtn, fixBlocks
