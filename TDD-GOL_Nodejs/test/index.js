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
	it('printBoard should return an string with the formated board as multi dim array', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.printBoard();
		assert.strictEqual(result, '[[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]]');
	});
	it('setInitialState should set the inital state of the game board', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 1, 0]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var resultAssert = gameOfLife.printBoard();
		assert.strictEqual(resultAssert, '[[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [1, 1, 1, 0]]');
	});
	it('clearBoard should set the all matrix values in 0', function () {
		gameOfLife.setBoardSize(5, 5);
		var init = [[0, 0, 0, 0, 0], [0, 1, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		gameOfLife.clearBoard();
		var resultAssert = gameOfLife.printBoard();
		assert.strictEqual(resultAssert, '[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]');
	});

	// Rules:
	// 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.

	it('(0,0) = 0 countNeighbours should return 1 given the sample (0,0) = 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 0);
		assert.strictEqual(result, 1);
	});
	it('(0, 1) = 0 countNeighbours should return 2 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 1);
		assert.strictEqual(result, 2);
	});
	it('(2, 2) = 1countNeighbours should return 3 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(2, 2);
		assert.strictEqual(result, 3);
	});
	it('(3, 0) = 0 countNeighbours should return 0 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 0);
		assert.strictEqual(result, 0);
	});
	it('(3, 1) = 0 countNeighbours should return 3 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 1);
		assert.strictEqual(result, 3);
	});
	it('(3, 2) = 1 countNeighbours should return 2 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 2);
		assert.strictEqual(result, 2);
	});
	it('(3, 3) = 1 countNeighbours should return 2 given the sample', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 3);
		assert.strictEqual(result, 2);
	});

	//liveOnNextGen
	it('(0, 0) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 0);
		assert.strictEqual(result, 0);
	});
	it('(0, 1) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 1);
		assert.strictEqual(result, 1);
	});
	it('(0, 1) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(2, 2);
		assert.strictEqual(result, 1);
	});
	it('(3, 0) = 1 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(3, 0);
		assert.strictEqual(result, 0);
	});
	it('(3, 1) = 0 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(3, 1);
		assert.strictEqual(result, 1);
	});
	it('(3, 2) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(3, 2);
		assert.strictEqual(result, 1);
	});
	it('(3, 3) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(3, 3);
		assert.strictEqual(result, 1);
		assert.strictEqual(gameOfLife.Board.matrix[4][4], 1);
	});

	//calculateNextGen
	it('calculateNextGen should calculate the next', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.calculateNextGen();
		var resultAssert = gameOfLife.printBoard();
		//assert.strictEqual(resultAssert, '[[0, 1, 1, 0], [0, 0, 1, 1], [0, 0, 1, 0], [0, 1, 1, 1]]');
		assert.strictEqual(result[4][1], 0, '[4][1], 0');
		assert.strictEqual(result[4][2], 1, '[4][2], 1');
		assert.strictEqual(result[4][3], 1, '[4][3], 1');
		assert.strictEqual(result[4][4], 1, "[4][4], 1");
	});
});
