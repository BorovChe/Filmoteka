interface HeaderLinkRefs {
  home: HTMLElement;
  library: HTMLElement;
}

interface ModalRefs {
  closeModalBtn: HTMLElement;
  backdrop: HTMLDivElement;
  modal: HTMLDivElement;
  movieDetailsContainer: HTMLDivElement;
}

interface MoviesListRefs {
  generalMoviesList: HTMLDivElement;
  homeMoviesList: HTMLDivElement;
  libraryMoviesList: HTMLDivElement;
}

interface BtnLibraryRefs {
  watchedBtn: HTMLElement;
  queueBtn: HTMLElement;
}

interface BtnLibraryRefsInModal {
  watched: HTMLElement | null;
  queue: HTMLElement | null;
}

export { HeaderLinkRefs, ModalRefs, MoviesListRefs, BtnLibraryRefs, BtnLibraryRefsInModal };
