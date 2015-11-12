'use strict';

var assert = require('assert');
var moduloPrueba = require('../lib');

describe('modulo-prueba', function () {
  it('FizzBuzz (1) should return 1', function () {
    var result = moduloPrueba.fizzBuzz(1);
    assert.equal(result, '1');
  });
});
