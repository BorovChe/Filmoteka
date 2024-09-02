const signUpTemplate = (): string => {
  return `
  <strong>SignUp</strong>
    <form class="signUp-form">
      <input class="email-input" placeholder="Email" name="email" type="email" />
      <input class="password-input" placeholder="Password" name="password" type="password" />
        <button type='submit' class="submit-signUp">SignUp</button>
        <button type='button' class="google-signIn">Гугел</button>
    </form>
    <p>or</p><button type=button class='signIn-btn-inModal'>SignIn</button>
    `;
};

const signInTemplate = (): string => {
  return `
  <strong>SignIn</strong>
    <form class="signIn-form">
      <input class="email-input" placeholder="Email" name="email" type="email" />
      <input class="password-input" placeholder="Password" name="password" type="password" />
      <button type='submit' class="submit-signIn">SignIn</button>
      <button type='button' class="google-signIn">Гугел</button>
  </form>
    <p>or</p><button type=button class='signUp-btn-inModal'>SignUp</button>
  `;
};

export { signUpTemplate, signInTemplate };
