/*const personName = 'John';
document.body.innerHTML = `<h1>Hello ${personName}</h1>`*/
var Person = /** @class */ (function () {
    function Person(imie, nazwisko, wiek) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
    }
    Person.prototype.Show = function () {
        var dane = ('Witaj ' + this.imie + ' i ' + this.nazwisko + ' mam ' + this.wiek + ' lat');
        var personDom = document.createElement('div');
        personDom.innerHTML = dane;
        document.body.appendChild(personDom);
    };
    return Person;
}());
var p = new Person("John", "Blake", 11);
p.Show();
