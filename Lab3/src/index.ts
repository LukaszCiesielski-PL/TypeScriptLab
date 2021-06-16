import { Games } from "./game.enum";
import { gameFactory } from "./gameFactory.class";
import './styles/styles.scss';

class App {
    private _gameFactory: gameFactory;
    private gameContainer: HTMLDivElement;
    
    constructor() {
        this._gameFactory = new gameFactory();
        this.initMenu();        
    }

    changeGame(name: string): void{
        const game = this._gameFactory.createGame(Games[name]);
            try{
                this.gameContainer.innerHTML = ''; 
                this.gameContainer.appendChild(game.getGameElement());
            }
            catch{
                console.log('Error');
            }
    }

    initMenu(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); 
        menuContainer.classList.add('menuContainer');
        this.gameContainer = <HTMLDivElement>(document.createElement('div')); 
        this.gameContainer.classList.add('gameContainer');
        const list = document.createElement('ul'); 

        
        for(let element in Games)
        {
            if(isNaN(Number(element)))
                {
                    const gameName = <HTMLLIElement>(document.createElement('li'));
                    {
                        gameName.innerText = `${element}`;
                        gameName.addEventListener('click', e => {
                            const newGameName: string = (e.target as HTMLElement).innerText;                     
                            this.changeGame( newGameName )
                    });
                    list.appendChild(gameName);
                    }

                }
        }

        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(this.gameContainer);
    }
}

new App(); 