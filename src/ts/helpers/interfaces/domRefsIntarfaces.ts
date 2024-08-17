interface HeaderLinkRefs {
  home: HTMLElement | null;
  library: HTMLElement | null;
}

interface ModalRefs {
  closeModalBtn: HTMLElement | null;
  backdrop: HTMLElement | null;
  modal: HTMLElement | null;
  movieDetailsContainer: HTMLElement | null;
}

interface MoviesListRefs {
  generalMoviesList: HTMLElement | null;
  homeMoviesList: HTMLElement | null;
  libraryMoviesList: HTMLDivElement | null;
}

interface BtnLibraryRefs {
  watchedBtn: HTMLElement | null;
  queueBtn: HTMLElement | null;
}

interface BtnLibraryRefsInModal {
  watched: HTMLElement | null;
  queue: HTMLElement | null;
}

export { HeaderLinkRefs, ModalRefs, MoviesListRefs, BtnLibraryRefs, BtnLibraryRefsInModal };
