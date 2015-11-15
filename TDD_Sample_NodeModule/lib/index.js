'use strict';

var FizzBuzz = function () {};

FizzBuzz.prototype.fizzBuzz = function (n) {
	var result = '';
	var remainder_3 = n % 3;
	var remainder_5 = n % 5;
	if (remainder_3 === 0){
		result += 'Fizz';
	}
	if (remainder_5 === 0){
		result += 'Buzz';
	}
	if(result === '')
	{
		result = n.toString();
	}
	return result;
};

FizzBuzz.prototype.fizzBuzz_Serie = function (n) {
	var result = [];
	for (var i=1; i< n+1; i++){
		result.push = FizzBuzz.fizzBuzz(i);
	}
	return result;
};

module.exports = new FizzBuzz();
