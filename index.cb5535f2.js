!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=a.parcelRequired76b;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){s[e]=t},a.parcelRequired76b=i);var r=i.register;r("iE7OH",function(t,a){e(t.exports,"register",function(){return n},function(e){return n=e});var n,s=new Map;n=function(e,t){for(var a=0;a<t.length-1;a+=2)s.set(t[a],{baseUrl:e,path:t[a+1]})}}),r("aNJCr",function(t,a){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});var n,s={};n=function(e){var t=s[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),s[e]=t),t}}),i("iE7OH").register(i("aNJCr").getBundleURL("7o1Gz"),JSON.parse('["7o1Gz","index.cb5535f2.js","iZSSn","sprite.02b3eaa4.svg","8181l","library.ae70f0aa.js","2jUpQ","library.runtime.7bcfdffd.js","jm0TH","index.bc0d6b2b.css"]')),i("ioqnc"),i("2lior");var o=i("imjxJ"),l=i("ixw25"),u=i("h2V5u"),c=i("8pgbe"),d=i("gFS1C"),g=i("ejkSG");let p={width:"280px",position:"right-top",distance:"10px",timeout:2e3,backOverlay:!1,showOnlyTheLastOne:!0,clickToClose:!0,fontFamily:"Quicksand",fontSize:"16px",cssAnimationDuration:800,useIcon:!1,useFontAwesome:!0,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"15px",failure:{background:"rgb(255, 0, 27, 1)",textColor:"#fff"},warning:{background:"rgb(255, 0, 27, 1)",textColor:"#fff"}};var f=i("d7crU");async function m(e){e.preventDefault();let t=e.target,a=t.elements.searchMovies.value.trim();if((0,f.createCurrentPageFromStorage)(d.paginationSettings.startPage,"SEARCH_MOVIES",a),""===a){(0,g.Notify).warning("Please enter the movie title!",p);return}let n=await (0,u.getSearchMovies)(a,d.paginationSettings.startPage);(0,l.checkingForMoviesAndRender)(o.moviesListRefs.homeMoviesList,n,c.movieListStubTitles.search),t.reset()}(0,o.searchFormRef).addEventListener("submit",m),i("2txD2"),i("e3CjK"),i("h2V5u"),i("1Ep8q");var u=i("h2V5u"),o=i("imjxJ"),l=i("ixw25"),c=i("8pgbe"),o=i("imjxJ"),l=i("ixw25"),u=i("h2V5u"),c=i("8pgbe"),f=i("d7crU");async function h(e){(0,f.createCurrentPageFromStorage)(e,"TRENDING_MOVIES","");let t=await (0,u.getTrendingMovies)(e);(0,l.checkingForMoviesAndRender)(o.moviesListRefs.homeMoviesList,t,c.movieListStubTitles.common)}var b=i("goE6W"),d=i("gFS1C");let v=(0,b.getDataFromSessionStorage)("currentSetPagination");!async function(){if((0,o.headerLinkRefs).home.classList.add("header-link-active"),!v)return h(d.paginationSettings.startPage);if("SEARCH_MOVIES"===v.type){let e=await (0,u.getSearchMovies)(v.query,v.page);(0,l.checkingForMoviesAndRender)(o.moviesListRefs.homeMoviesList,e,c.movieListStubTitles.search)}else h(v.page||d.paginationSettings.startPage)}();var o=i("imjxJ"),y=i("kvhdh"),S=i("kR1YT"),w={};w=i("aNJCr").getBundleURL("7o1Gz")+"sprite.02b3eaa4.svg";let R=()=>`
  <strong class='auth-title'>Sign Up</strong>
    <form class="signUp-form">
    <div class='input-wrapper'>
    <label class='auth-label' for="Name">Name</label>
    <input class="auth-input" placeholder="Name" name="name" type="text" />
    </div>
    <div class='input-wrapper'>
    <label class='auth-label' for="Email">Email</label>
      <input class="auth-input" placeholder="Email" name="email" type="email" />
      </div>
      <div class='input-wrapper'>
      <label class='auth-label' for="Password">Password</label>
      <input class="auth-input" placeholder="Password" name="password" type="password" />
      </div>
       <div class='submit-wrapper'>
        <button type='submit' class="auth-submit-btn submit-signUp">Sign Up</button>
        <button type='button' class="google-signIn"> <svg class="" width="38" height="38">
          <use href="${/*@__PURE__*/t(w)}#google"></use>
        </svg></button>
        </div>
    </form>
    <div class='redirect-wrapper'>
    <p class='text'>or</p><button type=button class='redirect-btn signIn-btn-inModal'>Sign In</button>
    </div>
    `,L=()=>`
  <strong class='auth-title'>Sign In</strong>
    <form class="signIn-form">
     <div class='input-wrapper'>
     <label class='auth-label' for="Email">Email</label>
      <input class="auth-input" placeholder="Email" name="email" type="email" />
      </div>
      <div class='input-wrapper'>
       <label class='auth-label' for="Password">Password</label>
      <input class="auth-input" placeholder="Password" name="password" type="password" />
      </div>
      <div class='submit-wrapper'>
       <button type='submit' class="auth-submit-btn submit-signIn">Sign In</button>
      <button type='button' class="google-signIn"> <svg class="" width="32" height="32">
          <use href="${/*@__PURE__*/t(w)}#google"></use>
        </svg></button>
      </div>
  </form>
  <div class='redirect-wrapper'>
<p class='text'>or</p><button type=button class='redirect-btn signUp-btn-inModal'>Sign Up</button>
  </div>
  `;var E=i("bDjAe"),x=i("gHQDN"),k=i("gQOBw"),E=i("bDjAe"),y=i("kvhdh"),g=i("ejkSG");let C=new k.GoogleAuthProvider;async function U(){try{await (0,k.signInWithPopup)(E.auth,C),(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,g.Notify).failure(e)}}var k=i("gQOBw"),g=i("ejkSG"),y=i("kvhdh");async function I(e,t,a){try{await (0,k.signInWithEmailAndPassword)(e,t,a),(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,g.Notify).failure(e)}}var k=i("gQOBw"),g=i("ejkSG"),y=i("kvhdh"),o=i("imjxJ");async function M(e,t,a,n){try{let s=await (0,k.createUserWithEmailAndPassword)(e,a,n);await (0,k.updateProfile)(e.currentUser,{displayName:t}),o.authRefs.currentUser.textContent=s.user.displayName,(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,g.Notify).failure(e)}}var F=i("7Olfg"),k=i("gQOBw");(0,o.authRefs).authBlock.addEventListener("click",function(e){if(e.target===o.authRefs.signUp&&((0,o.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,o.modalRefs).modalContainer.classList.add("auth-container"),(0,S.modalRender)(R()),(0,y.onOpenModal)(),O=document.querySelector(".signUp-form")),e.target===o.authRefs.signIn&&((0,o.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,o.modalRefs).modalContainer.classList.add("auth-container"),(0,S.modalRender)(L()),(0,y.onOpenModal)(),O=document.querySelector(".signIn-form")),e.target===o.authRefs.signOut&&(0,F.signOutFunc)(E.auth),O){O.addEventListener("submit",A);let e=document.querySelector(".google-signIn");e?.addEventListener("click",U)}});let O=null;async function A(e){if(!O)return;e.preventDefault();let t=new FormData(O),a=t.get("name"),n=t.get("email"),s=t.get("password");O.classList.contains("signUp-form")?M(E.auth,a,n,s):I(E.auth,n,s)}function j(e){o.authRefs.signUp.style.display="none",o.authRefs.signIn.style.display="none",o.authRefs.signOut.style.display="flex",o.headerLinkRefs.library.style.pointerEvents="",o.headerLinkRefs.library.style.opacity="1",o.authRefs.currentUser.style.display="block",o.authRefs.currentUser.textContent=e.displayName,o.authRefs.userWrapper.style.display="flex"}function N(){o.authRefs.signUp.style.display="inline-block",o.authRefs.signIn.style.display="inline-block",o.authRefs.signOut.style.display="none",o.headerLinkRefs.library.style.pointerEvents="none",o.headerLinkRefs.library.style.opacity="0.6",o.authRefs.userWrapper.style.display="none"}(0,k.onAuthStateChanged)(E.auth,e=>{null!==e?(j(e),(0,x.setDataFromLocalSrorage)("auth",e)):(N(),(0,x.setDataFromLocalSrorage)("auth",null))}),function(){let e=(0,x.getDataFromLocalStorage)("auth");e?j(e):N()}();var o=i("imjxJ"),S=i("kR1YT"),E=i("bDjAe");(0,o.modalRefs).modalContainer.addEventListener("click",function(e){let t=document.querySelector(".signUp-btn-inModal"),a=document.querySelector(".signIn-btn-inModal");if(e.target===t&&((0,o.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,o.modalRefs).modalContainer.classList.add("auth-container"),(0,S.modalRender)(R()),P=document.querySelector(".signUp-form")),e.target===a&&((0,o.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,o.modalRefs).modalContainer.classList.add("auth-container"),(0,S.modalRender)(L()),P=document.querySelector(".signIn-form")),P){P.addEventListener("submit",_);let e=document.querySelector(".google-signIn");e?.addEventListener("click",U)}});let P=null;async function _(e){if(!P)return;e.preventDefault();let t=new FormData,a=t.get("name"),n=t.get("email"),s=t.get("password");P.classList.contains("signUp-form")?M(E.auth,a,n,s):I(E.auth,n,s)}i("7ZSN0")}();
//# sourceMappingURL=index.cb5535f2.js.map
