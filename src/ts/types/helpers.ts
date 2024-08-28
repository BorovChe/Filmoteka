interface ICurrentPage {
  page: number;
  type: string;
  query: string;
}

interface IPageSet {
  page: number;
  type: string;
  query: string;
}

interface IQueryParams {
  searchValue: string;
  pageNumber: number;
}

interface IMovieListStubTitles {
  search: string;
  common: string;
  watched: string;
  queue: string;
}

export { IPageSet, ICurrentPage, IMovieListStubTitles, IQueryParams };
