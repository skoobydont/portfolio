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
// interface
interface WebDriver {
  wait: Function;
  findElement: Function;
  sleep: Function;
  getCurrentUrl: Function;
  getAllWindowHandles: Function;
  switchTo: Function;
  close: Function;
}
// vars
const PORTFOLIO_URL = 'http://localhost:3000/portfolio';
// 'https://skoobydont.github.io/portfolio';
const NAV_TEXT = 'Skubak.AJ';
const LINKEDIN_URL='https://www.linkedin.com/in/ajskubak';
const GITHUB_URL='https://github.com/skoobydont';
/* Helpers */
/**
 * Clean Up Url From Special Encoding
 * @param {String} url some funky url
 * @returns {String} replaces any encoded characters
 */
const cleanUrl = (url: string) => url.replace(/%2F/g, '/').replace(/%3A/g, ':');
/**
 * Update Test Results
 * @param {Object} currentRes current test result object
 * @param {Object} newRes the new test results
 * @returns {Object} updated test result object
 */
const updatedTestResults = (currentRes: {}, newRes: { [key: string]: string }) => {
  if (currentRes === null || newRes === null) return {};
  let res = { ...currentRes };
  if (Object.keys(newRes).length > 0) {
    Object.keys(newRes).forEach((nR) => {
      res = {
        ...res,
        [nR]: newRes[nR],
      };
    });
  }
  return res;
};
/* Test Logic */
const testWorkExp = async (drvr: WebDriver) => {
  try {
    return await drvr
      .wait(
        until.elementLocated(By.id('workExp')),
        1500,
      )
      .then(async () => {
        const workExp = await drvr
          .findElement(By.id('workExp'));
        console.log('work exp ', workExp);
        await workExp.click();
        await drvr.sleep(1000);
        // TODO: expanded resume test logic
        return {
          workExp: Boolean(workExp),
        };
      })
      .catch((er: string | undefined) => {
        throw new Error(er);
      })
  } catch (e) {
    console.error(e);
    return false;
  }
};
/**
 * Test TLDR
 * @param {Object} drvr web driver
 * @returns {Object} does TLDR render?
 */
const testTLDR = async (drvr: WebDriver) => {
  try {
    return await drvr
      .wait(
        until.elementLocated(By.css('code')),
        1500,
      )
      .then(async () => {
        const tldr = await drvr
          .findElement(By.css('code'))
          .getText();
        return {
          tldr: tldr.includes('TLDR'),
        };
      })
      .catch((err: string | undefined) => {
        throw new Error(err);
      });
  } catch (e) {
    console.error(e);
    return false;
  }
};
/**
 * Test Footer Buttons
 * @param {Object} drvr current driver
 * @returns {Object} results of each footer button
 */
const testFooterButtons = async (drvr: WebDriver) => {
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
        // go back home
        await drvr.switchTo().window(moreTabs[0]);
        // return results of each button
        return {
          homeButton: cleanUrl(theHomeUrl).includes(PORTFOLIO_URL),
          linkedInButton: cleanUrl(linkedInUrl).includes(LINKEDIN_URL),
          gitHubButton: cleanUrl(githubUrl).includes(GITHUB_URL),
        };
      })
      .catch((err: string | undefined) => {
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
const testNavText = async (drvr: WebDriver) => {
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
      .catch((err: string | undefined) => {
        throw new Error(err);
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
const testInitLoad = async (drvr: WebDriver) => {
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
      .catch((err: string | undefined) => {
        throw new Error(err);
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
const singleBrowserTest = async (browser: string) => {
  const driver = await new Builder().forBrowser(browser).build();
  // get site
  await driver.get(PORTFOLIO_URL);
  let testRes = {};
  // test that root div loads correctly
  const initLoad = await testInitLoad(driver);
  if (initLoad.initLoad) {
    // additional tests post init load
    // nav tests
    const navRes = await testNavText(driver);
    testRes = updatedTestResults(testRes, navRes);
    // footer tests
    const footRes = await testFooterButtons(driver);
    testRes = updatedTestResults(testRes, footRes);
    // tldr tests
    const tldrRes = await testTLDR(driver);
    testRes = updatedTestResults(testRes, tldrRes);
    // work exp tests
    const workRes = await testWorkExp(driver);
    testRes = updatedTestResults(testRes, workRes);
  }
  // cleanup
  await driver.quit();

  return testRes;
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
        const result: { [key: string]: string | boolean } = await singleBrowserTest(sB);
        if (typeof result === 'object' && Object.keys(result).length > 0) {
          const failedTests = [];
          const passedTests = [];
          Object.keys(result).forEach((r, i) => {
            console.log(` ${i} - ${r}: ${result[r]}`);
            if (Boolean(result[r])) {
              passedTests.push(result[r]);
            } else {
              failedTests.push(result[r]);
            }
          });
          console.log(`${failedTests.length} failed tests`);
          console.log(`${passedTests.length} passed tests`);
          process.exit(0);
        }
        
      } catch (e) {
        console.error(e);
      }
    }
  );
};

multiBrowserTests();
