var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log("Imi\u0119: " + person.name + "    Nazwisko: " + person.surname + "     Wiek: " + person.age + "     Rola: " + person.role);
}
function filterPersons(persons, criteria) {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    var filtered = persons.filter(function (item) { return Object.keys(criteria).every(function (key) { return item[key] === criteria[key]; }); });
    return filtered;
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log('TODO 1');
users.forEach(function (el) { return logPerson(el); });
admins.forEach(function (el) { return logPerson(el); });
console.log('');
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
console.log('TODO 2');
var persons = __spreadArray(__spreadArray([], users), admins);
persons.forEach(function (el) { return logPerson(el); });
console.log('');
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log('TODO 3');
var personsAge = persons.filter(function (el) { return el.age > 25; });
personsAge.forEach(function (el) { return logPerson(el); });
console.log('');
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log('TODO 4');
var filtered = filterPersons(persons, { name: 'Adam' });
filtered.forEach(function (el) { return logPerson(el); });
console.log('');
