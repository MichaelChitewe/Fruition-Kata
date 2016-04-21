var assert = require('assert')
var cheapestFruit = require('../cheapestFruit');


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

  describe('should find the cheapest fruit',function(){
    it('return the cheapest fruit',function(){

      var result = cheapestFruit(shops);
      assert.equal(result);
    });

  })
