/*
 * StringCalculator
 * http://chamixblog.azurewebsites.net/
 *
 * Copyright (c) 2014 chamix
 * Licensed under the MIT license.
 */

'use strict';

exports.add = function(numbers) {
	if(numbers){
		var numberArray = numbers.split(',');
		if(numberArray.length === 0){	
			return parseInt(numbers);
		}
		var total = 0;
		for(var i=0; i<numberArray.length; i++){
			total += parseInt(numberArray[i]);
		}
		return total;
	}
  return 0;
};