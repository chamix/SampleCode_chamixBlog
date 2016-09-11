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
	//Extend board (4x4) => (5x5)
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

GameOfLife.prototype.checkIfBoardClean = function (){
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++) {
			if(this.Board.matrix[i][j] !==0 ){
				return false;
			}
		}
	}
	return true;
}

GameOfLife.prototype.printBoard = function (e) {
	var i = 1;
	var j = 1;
	if(e){
		i = 0;
		j = 0;
	}
	var result = '[';
	for (var i = 1; i < this.Board.X + 1; i++) {
		result += '[';
		for (var j = 1; j < this.Board.Y + 1; j++) {
			if (j < this.Board.Y){
				result += this.Board.matrix[i][j].toString() + ', ';
			}
			else {
				result += this.Board.matrix[i][j].toString();
			}
		}
		if (i < this.Board.X){
			result += '], ';
		}
		else {
			result += ']';
		}
	}
	result += ']';
	return result;
}

GameOfLife.prototype.countNeighbours = function (i, j) {
	var CountNeighbours = 0;
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
	var currentValue = this.Board.matrix[i + 1][j + 1];
	// 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.
	if (currentValue === 1 && CountNeighbours < 2){
		return 0;
	}
	// 2. Any live cell with two or three live neighbours lives on to the next generation.
	if (currentValue === 1 && (CountNeighbours === 2 || CountNeighbours === 3)){
		return 1;
	}
	// 3. Any live cell with more than three live neighbours dies, as if by over-population.
	if (currentValue === 1 && CountNeighbours > 3){
		return 0;
	}
	// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	if (currentValue === 0 && CountNeighbours === 3){
		return 1;
	}
	return currentValue;
 };

GameOfLife.prototype.calculateNextGen = function () {
	var m = [[]];
	//init return matrix
	for (var i = 0; i < this.Board.X + 1; i++) {
		m[i] = [];
		for (var j = 0; j < this.Board.Y + 1; j++) {
			m[i][j] = 0;
		}
	}
	//copy Board to result matrix
	for (var i = 0; i < this.Board.X + 1; i++) {
		for (var j = 0; j < this.Board.Y + 1; j++) {
			m[i][j] = this.Board.matrix[i][j];
		}
	}
	//Calculate next generation matrix
	for (var i = 1; i < this.Board.X + 1; i++) {
		for (var j = 1; j < this.Board.Y + 1; j++){
			m[i][j] = this.liveOnNextGen(i - 1, j - 1);
		}
	}
	//copy result matrix to Board
	for (var i = 0; i < this.Board.X + 1; i++) {
		for (var j = 0; j < this.Board.Y + 1; j++) {
			this.Board.matrix[i][j] = m[i][j];
		}
	}
	return m;
};

module.exports = new GameOfLife();