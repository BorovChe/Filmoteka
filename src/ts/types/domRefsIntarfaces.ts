interface IHeaderLinkRefs {
  home: HTMLElement;
  library: HTMLElement;
}

interface IAuthRefs {
  authBlock: HTMLDivElement;
  signUp: HTMLElement;
  signIn: HTMLElement;
  signOut: HTMLElement;
  userWrapper: HTMLDivElement;
  currentUser: HTMLElement;
}

interface IModalRefs {
  closeModalBtn: HTMLElement;
  backdrop: HTMLDivElement;
  modal: HTMLDivElement;
  modalContainer: HTMLDivElement;
}

interface IMoviesListRefs {
  generalMoviesList: HTMLDivElement;
  homeMoviesList: HTMLDivElement;
  libraryMoviesList: HTMLDivElement;
}

interface IBtnLibraryRefs {
  watchedBtn: HTMLElement;
  queueBtn: HTMLElement;
}

interface IBtnLibraryRefsInModal {
  listBtn: HTMLButtonElement | null;
  watched: HTMLButtonElement | null;
  queue: HTMLButtonElement | null;
  checkedAuth: HTMLElement | null;
}

export { IHeaderLinkRefs, IAuthRefs, IModalRefs, IMoviesListRefs, IBtnLibraryRefs, IBtnLibraryRefsInModal };
