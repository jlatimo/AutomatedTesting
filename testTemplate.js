var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

driver.sleep(2000).then(function() {
    driver.getTitle().then(function(title) {
      if(title === 'webdriver - Google Search') {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
    });
  });