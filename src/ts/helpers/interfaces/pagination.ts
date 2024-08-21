interface PaginationSetting {
  startPage: number;
  moviesType: string;
  totalItemsHome: number;
  searchQuery: string;
}

interface PaginationInit {
  page: number;
  itemsPerPage: number;
  totalItems: number;
}

export { PaginationSetting, PaginationInit };
