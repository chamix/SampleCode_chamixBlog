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
		var resultAssert = '[';
		for (var i = 1; i < gameOfLife.Board.X + 1; i++) {
			resultAssert += '[';
			for (var j = 1; j < gameOfLife.Board.Y + 1; j++) {
				if (j < gameOfLife.Board.Y){
					resultAssert += gameOfLife.Board.matrix[i][j].toString() + ', ';
				}
				else {
					resultAssert += gameOfLife.Board.matrix[i][j].toString();
				}
			}
			if (i < gameOfLife.Board.X){
				resultAssert += '], ';
			}
			else {
				resultAssert += ']';
			}
		}
		resultAssert += ']';
		assert.strictEqual(resultAssert, '[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 1, 0]]');
	});
	it('clearBoard should set the all matrix values in 0', function () {
		gameOfLife.setBoardSize(5, 5);
		var init = [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		gameOfLife.clearBoard();
		var resultAssert = '[';
		for (var i = 1; i < gameOfLife.Board.X + 1; i++) {
			resultAssert += '[';
			for (var j = 1; j < gameOfLife.Board.Y + 1; j++) {
				if (j < gameOfLife.Board.Y){
					resultAssert += gameOfLife.Board.matrix[i][j].toString() + ', ';
				}
				else {
					resultAssert += gameOfLife.Board.matrix[i][j].toString();
				}
			}
			if (i < gameOfLife.Board.X){
				resultAssert += '], ';
			}
			else {
				resultAssert += ']';
			}
		}
		resultAssert += ']';
		assert.strictEqual(resultAssert, '[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]');
	});

	// Rules:
	// 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.

	it('getNumberOfCalculations should return the number of calcs to next gen with rule 1 ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.getNumberOfCalculations();
		assert.strictEqual(result, 7);
	});
	it('countNeighbours should return 1 given the sample (Rule 1) ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 0);
		assert.strictEqual(result, 1);
	});
	it('countNeighbours should return 2 given the sample (Rule 1) ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 1);
		assert.strictEqual(result, 2);
	});
	it('liveOnNextGen should return true given the sample (Rule 1) ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 1);
		assert.strictEqual(result, true);
	});
	it('liveOnNextGen should return false given the sample (Rule 1) ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 0);
		assert.strictEqual(result, false);
	});
	/*
	it('calculateFirstRule should calculate the next gen using the first rule', function () {
		gameOfLife.setBoardSize(5, 5);
		var init = [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 1]];
		var end = [[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 0], [0, 1, 1, 0, 0]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.calculateFirstRule();
		var resultAssert = '[';
		for (var i = 1; i < gameOfLife.Board.X + 1; i++) {
			resultAssert += '[';
			for (var j = 1; j < gameOfLife.Board.Y + 1; j++) {
				if (j < gameOfLife.Board.Y){
					resultAssert += result[i][j].toString() + ', ';
				}
				else {
					resultAssert += result[i][j].toString();
				}
			}
			if (i < gameOfLife.Board.X){
				resultAssert += '], ';
			}
			else {
				resultAssert += ']';
			}
		}
		resultAssert += ']';
		assert.strictEqual(resultAssert, '[[0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 0], [0, 1, 1, 0, 0]]');
	});
	*/
});
