var assert = require('assert')
var apples_descending = require('../apples_descending');

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


  describe('the seller and prices of apples order descending by price',function(){
    it('return order descending by price: seller and prices of apples',function(){

      var result = apples_descending(shops);
      assert.equal(result);
    });

  })
