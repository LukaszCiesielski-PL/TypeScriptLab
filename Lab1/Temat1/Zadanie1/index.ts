/*const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`*/

class Person{
    imie: string;
    nazwisko: string;
    wiek: number;

    constructor(imie: string, nazwisko: string, wiek:number){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }

    Show(){
       const dane = ('Witaj ' + this.imie + ' i ' + this.nazwisko + ' mam ' + this.wiek + ' lat');
       const personDom = document.createElement('div');
       personDom.innerHTML = dane;
       document.body.appendChild(personDom); 
    }
}

let p = new Person("John", "Blake", 11);
p.Show();