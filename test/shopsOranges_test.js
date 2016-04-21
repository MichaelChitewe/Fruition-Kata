var assert = require('assert')
var shopsOranges = require('../shopsOranges');

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


describe('find all the shops that sell oranges',function(){
  it('return shops that sell oranges',function(){

    var result = shopsOranges(shops);
    assert.equal(result);
  });

})
