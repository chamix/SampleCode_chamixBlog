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

	// CountNeighbours()
	it('(0,0)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 0);
		assert.strictEqual(result, 1);
	});
	it('(0, 1)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 1);
		assert.strictEqual(result, 2);
	});
	it('(0, 2) ', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 2);
		assert.strictEqual(result, 2);
	});
	it('(0, 3)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(0, 3);
		assert.strictEqual(result, 2);
	});
	it('(1, 0)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(1, 0);
		assert.strictEqual(result, 1);		
	});
	it('(1, 1)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(1, 1);
		assert.strictEqual(result, 4);		
	});
	it('(1, 2)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(1, 2);
		assert.strictEqual(result, 3);		
	});
	it('(1, 3)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(1, 3);
		assert.strictEqual(result, 3);		
	});
	it('(2, 0)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(2, 0);
		assert.strictEqual(result, 1);		
	});
	it('(2, 1)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(2, 1);
		assert.strictEqual(result, 4);		
	});
	it('(2, 2)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(2, 2);
		assert.strictEqual(result, 3);
	});
	it('(2, 3)',function(){
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(2, 3);
		assert.strictEqual(result, 4);		
	});
	it('(3, 0)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 0);
		assert.strictEqual(result, 0);
	});
	it('(3, 1)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 1);
		assert.strictEqual(result, 3);
	});
	it('(3, 2)', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.countNeighbours(3, 2);
		assert.strictEqual(result, 2);
	});
	it('(3, 3)', function () {
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
	it('(0, 2) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 2);
		assert.strictEqual(result, 1);
	});
	it('(0, 3) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(0, 3);
		assert.strictEqual(result, 0);
	});
	it('(1, 0) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(1, 0);
		assert.strictEqual(result, 0);
	});
	it('(1, 1) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(1, 1);
		assert.strictEqual(result, 0);
	});
	it('(1, 2) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(1, 2);
		assert.strictEqual(result, 1);
	});
	it('(1, 3) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(1, 3);
		assert.strictEqual(result, 1);
	});
	it('(2, 0) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(2, 0);
		assert.strictEqual(result, 0);
	});
	it('(2, 1) = 0 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(2, 1);
		assert.strictEqual(result, 0);
	});
	it('(2, 2) = 1 liveOnNextGen should return 1', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(2, 2);
		assert.strictEqual(result, 1);
	});
	it('(2, 3) = 1 liveOnNextGen should return 0', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.liveOnNextGen(2, 3);
		assert.strictEqual(result, 0);
	});
	it('(3, 0) = 0 liveOnNextGen should return 0', function () {
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
	});

	//calculateNextGen
	it('calculateNextGen should calculate the next generation', function () {
		gameOfLife.setBoardSize(4, 4);
		var init = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [1, 0, 1, 1]];
		gameOfLife.initMatrix();
		gameOfLife.setInitialState(init);
		var result = gameOfLife.calculateNextGen();
		var resultAssert = gameOfLife.printBoard();
		assert.strictEqual(result[1][1], 0);
		assert.strictEqual(result[1][2], 0);
	});
});
