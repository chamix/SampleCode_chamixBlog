/*
 * :RomanConvTDDKata
 * http://chamixblog.azurewebsites.net
 *
 * Copyright (c) 2014 Camilo Vera
 * Licensed under the MIT license.
 */

'use strict';
var romanDictTable = [{'r':'I','d':1},{'r':'V','d':5},{'r':'X','d':10},{'r':'L','d':50},{'r':'C','d':100},{'r':'D','d':500},{'r':'M','d':1000}];
var romanDictHelper=function(romanNumber){
	for(var i=0;i<romanDictTable.length;i++){
		if(romanDictTable[i].r === romanNumber){
			return romanDictTable[i].d;
		}
	}
};

//var numeralHelper=function(decimalNumber){
//	for(var i=0;romanDictTable.length;i++){
//		if(romanDictTable[i].d === decimalNumber){
//			return romanDictHelper[i].r;
//		}
//	}
//};

exports.RomanToDec = function(romanNumber) {
	var result = 0;		
	if(romanNumber){
		if(romanNumber.length>1){
			for(var i=0; i<romanNumber.length; i++){
				if(romanDictHelper(romanNumber[i+1])>romanDictHelper(romanNumber[i])){
					result-=romanDictHelper(romanNumber[i]);
				}
				else
				{
					result+=romanDictHelper(romanNumber[i]);
				}
			}
		}
		else{
			result+=romanDictHelper(romanNumber);
		}
	}
	return result;
};

exports.DecToRoman = function(decNumber){
	var result = '';
	if(decNumber){
		while(decNumber)
		{
			if(decNumber<4){
				result+='I';
				decNumber--;
			}
			if(decNumber === 4){
				result+='IV';
				decNumber=decNumber-4;
			}
			if(decNumber > 4 && decNumber < 9){
				result+='V';
				decNumber=decNumber-5;
			}
			if(decNumber === 9){
				result += 'IX';
				decNumber = decNumber - 9;
			}
			if(decNumber > 9 && decNumber < 40){
				result+='X';
				decNumber=decNumber-10;
			}
			if(decNumber > 39 && decNumber < 50){
				result+='XL';
				decNumber=decNumber-40;
			}
			if(decNumber > 49 && decNumber < 90){
				result+='L';
				decNumber-=50;
			}
			if(decNumber > 89 && decNumber < 100){
				result+='XC';
				decNumber-=90;
			}
			if(decNumber > 99 && decNumber < 400){
				result+='C';
				decNumber-=100;
			}
			if(decNumber > 399 && decNumber < 500){
				result+='CD';
				decNumber-=400;
			}
			if(decNumber > 499 && decNumber < 900){
				result+='D';
				decNumber-=500;
			}
			if(decNumber > 899 && decNumber < 1000){
				result+='CM';
				decNumber-=900;
			}
			if(decNumber > 999 && decNumber < 4999){
				result+='M';
				decNumber-=1000;
			}
		}
	}
	return result;
};