/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


exports.__esModule = true;
exports.Board = void 0;
var cell_1 = __webpack_require__(2);
var Board = /** @class */ (function () {
    function Board(size, board) {
        var _this = this;
        this.CurrentPlayer = "X";
        this.GameActive = true;
        this.Moves = 0;
        this.Base = size;
        var sumCell = Math.pow(size, 2);
        this.Board = board;
        this.Cells = new Array(sumCell);
        for (var i = 0; i < sumCell; i++) {
            var element = document.createElement('div');
            element.classList.add('cell');
            element.id = "" + i;
            var newCell = new cell_1.Cell(element);
            newCell._htmlElement.addEventListener('mouseup', function (e) { return _this.move(e.target); });
            this.Cells[i] = newCell;
        }
    }
    Board.prototype.init = function () {
        for (var _i = 0, _a = this.Cells; _i < _a.length; _i++) {
            var element = _a[_i];
            this.Board.appendChild(element._htmlElement);
        }
        var info = document.querySelector('info');
        info.classList.add('info');
        var player = document.createElement('span');
        player.id = 'currentPlayer';
        info.appendChild(player);
        this.Board.appendChild(info);
    };
    Board.prototype.move = function (ev) {
        var currentCell = this.Cells.filter(function (el) { return el._htmlElement == ev; });
        if (currentCell[0]._value == '' && this.GameActive) {
            currentCell[0].changeValue(this.CurrentPlayer);
            this.Moves++;
            this.checkWin(parseInt(currentCell[0]._htmlElement.id));
            this.changePlayer();
        }
    };
    Board.prototype.changePlayer = function () {
        if (this.CurrentPlayer === 'X')
            this.CurrentPlayer = 'O';
        else
            this.CurrentPlayer = 'X';
        document.querySelector('#currentPlayer').innerHTML = this.CurrentPlayer;
    };
    Board.prototype.checkWin = function (currId) {
        for (var i = 0; i < this.Base; i++) {
            if (this.Cells[i]._value != '' || this.Cells[i + this.Base]._value != '' || this.Cells[i + 2 * this.Base]._value != '')
                if (this.Cells[i]._value == this.Cells[i + this.Base]._value && this.Cells[i]._value == this.Cells[i + 2 * this.Base]._value)
                    this.callWinner();
        }
        for (var i = 0; i < this.Base * this.Base; i += this.Base) {
            if (this.Cells[i]._value != '' || this.Cells[i + 1]._value != '' || this.Cells[i + 2]._value != '')
                if (this.Cells[i]._value == this.Cells[i + 1]._value && this.Cells[i]._value == this.Cells[i + 2]._value)
                    this.callWinner();
        }
        if (this.Cells[0]._value != '' && this.Cells[4]._value != '' && this.Cells[8]._value != '')
            if (this.Cells[0]._value == this.Cells[4]._value && this.Cells[0]._value == this.Cells[8]._value)
                this.callWinner();
        if (this.Cells[2]._value != '' && this.Cells[4]._value != '' && this.Cells[6]._value != '')
            if (this.Cells[2]._value == this.Cells[4]._value && this.Cells[2]._value == this.Cells[6]._value)
                this.callWinner();
        //draw
        if (this.Moves == this.Cells.length)
            this.callDraw();
    };
    Board.prototype.RestartGame = function () { };
    ;
    Board.prototype.callWinner = function () {
        this.GameActive = false;
        var info = document.querySelector('.winner');
        info.classList.add('info');
        info.innerHTML = "Player: " + this.CurrentPlayer + " has won";
    };
    Board.prototype.callDraw = function () {
        this.GameActive = false;
        var info = document.querySelector('.winner');
        info.classList.add('info');
        info.innerHTML = "DRAW";
    };
    return Board;
}());
exports.Board = Board;


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


exports.__esModule = true;
exports.Cell = void 0;
var Cell = /** @class */ (function () {
    function Cell(element) {
        this._value = '';
        this._htmlElement = element;
    }
    Cell.prototype.changeValue = function (newValue) {
        if (this._value === '') {
            this._value = newValue;
            this._htmlElement.innerHTML = this._value;
        }
    };
    return Cell;
}());
exports.Cell = Cell;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

exports.__esModule = true;
var board_1 = __webpack_require__(1);
var gameBoard = document.querySelector('.board');
var game = new board_1.Board(3, gameBoard);
game.init();

})();

/******/ })()
;