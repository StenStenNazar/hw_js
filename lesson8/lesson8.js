// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let usersArr = [
    new User(1, 'roma', 'nakon', 'nakon@.com', 123456789),
    new User(2, 'nazar', 'sten', 'nazar@.com', 78942056321),
    new User(3, 'igor', 'blus', 'igor@.com', 78945654321),
    new User(4, 'petro', 'szhun', 'petro@.com', 789456321),
    new User(5, 'sergiy', 'sten', 'sergiy@.com', 7897552456321),
    new User(6, 'boris', 'zhila', 'boris@.com', 78946563656321),
    new User(7, 'andriy', 'dida', 'andriy@.com', 789414156321),
    new User(8, 'vova', 'mikhalo', 'vova@.com', 78945036321),
    new User(9, 'ctepan', 'buchko', 'ctepan@.com', 789747456321),
    new User(10, 'zhora', 'poroh', 'zhora@.com', 789453366321),
]
console.log(usersArr)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenID = usersArr.filter((user) => {
    return user.id % 2 == 0;
})
console.log(evenID)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortId = usersArr.sort((user1, user2) => {
    return user2.id - user1.id
})
console.log(sortId);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
    this.order = order
}

let clientArr = [
    new Client(1, 'roma', 'nakon', 'nakon@.com', 123456789, ['tea', 'coffe', 'water', 1]),
    new Client(2, 'nazar', 'sten', 'nazar@.com', 78942056321, ['butter', 'apple', 'cherry', 2, 3, 5, 6]),
    new Client(3, 'igor', 'blus', 'igor@.com', 78945654321, ['bread', 'vodka', 'bear', 2, 5]),
    new Client(4, 'petro', 'szhun', 'petro@.com', 789456321, ['tv', 'computer', 'table', 3, 5, 68]),
    new Client(5, 'sergiy', 'sten', 'sergiy@.com', 7897552456321, ['paper', 'juce', 'oil', 1]),
    new Client(6, 'boris', 'zhila', 'boris@.com', 78946563656321, ['toyota', 'volvo', 'mercedes', 2, 58, 6]),
    new Client(7, 'andriy', 'dida', 'andriy@.com', 789414156321, ['bmw', 'audi', 'nissan', 89, 23]),
    new Client(8, 'vova', 'mikhalo', 'vova@.com', 78945036321, ['ford', 'vwgen', 'zhihul', 56, 41]),
    new Client(9, 'ctepan', 'buchko', 'ctepan@.com', 789747456321, ['rangerover', 'shkoda', 'kia', 56, 78, 9, 5, 6, 7, 3]),
    new Client(10, 'zhora', 'poroh', 'zhora@.com', 789453366321, ['opel', 'fiat', 'renault', 1, 2, 3, 4])
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedCkient = clientArr.sort((clint1, client2) => {
    return clint1.order.length - client2.order.length
})
console.log(sortedCkient);
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxspeed, capacity) {
//     this.model = model
//     this.producer = producer
//     this.year = year
//     this.maxspeed = maxspeed
//     this.capacity = capacity
//     this.drive = function (maxspeed) {
//         console.log(`їдемо з швидкістю ->${this.maxspeed} km/h`)
//     }
//     this.info = function (model, producer, year, maxspeed, capacity) {
//         console.log(`
//            model:${this.model},
//            maxspeed:${this.maxspeed},
//            year:${this.year},
//            producer:${this.producer},
//            capacity:${this.capacity}`)
//     }
//     this.increaseMaxSpeed= function (newSpeed){
//         console.log(`нова швидкість->${this.maxspeed+newSpeed}`)
//     }
//     this.changeYear =  function (newValue){
//         console.log(`новий рік-> ${this.year+newValue}`)
//     }
//     this.driver = function (driver){
//         this.driver =driver
//     }
// }
//
// let kia = new Car('kia', 'china', 2020, 220, 1.6,)
// console.log(kia)
// kia.drive();
// kia.info();
// kia.increaseMaxSpeed(40);
// kia.changeYear(2)
// kia.driver({name:'nazar',surname:'hlova'})

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:

class Car {
    constructor(model, producer, year, maxspeed) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
    }

    increaseMaxSpeed(newSpeed) {
        console.log(`нова швидкість->${this.maxspeed + newSpeed}`)
    }

    drive() {
        console.log(`їдемо з швидкістю${this.maxspeed}`)
    }

    info() {
        console.log(`model:${this.model},producer:${this.producer},year:${this.year},maxspeed:${this.maxspeed}`)
    }

    changeYear(newYear) {
        console.log(`новий рік->${this.year + newYear}`)
    }

    addDriver(driver) {
        this.driver = driver
    }
}

let kia = new Car('kia', 'china', 2020, 220);
console.log(kia)
kia.drive();
kia.info();
kia.increaseMaxSpeed(50);
kia.addDriver({name: 'nazar', surname: 'sten'});
kia.changeYear(5)
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Popelushka(name, age, size) {
    this.name = name
    this.age = age
    this.size = size
}

let popelushkasArr = [
    new Popelushka('vika', 18, 27),
    new Popelushka('vita', 19, 26),
    new Popelushka('olya', 20, 25),
    new Popelushka('nadia', 21, 24),
    new Popelushka('ira', 16, 28),
    new Popelushka('chris', 15, 29),
    new Popelushka('natalia', 22, 30),
    new Popelushka('zoriana', 23, 23),
    new Popelushka('valia', 24, 24),
    new Popelushka('maria', 25, 25),
]

function Prince(name, age, findedSize) {
    this.name = name
    this.age = age
    this.findedSize = findedSize
}

let nazar = new Prince('nazar', 23, 26)

let obrana = popelushkasArr.filter(madam => madam.size == nazar.findedSize)
console.log(obrana);

let obrana1 = popelushkasArr.find(madam => madam.size == nazar.findedSize);
console.log(obrana1.name);