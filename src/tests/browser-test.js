// selenium
const {
  By,
  Key,
  Builder,
  until,
} = require('selenium-webdriver');
// chrome driver
require('chromedriver');
// firefox driver
require('geckodriver');
// vars
const PORTFOLIO_URL = 'http://localhost:3000/portfolio';
// 'https://skoobydont.github.io/portfolio';
const NAV_TEXT = 'Skubak.AJ';
const LINKEDIN_URL='https://www.linkedin.com/in/ajskubak';
const GITHUB_URL='https://github.com/skoobydont';
/**
 * Clean Up Url From Special Encoding
 * @param {String} url some funky url
 * @returns {String} replaces any encoded characters
 */
const cleanUrl = (url) => url.replace(/%2F/g, '/').replace(/%3A/g, ':');
/**
 * Test Footer Buttons
 * @param {Object} drvr current driver
 * @returns {Object} results of each footer button
 */
const testFooterButtons = async (drvr) => {
  try {
    return await drvr
      .wait(
        until.elementsLocated(By.css('.MuiBottomNavigation-root')),
        1000,
      )
      .then(async () => {
        const theFoot = await drvr
          .findElement(By.css('.MuiBottomNavigation-root'));
        // click home button
        await theFoot
          .findElement(By.id('Home'))
          .click();
        const theHomeUrl = await drvr.getCurrentUrl();
        // click linkedin button
        await theFoot
          .findElement(By.id('LinkedIn'))
          .click();        
        const allTabs = await drvr.getAllWindowHandles();
        // switch to newly opened tab & check url
        await drvr.switchTo().window(allTabs[1]);
        const linkedInUrl = await drvr.getCurrentUrl();
        // close tab
        await drvr.close();
        // go back to original tab
        await drvr.switchTo().window(allTabs[0]);
        // click github button
        await theFoot
          .findElement(By.id('GitHub'))
          .click();
        const moreTabs = await drvr.getAllWindowHandles();
        // switch to newly opened tab & check url
        await drvr.switchTo().window(moreTabs[1]);
        const githubUrl = await drvr.getCurrentUrl();
        // return results of each button
        return {
          homeButton: cleanUrl(theHomeUrl).includes(PORTFOLIO_URL),
          linkedInButton: cleanUrl(linkedInUrl).includes(LINKEDIN_URL),
          gitHubButton: cleanUrl(githubUrl).includes(GITHUB_URL),
        };
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (e) {
    console.error(e);
    return false;
  }
};
/**
 * Test Nav Text
 * @param {Object} drvr driver obj
 * @returns {Object} results of nav text test
 */
const testNavText = async (drvr) => {
  try {
    return await drvr
      .wait(
        until.elementsLocated(By.css('header')),
        1500,
      )
      .then(async () => {
        // find nav by selecting <header /> element
        const theNav = await drvr
          .findElement(By.css('header'));
        // find text within button
        const navText = await theNav
          .findElement(By.css('.MuiButton-label'))
          .getText();
        // evaluate against given text
        return {
          navText: navText === NAV_TEXT,
        };
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  } catch (e) {
    console.error(e);
    return false;
  }
};
/**
 * Test Initial Application Load
 * @param {Object} drvr the driver
 * @returns {Object} if div id root is found
 */
const testInitLoad = async (drvr) => {
  try {
    return await drvr
      .wait(
        until.elementsLocated(By.id('root')),
        1000,
      )
      .then(async () => {
        const rootDiv = await drvr
          .findElement(By.id('root'));
        return {
          initLoad: Boolean(rootDiv),
        };
      })
      .catch((err) => {
        console.error(err);
        return false;
      });
  } catch (e) {
    console.error(e);
    return false;
  }
};

/**
 * Single Browser Google Search Test
 * @param {String} browser the specified browser to test
 * @description test that goes to google on passed browser,
 *  queries search string & then returns whether page title ===
 *  (search string + "- Google Search")
 * @returns {Boolean}
 */
const singleBrowserTest = async (browser) => {
  const driver = await new Builder().forBrowser(browser).build();
  // get site
  await driver.get(PORTFOLIO_URL);
  // test that root div loads correctly
  const initLoad = await testInitLoad(driver);
  if (initLoad.initLoad) {
    // additional tests post init load
    const navRes = await testNavText(driver);
    const footRes = await testFooterButtons(driver);
    console.log('the footres', footRes);
  }
  // test header
  // find search input & send query + press enter (return)
  // await driver
  //   .wait(
  //     until.elementsLocated(By.name('q')),
  //     1000
  //   )
  //   .then(async () => {
  //     await driver
  //       .findElement(By.name('q'))
  //       .sendKeys(SEARCHSTRING, Key.RETURN);
  //   })
  //   .catch((e) => {
  //     console.error('esh ', e);
  //   });
  // verify page title
  // const title = await driver
  //   .wait(
  //     until.titleIs(`${SEARCHSTRING} - Google Search`),
  //     1000,
  //   )
  //   .then(async () => {
  //     try {
  //       return await driver.getTitle();
  //     } catch (err) {
  //       throw new Error(err);
  //     }
  //   })
  //   .catch((e) => {
  //     console.error('yeesh ', e);
  //   });
  // cleanup
  await driver.quit();
  // return if title equates to search string
  // return title === `${SEARCHSTRING} - Google Search`;
};
/**
 * Run Multiple Browser Tests
 * @async
 * @description run basic google search test on each of provided supported
 *  browsers. Will attempt to query search string & verify page title after submit
 */
const multiBrowserTests = async () => {
  // Add additional browsers here (ENSURE YOU IMPORT PROPER DRIVERS ABOVE)
  const supportedBrowswers = [
    'chrome',
    // 'firefox',
  ];
  // run basic google test for each supported browser
  supportedBrowswers.forEach(
    async (sB) => {
      try {
        const result = await singleBrowserTest(sB);
        console.log(`${sB}: ${result ? 'passed' : 'failed'}`);
      } catch (e) {
        console.error(e);
      }
    }
  );
};

multiBrowserTests();
