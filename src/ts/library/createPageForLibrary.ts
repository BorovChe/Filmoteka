function createLibraryPage<T>(moviesList: T[], page: number, itemsPerPage: number): T[] {
  if (moviesList.length == itemsPerPage) return moviesList;
  else {
    const start: number = (page - 1) * itemsPerPage;
    const end: number = start + itemsPerPage;
    const slice: any = moviesList.slice(start, end);
    return slice;
  }
}

export { createLibraryPage };
