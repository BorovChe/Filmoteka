!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in t){var a=t[e];delete t[e];var r={id:e,exports:{}};return i[e]=r,a.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,i){t[e]=i},e.parcelRequired76b=a),a.register,a("ioqnc"),a("2lior"),a("7lOwY"),a("ixw25");var r=a("imjxJ"),s=a("gHQDN"),n=a("ixw25"),o=a("8pgbe"),l=a("e3CjK"),c=a("gFS1C"),g=a("lmFhk"),L=a("d7crU"),v=a("goE6W"),d=a("6TCM2");let{startPage:b}=c.paginationSettings;async function u(){(0,r.btnLibraryMoviesRefs).queueBtn.classList.remove("active-movie-list"),(0,r.btnLibraryMoviesRefs).watchedBtn.classList.add("active-movie-list");let e=(0,s.getDataFromLocalStorage)("watchedListMovies");(0,L.createCurrentPageFromStorage)(b,"WATCHED_MOVIES","");let i=(0,d.createLibraryPage)(e,1,20);(0,n.checkingForLibraryMoviesAndRender)(r.moviesListRefs.libraryMoviesList,await (0,g.getMoviesListOnLibrary)(i),o.movieListStubTitles.watched,e.length),(0,l.initPagination)(b,20,e.length)}async function y(){(0,r.btnLibraryMoviesRefs).watchedBtn.classList.remove("active-movie-list"),(0,r.btnLibraryMoviesRefs).queueBtn.classList.add("active-movie-list");let e=(0,s.getDataFromLocalStorage)("queueListMovies");(0,L.createCurrentPageFromStorage)(b,"QUEUE_MOVIES","");let i=(0,d.createLibraryPage)(e,1,20);(0,n.checkingForLibraryMoviesAndRender)(r.moviesListRefs.libraryMoviesList,await (0,g.getMoviesListOnLibrary)(i),o.movieListStubTitles.queue,e.length),(0,l.initPagination)(b,20,e.length)}(0,r.btnLibraryMoviesRefs).watchedBtn.addEventListener("click",u),(0,r.btnLibraryMoviesRefs).queueBtn.addEventListener("click",y),async function(){let e=(0,v.getDataFromSessionStorage)("currentSetPagination"),i=(0,s.getDataFromLocalStorage)("watchedListMovies"),t=(0,s.getDataFromLocalStorage)("queueListMovies");if((0,r.headerLinkRefs).library.classList.add("header-link-active"),!e){(0,r.btnLibraryMoviesRefs).watchedBtn.classList.add("active-movie-list"),(0,L.createCurrentPageFromStorage)(b,"WATCHED_MOVIES","");let e=(0,d.createLibraryPage)(i,b,20);(0,n.checkingForLibraryMoviesAndRender)(r.moviesListRefs.libraryMoviesList,await (0,g.getMoviesListOnLibrary)(e),o.movieListStubTitles.watched,i.length),(0,l.initPagination)(b,20,i.length);return}if("QUEUE_MOVIES"!==e.type){(0,r.btnLibraryMoviesRefs).watchedBtn.classList.add("active-movie-list"),(0,L.createCurrentPageFromStorage)(e.page||b,"WATCHED_MOVIES","");let t=(0,d.createLibraryPage)(i,e.page||b,20);(0,n.checkingForLibraryMoviesAndRender)(r.moviesListRefs.libraryMoviesList,await (0,g.getMoviesListOnLibrary)(t),o.movieListStubTitles.watched,i.length),(0,l.initPagination)(e.page,20,i.length)}if("QUEUE_MOVIES"===e.type){(0,r.btnLibraryMoviesRefs).queueBtn.classList.add("active-movie-list"),(0,L.createCurrentPageFromStorage)(e.page||b,"QUEUE_MOVIES","");let i=(0,d.createLibraryPage)(t,e.page||b,20);(0,n.checkingForLibraryMoviesAndRender)(r.moviesListRefs.libraryMoviesList,await (0,g.getMoviesListOnLibrary)(i),o.movieListStubTitles.queue,t.length),(0,l.initPagination)(e.page,20,t.length)}}(),a("e3CjK"),a("h2V5u"),a("1Ep8q")}();
//# sourceMappingURL=library.d880a343.js.map
