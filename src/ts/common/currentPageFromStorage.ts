import { setDataFromSessionSrorage } from 'ts/storage/sessionStorage/sessionStorageController';
import { ICurrentPage, IPageSet } from 'ts/types/helpers';

function createCurrentPageFromStorage(page: number, type: string, query: string) {
  const pageSet: IPageSet = {
    page: page,
    type: type,
    query: query,
  };
  setDataFromSessionSrorage('currentSetPagination', pageSet);
}

function updateCurrentPageFromStorage(currentPage: ICurrentPage, setPage: number, setType?: string): void {
  currentPage.page = setPage;
  if (setType) {
    currentPage.type = setType;
  }
  setDataFromSessionSrorage('currentSetPagination', currentPage);
}

export { updateCurrentPageFromStorage, createCurrentPageFromStorage };
