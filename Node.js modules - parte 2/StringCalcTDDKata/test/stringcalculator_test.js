'use strict';

var stringcalculator = require('../lib/stringcalculator.js');

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

exports.stringcalculator = {
  setUp: function(done) {
    // setup here
    done();
  },
  'test 1': function(test) {
    test.expect(1);
    test.equal(stringcalculator.add(''), 0, 'Add Should return 0 if string empty');
    test.done();
  },
  'test 2': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1'), 1,'Add Should return 1 if string is "1"');
    test.done();
  },
  'test 3': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1,2'), 3,'Add Should return 3 if string is "1,2"');
    test.done();
  },
  'test 4': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1,2,10,11'), 24,'Add Should return 24 if string is "1,2"');
    test.done();
  },
  'test 5': function(test){
    test.expect(1);
    test.throws(stringcalculator.add('camilo'), Error,'Only numeric values are allowed');
    test.done();
  },
  'test 6': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1,2,-1'), 2,'Add should return 2 if string is "1,2,-1"');
    test.done();
  },
  'test 7': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1,2,--1'), 4,'Add should return 4 if string is "1,2,--1"');
    test.done();
  },
  'test 8': function(test){
    test.expect(1);
    test.equal(stringcalculator.add('1,2,++1'), 4,'Add should return 4 if string is "1,2,++1"');
    test.done();
  }
};