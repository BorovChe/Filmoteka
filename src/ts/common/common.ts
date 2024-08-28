import { headerLinkRefs, logoRef } from 'ts/common/refs';
import { getDataFromSessionStorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { ICurrentPage } from 'ts/types/helpers';
import { updateCurrentPageFromStorage } from './currentPageFromStorage';
import { paginationSettings } from './pagination/paginationHelpers';

const currentPage = getDataFromSessionStorage<ICurrentPage>('currentSetPagination');

headerLinkRefs.home.addEventListener('click', onClickHomeBtn);
headerLinkRefs.library.addEventListener('click', onClickLibraryBtn);
logoRef.addEventListener('click', onClickHomeBtn);

function onClickHomeBtn(): void {
  if (!currentPage) return;
  updateCurrentPageFromStorage(currentPage, paginationSettings.startPage, 'TRENDING_MOVIES');
}

function onClickLibraryBtn(): void {
  if (!currentPage) return;
  updateCurrentPageFromStorage(currentPage, paginationSettings.startPage);
}
