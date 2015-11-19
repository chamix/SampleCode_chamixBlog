'use strict';

var GameOfLife = function () {
	this.Board = {
		X: 4,
		Y: 4,
		matrix: [[]]
	};
};

GameOfLife.prototype.setBoardSize = function (x, y) {
	this.Board.X = x;
	this.Board.Y = y;
};

GameOfLife.prototype.initMatrix = function () {
	for (var i = 0; i < this.Board.X + 1; i++) {
		this.Board.matrix.push([]);
		for (var j = 0; j < this.Board.Y + 1; j++) {
			this.Board.matrix[i].push(0);
		}
	}
};

GameOfLife.prototype.setInitialState = function (init) {
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++) {
			this.Board.matrix[i][j] = init[i - 1][j - 1];
		}
	}
};

GameOfLife.prototype.clearBoard = function () {
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++) {
			this.Board.matrix[i][j] = 0;
		}
	}
};

GameOfLife.prototype.countNeighbours = function (i, j) {
	var CountNeighbours = '';
	var xLimUp = i + 2;
	var yLimUp = j + 2;
	for (var x = i; x < xLimUp + 1; x++) {
		for (var y = j; y < yLimUp + 1; y++) {
			if (!(x === i + 1 && y === j + 1)) {
				if (this.Board.matrix[x][y] === 1) {
					CountNeighbours ++;
				}
			}
		}
	}
	return CountNeighbours;
};

GameOfLife.prototype.liveOnNextGen = function (i, j) {
	var CountNeighbours = this.countNeighbours(i, j);
	// 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	if (CountNeighbours < 2){
		return false;
	}
	return true;
};

GameOfLife.prototype.getNumberOfCalculations = function () {
	var m = this.Board.matrix;
	var result = 0;
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++) {
			if (m[i][j] === 1){
				result ++;
			}
		}
	}
	return result;
};

module.exports = new GameOfLife();
