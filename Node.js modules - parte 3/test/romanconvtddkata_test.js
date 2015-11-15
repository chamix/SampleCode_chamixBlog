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
  },
  'Test { 0 -> string empty}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(0), '', 'DecToRoman should return string empty when 0');
    test.done();
  },
  'Test { 1 -> I}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(1), 'I', 'DecToRoman should return "I" when 1');
    test.done();
  },
  'Test { 3 -> III}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(3), 'III', 'DecToRoman should return "III" when 3');
    test.done();
  },  
  'Test { 4 -> V}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(4), 'IV', 'DecToRoman should return "IV" when 4');
    test.done();
  },
  'Test { 5 -> V}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(5), 'V', 'DecToRoman should return "V" when 5');
    test.done();
  },
  'Test { 6 -> VI}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(6), 'VI', 'DecToRoman should return "VI" when 6');
    test.done();
  },
  'Test { 8 -> VIII}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(8), 'VIII', 'DecToRoman should return "VIII" when 8');
    test.done();
  },
  'Test { 9 -> IX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(9), 'IX', 'DecToRoman should return "IX" when 9');
    test.done();
  },
  'Test { 10 -> X}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(10), 'X', 'DecToRoman should return "X" when 10');
    test.done();
  },
  'Test { 39 -> XXXIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(39), 'XXXIX', 'DecToRoman should return "XXXIX" when 39');
    test.done();
  },
  'Test { 40 -> XL}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(40), 'XL', 'DecToRoman should return "XL" when 40');
    test.done();
  },
  'Test { 49 -> XLIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(49), 'XLIX', 'DecToRoman should return "XLIX" when 49');
    test.done();
  },
  'Test { 50 -> L}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(50), 'L', 'DecToRoman should return "L" when 50');
    test.done();
  },
  'Test { 89 -> LXXXIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(89), 'LXXXIX', 'DecToRoman should return "LXXXIX" when 89');
    test.done();
  },
  'Test { 90 -> XC}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(90), 'XC', 'DecToRoman should return "XC" when 90');
    test.done();
  },
  'Test { 105 -> CV}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(105), 'CV', 'DecToRoman should return "CV" when 105');
    test.done();
  },
  'Test { 389 -> CCCLXXXIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(389), 'CCCLXXXIX', 'DecToRoman should return "CCCLXXXIX" when 389');
    test.done();
  },
  'Test { 399 -> CCCXCIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(399), 'CCCXCIX', 'DecToRoman should return "CCCXCIX" when 399');
    test.done();
  },
  'Test { 499 -> CDXCIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(499), 'CDXCIX', 'DecToRoman should return "CDXCIX" when 499');
    test.done();
  },
  'Test { 689 -> DCLXXXIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(689), 'DCLXXXIX', 'DecToRoman should return "DCLXXXIX" when 689');
    test.done();
  },
  'Test { 999 -> CMXCIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(999), 'CMXCIX', 'DecToRoman should return "CMXCIX" when 999');
    test.done();
  },
  'Test { 1999 -> MCMXCIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(1999), 'MCMXCIX', 'DecToRoman should return "MCMXCIX" when 1999');
    test.done();
  },
  'Test { 3949 -> MMMCMXLIX}': function(test) {
    test.expect(1);
    // tests here
    test.equal(romanconvtddkata.DecToRoman(3949), 'MMMCMXLIX', 'DecToRoman should return "MMMCMXLIX" when 3949');
    test.done();
  }
};