class HomePage {
    constructor(page) {
      this.page = page;
    }


    NewHeaderLink(){

        return this.page.locator("//div[text()='New'][1]");
    }

    ProfileIcon(){

      return this.page.locator("//div[text()='Sign In']");
    }

    HomePageLink(){
      return this.page.getByRole('link', { name: 'Home' });
    }  

    HomePageVerification(){

      return this.page.getByRole('heading', { name: 'Recommended Products' });
    }

    CollectionHeaderLink(){

      return this.page.getByRole('link', { name: 'Collections' });
    }

    CollectionVerification(){

      return this.page.getByRole('heading', { name: 'Collections' })
    }

    AboutUsHeaderLink(){
      return this.page.getByRole('link', { name: 'About us' });
    }

    AboutUsVerification(){

      return this.page.getByRole('heading', { name: 'About Spanx Inc.' })
    }


}

module.exports = HomePage;