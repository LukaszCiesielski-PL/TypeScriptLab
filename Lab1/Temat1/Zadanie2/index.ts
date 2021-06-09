interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    name: string;
    surname: string;
    age: number;
    role: string;

    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    console.log(`Imię: ${person.name}    Nazwisko: ${person.surname}     Wiek: ${person.age}     Rola: ${person.role}`);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
        const filtered = persons.filter(item => Object.keys(criteria).every(key => item[key] === criteria[key]))
        return filtered;
    }
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    console.log('TODO 1');
    users.forEach(el => logPerson(el));
    admins.forEach(el => logPerson(el));
    console.log('');
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    console.log('TODO 2');
    const persons: Person[]= [...users,...admins];
    persons.forEach(el => logPerson(el));
    console.log('');
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log('TODO 3');
    const personsAge: Person[]= persons.filter(el => el.age > 25);
    personsAge.forEach(el => logPerson(el));
    console.log('');
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log('TODO 4');
    const filtered = filterPersons(persons, { name: 'Adam' });
    filtered.forEach(el => logPerson(el));
    console.log('');