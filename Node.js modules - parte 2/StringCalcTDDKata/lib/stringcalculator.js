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
		var numberArray = numbers.split(','),
			total = 0;
		if(numberArray.length === 0){	
			return parseInt(numbers);
		}
		for(var i=0; i<numberArray.length; i++){
			numberArray[i] = numberArray[i].replace('--','');
			numberArray[i] = numberArray[i].replace('++', '');		
			total += parseInt(numberArray[i]);
		}
		return total;
	}
  return 0;
};