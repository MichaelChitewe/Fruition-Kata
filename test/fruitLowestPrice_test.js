var assert = require('assert')
var fruitLowestPrice = require('../fruitLowestPrice');

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


  describe('find the seller of fruit with the lowest price',function(){
    it('return seller of fruit with the lowest price',function(){

      var result = fruitLowestPrice(shops);
      assert.equal(result);
    });

  })
