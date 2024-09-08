function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},s=t.parcelRequired76b;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return a[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired76b=s),(0,s.register)("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return a},set:function(e){return a=e},enumerable:!0,configurable:!0});var a,n=new Map;a=function(e,t){for(var a=0;a<t.length-1;a+=2)n.set(t[a],{baseUrl:e,path:t[a+1]})}}),s("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["l53ZJ","index.e648bba4.js","5Aif5","sprite.02b3eaa4.svg","f6LxU","library.d5f3b896.js","8pNXe","library.runtime.3a590514.js"]')),s("8BLYq"),s("ghd3k");var i=s("asj7U"),r=s("g2HCo"),o=s("jkGDt"),l=s("cDe6Z"),u=s("aXXGU"),c=s("1GAPJ");const d={width:"280px",position:"right-top",distance:"10px",timeout:2e3,backOverlay:!1,showOnlyTheLastOne:!0,clickToClose:!0,fontFamily:"Quicksand",fontSize:"16px",cssAnimationDuration:800,useIcon:!1,useFontAwesome:!0,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"15px",failure:{background:"rgb(255, 0, 27, 1)",textColor:"#fff"},warning:{background:"rgb(255, 0, 27, 1)",textColor:"#fff"}};var g=s("26jpS");async function p(e){e.preventDefault();let t=e.target,a=t.elements.searchMovies.value.trim();if((0,g.createCurrentPageFromStorage)(u.paginationSettings.startPage,"SEARCH_MOVIES",a),""===a){(0,c.Notify).warning("Please enter the movie title!",d);return}let n=await (0,o.getSearchMovies)(a,u.paginationSettings.startPage);(0,r.checkingForMoviesAndRender)(i.moviesListRefs.homeMoviesList,n,l.movieListStubTitles.search),t.reset()}(0,i.searchFormRef).addEventListener("submit",p),s("jzMJC"),s("dsYso"),s("jkGDt"),s("g5Oyh");var o=s("jkGDt"),i=s("asj7U"),r=s("g2HCo"),l=s("cDe6Z"),i=s("asj7U"),r=s("g2HCo"),o=s("jkGDt"),l=s("cDe6Z"),g=s("26jpS");async function f(e){(0,g.createCurrentPageFromStorage)(e,"TRENDING_MOVIES","");let t=await (0,o.getTrendingMovies)(e);(0,r.checkingForMoviesAndRender)(i.moviesListRefs.homeMoviesList,t,l.movieListStubTitles.common)}var m=s("4S1lB"),u=s("aXXGU");const h=(0,m.getDataFromSessionStorage)("currentSetPagination");!async function(){if((0,i.headerLinkRefs).home.classList.add("header-link-active"),!h)return f(u.paginationSettings.startPage);if("SEARCH_MOVIES"===h.type){let e=await (0,o.getSearchMovies)(h.query,h.page);(0,r.checkingForMoviesAndRender)(i.moviesListRefs.homeMoviesList,e,l.movieListStubTitles.search)}else f(h.page||u.paginationSettings.startPage)}();var i=s("asj7U"),y=s("gyx0h"),b=s("7UV4g"),v={};v=new URL("sprite.02b3eaa4.svg",import.meta.url).toString();const S=()=>`
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
          <use href="${/*@__PURE__*/e(v)}#google"></use>
        </svg></button>
        </div>
    </form>
    <div class='redirect-wrapper'>
    <p class='text'>or</p><button type=button class='redirect-btn signIn-btn-inModal'>Sign In</button>
    </div>
    `,R=()=>`
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
          <use href="${/*@__PURE__*/e(v)}#google"></use>
        </svg></button>
      </div>
  </form>
  <div class='redirect-wrapper'>
<p class='text'>or</p><button type=button class='redirect-btn signUp-btn-inModal'>Sign Up</button>
  </div>
  `;var w=s("l9ZQJ"),L=s("613rw"),E=s("eyjy7"),w=s("l9ZQJ"),y=s("gyx0h"),c=s("1GAPJ");const U=new E.GoogleAuthProvider;async function k(){try{await (0,E.signInWithPopup)(w.auth,U),(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,c.Notify).failure(e)}}var E=s("eyjy7"),c=s("1GAPJ"),y=s("gyx0h");async function C(e,t,a){try{await (0,E.signInWithEmailAndPassword)(e,t,a),(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,c.Notify).failure(e)}}var E=s("eyjy7"),c=s("1GAPJ"),y=s("gyx0h"),i=s("asj7U");async function M(e,t,a,n){try{let s=await (0,E.createUserWithEmailAndPassword)(e,a,n);await (0,E.updateProfile)(e.currentUser,{displayName:t}),i.authRefs.currentUser.textContent=s.user.displayName,(0,y.onCloseModal)()}catch(t){let e;e=t instanceof Error?t.message:String(t),(0,c.Notify).failure(e)}}var x=s("dabnO"),E=s("eyjy7");(0,i.authRefs).authBlock.addEventListener("click",function(e){if(e.target===i.authRefs.signUp&&((0,i.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,i.modalRefs).modalContainer.classList.add("auth-container"),(0,b.modalRender)(S()),(0,y.onOpenModal)(),I=document.querySelector(".signUp-form")),e.target===i.authRefs.signIn&&((0,i.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,i.modalRefs).modalContainer.classList.add("auth-container"),(0,b.modalRender)(R()),(0,y.onOpenModal)(),I=document.querySelector(".signIn-form")),e.target===i.authRefs.signOut&&(0,x.signOutFunc)(w.auth),I){I.addEventListener("submit",P);let e=document.querySelector(".google-signIn");e?.addEventListener("click",k)}});let I=null;async function P(e){if(!I)return;e.preventDefault();let t=new FormData(I),a=t.get("name"),n=t.get("email"),s=t.get("password");I.classList.contains("signUp-form")?M(w.auth,a,n,s):C(w.auth,n,s)}function A(e){i.authRefs.signUp.style.display="none",i.authRefs.signIn.style.display="none",i.authRefs.signOut.style.display="flex",i.headerLinkRefs.library.style.pointerEvents="",i.headerLinkRefs.library.style.opacity="1",i.authRefs.currentUser.style.display="block",i.authRefs.currentUser.textContent=e.displayName,i.authRefs.userWrapper.style.display="flex"}function F(){i.authRefs.signUp.style.display="inline-block",i.authRefs.signIn.style.display="inline-block",i.authRefs.signOut.style.display="none",i.headerLinkRefs.library.style.pointerEvents="none",i.headerLinkRefs.library.style.opacity="0.6",i.authRefs.userWrapper.style.display="none"}(0,E.onAuthStateChanged)(w.auth,e=>{null!==e?(A(e),(0,L.setDataFromLocalSrorage)("auth",e)):(F(),(0,L.setDataFromLocalSrorage)("auth",null))}),function(){let e=(0,L.getDataFromLocalStorage)("auth");e?A(e):F()}();var i=s("asj7U"),b=s("7UV4g"),w=s("l9ZQJ");(0,i.modalRefs).modalContainer.addEventListener("click",function(e){let t=document.querySelector(".signUp-btn-inModal"),a=document.querySelector(".signIn-btn-inModal");if(e.target===t&&((0,i.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,i.modalRefs).modalContainer.classList.add("auth-container"),(0,b.modalRender)(S()),j=document.querySelector(".signUp-form")),e.target===a&&((0,i.modalRefs).modalContainer.classList.remove("modal-details-container"),(0,i.modalRefs).modalContainer.classList.add("auth-container"),(0,b.modalRender)(R()),j=document.querySelector(".signIn-form")),j){j.addEventListener("submit",D);let e=document.querySelector(".google-signIn");e?.addEventListener("click",k)}});let j=null;async function D(e){if(!j)return;e.preventDefault();let t=new FormData,a=t.get("name"),n=t.get("email"),s=t.get("password");j.classList.contains("signUp-form")?M(w.auth,a,n,s):C(w.auth,n,s)}s("jspKm");
//# sourceMappingURL=index.e648bba4.js.map
