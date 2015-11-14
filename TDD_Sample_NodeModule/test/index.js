'use strict';

var assert = require('assert');
var moduloPrueba = require('../lib');

describe('modulo-prueba', function () {
  it('FizzBuzz (1) should return 1', function () {
    var result = moduloPrueba.fizzBuzz(1);
    assert.equal(result, '1');
  });

  it('FizzBuzz (2) should return 2', function () {
	var result = moduloPrueba.fizzBuzz(2);
 	assert.equal(result, '2');
  });

  it('FizzBuzz (3) should return Fizz', function () {
  	var result = moduloPrueba.fizzBuzz(3);
  	assert.equal(result, 'Fizz');
  });

  it('FizzBuzz (4) should return 4', function () {
  	var result = moduloPrueba.fizzBuzz(4);
  	assert.equal(result, '4');
  });

  it('FizzBuzz (5) should return Buzz', function () {
  	var result = moduloPrueba.fizzBuzz(5);
  	assert.equal(result, 'Buzz');
  });

  it('FizzBuzz (6) should return Fizz', function () {
  	var result = moduloPrueba.fizzBuzz(6);
  	assert.equal(result, 'Fizz');
  });

  it('FizzBuzz (7) should return 7', function () {
  	var result = moduloPrueba.fizzBuzz(7);
  	assert.equal(result, '7');
  });

  it('FizzBuzz (8) should return 8', function () {
  	var result = moduloPrueba.fizzBuzz(8);
  	assert.equal(result, '8');
  });

  it('FizzBuzz (9) should return Fizz', function () {
  	var result = moduloPrueba.fizzBuzz(9);
  	assert.equal(result, 'Fizz');
  });

  it('FizzBuzz (15) should return FizzBuzz', function () {
  	var result = moduloPrueba.fizzBuzz(15);
  	assert.equal(result, 'FizzBuzz');
  });
});
