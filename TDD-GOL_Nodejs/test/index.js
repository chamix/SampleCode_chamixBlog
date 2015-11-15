'use strict';

var assert = require('assert');
var gameOfLife = require('../lib');

describe('game-of-life-chamix', function () {
	it('Should have Board object with x and y properties', function () {
		var result = gameOfLife.Board;
		assert.strictEqual(result.X, 4);
		assert.strictEqual(result.Y, 4);
	});
	it('setBoardSize should set the size of the Board = 8 x 8', function () {
		var result = gameOfLife.Board;
		gameOfLife.setBoardSize(8, 8);
		assert.strictEqual(result.X, 8);
		assert.strictEqual(result.Y, 8);
	});
	it('initMatrix should initialize the matrix of the board', function () {
		gameOfLife.setBoardSize(4, 4);
		gameOfLife.initMatrix();
		assert(gameOfLife.Board.matrix[3][3] === 0, 'board is set ok');
	});
	it('setInitialState should set the inital state of the game board', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 1, 0]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = true;
		for (var i = 0; i < gameOfLife.Board.X; i++) {
			for (var j = 0; j < gameOfLife.Board.Y; j++) {
				if (gameOfLife.Board.matrix[i][j] !== init[i][j]){
					result = false;
				}
			}
		}
		assert(result, 'board is set ok');
	});
	it('clearBoard should set the all matrix values in 0', function () {
		gameOfLife.setBoardSize(5, 5);
		var init = [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		gameOfLife.clearBoard();
		var result = true;
		for (var i = 0; i < gameOfLife.Board.X; i++) {
			for (var j = 0; j < gameOfLife.Board.Y; j++) {
				if (gameOfLife.Board.matrix[i][j] !== 0){
					result = false;
				}
			}
		}
		assert(result, 'board is clean');
	});
	//Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	it('calculateFirstRule should calculate the next gen using the first rule', function () {
		gameOfLife.setBoardSize(5, 5);
		var init = [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 1]];
		var end = [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 0], [0, 1, 1, 0, 0]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.calculateFirstRule();
		var resultAssert = true;
		for (var i = 0; i < gameOfLife.Board.X; i++) {
			for (var j = 0; j < gameOfLife.Board.Y; j++) {
				if (gameOfLife.Board.matrix[i][j] !== end[i][j]){
					result = false;
				}
			}
		}
		assert(result, 'first rule calculation fail');
	});
});