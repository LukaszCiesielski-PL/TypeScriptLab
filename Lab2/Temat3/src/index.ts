import {Board} from './board';
const gameBoard = document.querySelector('.board');
const game: Board = new Board(3, gameBoard);
game.init();