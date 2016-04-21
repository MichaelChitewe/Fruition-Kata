var assert = require('assert')
var apples_ascending = require('../apples_ascending');

var shops = [{
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
}];

  describe('the seller and prices of apples order ascending by price',function(){
    it('return order ascending by price: seller and prices of apples',function(){

      var result = apples_ascending(shops);
      assert.equal(result);
    });

  })
