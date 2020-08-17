/// Required Webdriver Controller ///
const webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

/// Create a driver for your required testing browser (IE,Edge, Chrome,FireFox, Safari) ///
const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

/// Tester Email for Firewall access ///
const tester = "justin.latimore3@t-mobile.com";

/// The URL to the desired testing ///
driver.get('https://tmobileusa.sharepoint.com/sites/intranet');

/// Login through T-Mobile Firewall ///
driver.sleep(10000).then(function () {
  driver.findElement(By.name('loginfmt')).sendKeys(tester);
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
  driver.findElement(By.id('idSIButton9')).click();
});

/// Example Function 1///
driver.sleep(20000).then( function () {
  driver.getTitle().then( function (title) {
    if (title === 'T-Nation Home') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    // driver.quit();
  });
});

/// Example Function 2///
driver.sleep(30000).then( function () {
  driver.getTitle().then( function (title) {
    describe('#HomePage Check', function () {
      it('should see the T-Nation Home page === title', function (done) {
        title === 'T-Nation Home';
        done();
      });
    });

/// Kills Script ///
    // driver.quit();
  });
});

/// Example Function 3///
driver.sleep(30000).then( function () {
  // driver.findElement(By.id('ctl00_PlaceHolderSearchArea_ctl00_csr_sbox')).sendKeys(webdriver.Key.BACK_SPACE)
  driver.findElement(By.id('ctl00_PlaceHolderSearchArea_ctl00_csr_sbox')).sendKeys(webdriver.Key.CONTROL, 'a')
  driver.findElement(By.id('ctl00_PlaceHolderSearchArea_ctl00_csr_sbox')).sendKeys(webdriver.Key.BACK_SPACE)
  driver.findElement(By.id('ctl00_PlaceHolderSearchArea_ctl00_csr_sbox')).sendKeys('SCM');
    driver.findElement(By.id('q')).sendKeys(webdriver.Key.TAB);
    driver.findElement(By.id('ctl00_PlaceHolderSearchArea_ctl00_csr_SearchLink')).click();
    driver.sleep(30000);
});