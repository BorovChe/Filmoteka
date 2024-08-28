import { setDataFromSessionSrorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { ICurrentPage } from 'ts/types/helpers';
import { PaginationSetting } from 'ts/types/pagination';

function updateCurrentPageFromPagination(currentPage: ICurrentPage, paginationPage: number) {
  currentPage.page = paginationPage;
  setDataFromSessionSrorage('currentSetPagination', currentPage);
}

const paginationSettings: PaginationSetting = {
  startPage: 1,
};

export { updateCurrentPageFromPagination, paginationSettings };
