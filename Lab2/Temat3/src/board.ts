import { Cell } from './cell';

export class Board {

    Cells: Cell[];
    Board: Element;
    CurrentPlayer: string = "X";
    Base: number;
    GameActive: boolean = true;
    Moves: number = 0;

    constructor(size: number, board: Element) {
        this.Base = size;
        const sumCell: number =Math.pow(size,2);
        this.Board = board;
        this.Cells=new Array(sumCell);

        for(let i = 0; i < sumCell; i++){
            const element: HTMLElement = document.createElement('div');
            element.classList.add('cell');
            element.id=`${i}`;

            let newCell = new Cell(element);
            newCell._htmlElement.addEventListener('mouseup', e => this.move(e.target))
            this.Cells[i] = newCell;
        }

        
    }  
    init(): void{
        for (const element of this.Cells) {
            this.Board.appendChild(element._htmlElement);
        }
        const info: HTMLElement = document.querySelector('info');
        info.classList.add('info');
        const player = document.createElement('span');
        player.id = 'currentPlayer'
        info.appendChild(player);
        this.Board.appendChild(info);
    }

    move(ev: EventTarget): void{
        const currentCell = this.Cells.filter(el => el._htmlElement == ev)
        if(currentCell[0]._value == '' && this.GameActive)
        {
            currentCell[0].changeValue(this.CurrentPlayer);
            this.Moves++;
            this.checkWin(parseInt(currentCell[0]._htmlElement.id))
            this.changePlayer();
        }
    }
    changePlayer(): void{
        if(this.CurrentPlayer === 'X')
            this.CurrentPlayer = 'O';
        else
            this.CurrentPlayer = 'X';
        document.querySelector('#currentPlayer').innerHTML = this.CurrentPlayer;
    }
    checkWin(currId: number): void{
        for(let i = 0; i<this.Base; i++)
        {
            if(this.Cells[i]._value != '' || this.Cells[i + this.Base]._value != '' || this.Cells[i + 2*this.Base]._value != '')
                if(this.Cells[i]._value == this.Cells[i + this.Base]._value && this.Cells[i]._value == this.Cells[i + 2*this.Base]._value)
                    this.callWinner()
        }
        for(let i = 0; i<this.Base*this.Base; i+=this.Base)
        {
            if(this.Cells[i]._value != '' || this.Cells[i + 1]._value != '' || this.Cells[i + 2]._value != '')
                if(this.Cells[i]._value == this.Cells[i + 1]._value && this.Cells[i]._value == this.Cells[i + 2]._value)
                    this.callWinner()
        }
        if(this.Cells[0]._value !=  '' && this.Cells[4]._value !=  '' && this.Cells[8]._value !=  '' )
            if(this.Cells[0]._value == this.Cells[4]._value && this.Cells[0]._value == this.Cells[8]._value)
            this.callWinner()
        if(this.Cells[2]._value !=  '' && this.Cells[4]._value !=  '' && this.Cells[6]._value !=  '' )
            if(this.Cells[2]._value == this.Cells[4]._value && this.Cells[2]._value == this.Cells[6]._value)
            this.callWinner()
        //draw
        if(this.Moves == this.Cells.length)
            this.callDraw();
                
    }
    RestartGame(){};

    callWinner() :void{
        this.GameActive = false;
        const info: HTMLElement = document.querySelector('.winner');
        info.classList.add('info');
        info.innerHTML = `Player: ${this.CurrentPlayer} has won`;
    }
    callDraw() :void{
        this.GameActive = false;
        const info: HTMLElement = document.querySelector('.winner');
        info.classList.add('info');
        info.innerHTML = `DRAW`;
    }
}


