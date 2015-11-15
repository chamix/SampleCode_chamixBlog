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
	for (var i = 0; i < this.Board.X; i++) {
		this.Board.matrix.push([]);
		for (var j = 0; j < this.Board.Y; j++) {
			this.Board.matrix[i].push(0);
		}
	}
};

GameOfLife.prototype.setInitialState = function (init) {
	for (var i = 0; i < this.Board.X; i++) {
		for (var j = 0; j < this.Board.Y; j++) {
			this.Board.matrix[i][j] = init[i][j];
		}
	}
};

GameOfLife.prototype.clearBoard = function () {
	for (var i = 0; i < this.Board.X; i++) {
		for (var j = 0; j < this.Board.Y; j++) {
			this.Board.matrix[i][j] = 0;
		}
	}
};

GameOfLife.prototype.calculateFirstRule = function () {
	return this.Board.matrix;
}

module.exports = new GameOfLife();
