# Automated Testing
Selenium-Mocha JavaScript automated testing


Selenium Notes

Monday, October 14, 2019
11:21 AM

	• When using Selenium .js for automated testing  follow these steps listed below.
		○ Run "node your_filename,js" in the terminal
		○ Make sure the Weddriver is running
		

Error/Exception handling in Vue.js application

From <https://medium.com/js-dojo/error-exception-handling-in-vue-js-application-6c26eeb6b3e4> 

Alert & Popup Window Handling in Selenium WebDriver

From <https://www.guru99.com/alert-popup-handling-selenium.html> 

getWindowHandle() Selenium Webdriver Javascript

From <https://stackoverflow.com/questions/29855006/getwindowhandle-selenium-webdriver-javascript> 


How to Find Element in Selenium?

From <https://www.toolsqa.com/selenium-webdriver/find-element-selenium/> 

Choosing Effective XPaths

From <https://www.toolsqa.com/selenium-webdriver/choosing-effective-xpath/> 

How do I catch Selenium Errors using WebDriverJS

From <https://stackoverflow.com/questions/28636402/how-do-i-catch-selenium-errors-using-webdriverjs> 

Selenium Urls

Monday, September 9, 2019
10:47 AM

Setting Up a TestOps Environment Using Selenium WebDriver and JavaScript.

From <https://www.inflectra.com/ideas/whitepaper/setting-up-a-testops-environment-using-selenium-webdriver-and-javascript.aspx> 

https://www.freecodecamp.org/news/how-to-write-reliable-browser-tests-using-selenium-and-node-js-c3fdafdca2a9/


https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment

Passing require('chromedriver).path directly to selenium-webdriver

From <https://stackoverflow.com/questions/27733731/passing-requirechromedriver-path-directly-to-selenium-webdriver> 

Automating Chrome on Windows with JavaScript using Selenium's WebDriverJS

From <http://aboutcode.net/2013/12/02/automating-chrome-on-windows-with-javascript-using-selenium-webdriverjs.html> 


/// Variable to store the current window handle (browser tab) ///
// var tab1 = driver.getWindowHandle();

  // driver.findElement(By.cssSelector("a[href='#/Jumplink/:id']")).click();
  // driver.findElement(By.partialLinkText("Jump Links")).click();
  // assertEquals("#/Jumplink/:id", link.getAttribute("href"));
  // driver.findElement(By.xpath("href[#/Jumplink/:id]")).click();

https://www.techbeamers.com/findelement-and-findelements-commands-examples/#by.5

What is Mocha and Chai?
Mocha is a test framework responsible for defining and running test suites, while Chai is an assertion library helping you to implement these suites. Looking at the examples of their website Mocha makes things like this possible:

From <https://nehalist.io/selenium-tests-with-mocha-and-chai-in-javascript/> 


// Tests/DefaultTest.js const {Builder, By, until} = require('selenium-webdriver'); (async function example() { const driver = await new Builder().forBrowser('chrome').build(); try { await driver.get('https://www.google.com'); await driver.findElement(By.name('q')).sendKeys('nehalist'); await driver.findElement(By.id('tsf')).submit(); await driver.wait(until.elementLocated(By.id('search'))); await driver.findElement(By.linkText('nehalist.io')).click(); await driver.wait(until.titleIs('nehalist.io')); } finally { await driver.quit(); } })();

From <https://nehalist.io/selenium-tests-with-mocha-and-chai-in-javascript/> 





