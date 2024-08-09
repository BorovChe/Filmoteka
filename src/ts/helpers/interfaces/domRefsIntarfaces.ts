interface ModalRefs {
  closeModalBtn: HTMLElement | null;
  backdrop: HTMLElement | null;
  modal: HTMLElement | null;
}

interface MoviesListRefs {
  generalMoviesList: HTMLElement | null;
  homeMoviesList: HTMLElement | null;
  libraryMoviesList: HTMLElement | null;
}

interface BtnLibraryRefs {
  watchedBtn: HTMLElement | null;
  queueBtn: HTMLElement | null;
}

export { ModalRefs, MoviesListRefs, BtnLibraryRefs };
