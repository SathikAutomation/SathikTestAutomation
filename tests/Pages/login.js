class LoginPage {
  constructor(page) {
    this.page = page;
  }

  ProfileIcon(){

    return this.page.getByRole('button', { name: 'Account' })
  }

  SignInButton(){

    return this.page.locator("//div[text()='Sign In']");
  }

  LoginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  ShopifyLoginButton(){

    return this.page.getByRole('button', { name: 'Log in' })
  }

  AuthenticationLoginButton(){

    return this.page.getByRole('button', { name: 'Log in' }).click();
  }

  EmailField() {
    return this.page.getByRole('textbox', { name: 'Enter Email Address' })
  }

  Password(){
    return this.page.getByRole('textbox', { name: 'Enter Password' })
  }

  PermissionPasswordField(){
    return this.page.getByRole('textbox', { name: 'Password' })
  }

  LoginText(){

    return this.page.locator("//*[text()='Log in']")
    
  }
  PermissionEmailField(){
    return this.page.locator("//input[@id='account_email']")
  }

  ContinueWithEmail(){

    return this.page.locator("//*[text()='Continue with email']") 
    
      }
  
  


  EmptyEmailValidationMessage() {
    return this.page.locator("//li[text()='Incorrect email or password.']");
  }

  AcceptCookiesButton() {
    return this.page.getByRole('button', { name: 'Accept All Cookies' })
  }


 

  

  // Password field selector
  PasswordField() {
    return this.page.locator('[placeholder="Password"]');
  }

  // Login button selector
 
  // Setting link selector
  SettingLink() {
    return this.page.locator("//*[text()='Settings']");
  }

  // Logout button selector
  AsideLogoutButton() {
    return this.page.locator("//*[text()='sathik.a@vuedata.in']/following::div[1]");
  }

  // Empty Email Validation message


  // Empty Password Validation message
  EmptyPasswordValidationMessage() {
    return this.page.locator("//*[text()='\"password\" is not allowed to be empty']");
  }

  EmptyEmailValidationMessage() {
    return this.page.locator("//*[text()='\"email\" is not allowed to be empty']");
  }
//*[text()='"password" is not allowed to be empty']
  // Forgot Password link
  ForgetPasswordLink() {
    return this.page.locator("//*[text()='Forgot your password?']");
  }

  // Send Password Reset Email button
  SendpasswordButton() {
    return this.page.locator("//button[text()='Send Password Reset Email']");
  }

  // Reset email field
  ResetEmailBox() {
    return this.page.locator("//input[@placeholder='Email']");
  }

  // Captcha related frame handling
  RecaptchaCheckbox() {
    return this.page.locator('iframe[name="ifmail"]').contentFrame().locator('iframe[name="a-b2cf5vl277aa"]').contentFrame().getByText("I'm not a robot");
  }
}

module.exports = LoginPage;
