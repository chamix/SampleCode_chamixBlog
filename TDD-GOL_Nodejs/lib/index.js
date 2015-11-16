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

var live = function (i, j, m) {
	var countNeighbours = 0;
	var xLimDown = i - 1;
	var yLimDown = j - 1;
	var xLimUp = i + 1;
	var yLimUp = j + 1;
	for (var x = xLimDown; x < xLimUp + 1; x++) {
		for (var y = yLimDown; i < yLimUp + 1; y++) {
			if (!(x === i && y === j)){
				if(m[x][y] === 1)
					countNeighbours ++;
			}				
		};
	};
	if(countNeighbours < 2)
		return false;
};

GameOfLife.prototype.calculateFirstRule = function () {
	var m = this.Board.matrix;
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++) {
			if (m[i][j] === 1){
				if (!live(i, j, m)){
					m[i][j] = 0; //Die because of rule 1
				}
			}
		}
	}
	return this.Board.matrix;
};

module.exports = new GameOfLife();
