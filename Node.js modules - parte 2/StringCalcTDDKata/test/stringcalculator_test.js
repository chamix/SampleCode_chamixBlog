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
    // tests here
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
  }};
