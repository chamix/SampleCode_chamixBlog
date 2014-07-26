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
	var result='';
	if(decNumber){
		result = 'I';
	}
	return result;
};