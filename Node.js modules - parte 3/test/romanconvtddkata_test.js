'use strict';

var romanconvtddkata = require('../lib/romanconvtddkata.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.romanconvtddkata = {
  setUp: function(done) {
    // setup here
    done();
  },
  'Test 0': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec(''), 0, 'RomanToDec should return 0 when string empty');
    test.done();
  },
  'Test {I -> 1}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('I'), 1, 'RomanToDec should return 1 when "1"');
    test.done();
  },
  'Test {II -> 2}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('II'), 2, 'RomanToDec should return 2 when "II"');
    test.done();
  },
  'Test {V -> 5}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('V'), 5, 'RomanToDec should return 5 when "V"');
    test.done();
  },
  'Test {VII -> 7}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('VII'), 7, 'RomanToDec should return 7 when "VII"');
    test.done();
  },
  'Test {IV -> 4}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('IV'), 4, 'RomanToDec should return 4 when "IV"');
    test.done();
  },
  'Test {IX -> 9}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('IX'), 9, 'RomanToDec should return 9 when "IX"');
    test.done();
  },
  'Test {XIV -> 14}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('XIV'), 14, 'RomanToDec should return 14 when "XIV"');
    test.done();
  },
  'Test {XIX -> 19}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('XIX'), 19, 'RomanToDec should return 19 when "XIX"');
    test.done();
  },
  'Test {XLIV -> 44}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('XLIV'), 44, 'RomanToDec should return 44 when "XLIV"');
    test.done();
  },
  'Test {MMMCMXCIX -> 3999}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('MMMCMXCIX'), 3999, 'RomanToDec should return 3999 when "XLIV"');
    test.done();
  },
  'Test {MMCDLXXXII -> 2482}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.RomanToDec('MMCDLXXXII'), 2482, 'RomanToDec should return 2482 when "XLIV"');
    test.done();
  }
};