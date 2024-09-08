import icons from 'images/sprite/sprite.svg';

const signUpTemplate = (): string => {
  return `
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
          <use href="${icons}#google"></use>
        </svg></button>
        </div>
    </form>
    <div class='redirect-wrapper'>
    <p class='text'>or</p><button type=button class='redirect-btn signIn-btn-inModal'>Sign In</button>
    </div>
    `;
};

const signInTemplate = (): string => {
  return `
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
          <use href="${icons}#google"></use>
        </svg></button>
      </div>
  </form>
  <div class='redirect-wrapper'>
<p class='text'>or</p><button type=button class='redirect-btn signUp-btn-inModal'>Sign Up</button>
  </div>
  `;
};

export { signUpTemplate, signInTemplate };
