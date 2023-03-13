//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numberArr3 = [1, 1, 1, 1, 1, 1];
let avg = (arr) => {
    let length = arr.length
    let sum = 0;
    for (number of arr) {
        sum += number
    }
    let avg = sum / length
    return avg
}
console.log(avg(numberArr3));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

let comparator = (...rest) => {
    let min = rest[0]
    let max = rest[0]
    for (number of rest) {
        if (number > max) {
            max = number
        } else {
            max = max
        }
    }
    console.log(max)
    for (num of rest) {
        if (num > min) {
            min = min
        } else {
            min = num
        }
    }
    return min
}

let min = comparator(1000, -501, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 99, -1)
console.log(min)

//- створити функцію яка заповнює масив рандомними числами
let arr = [];
let randomPusher = () => {
    for (let i = 0; i < 100; i++) {
        let number = Math.round(Math.random() * 100)
        arr.push(number)
    }
}
randomPusher();
console.log(arr)

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент,
// який характеризує кінцеве значення діапазону.
let arr1 = [];
let randomPusher1 = (limit) => {
    for (let i = 0; i < limit; i++) {
        let number = Math.round(Math.random() * 100)
        arr1.push(number)
    }
}
randomPusher1(100);
console.log(arr1)

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverse = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i])
    }
    return newArray;
}
console.log(reverse(arr1));

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let area = (a, b) => {
    let s = a * b
    return s
}
console.log(area(6, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea = (h, r) => {
    let s = 3.14 * r ^ 2
    return s
}
console.log(circleArea(8, 7));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinderArea = (h, r) => {
    let s = 2 * 3.14 * r * h;
    return s
}
console.log(cilinderArea(5, 6));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrWriter = (arr) => {
//     for (let arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// arrWriter(arr1);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let textWriter = (text) => {
    document.write(`<p>${text}</p>`)
}
textWriter('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulCreator = (text) => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
ulCreator('hello')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let dynamicCreator = (text, limit) => {
    document.write('<ul>')
    for (let i = 0; i < limit; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
dynamicCreator('hello', 15);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let items = ['owu', 1, 2, true, false, 123, 'school', true, 56, [123, 154]];
let liCreator = (arr) => {
    for (item of arr) {
        document.write(`<li>${item}</li>`)
    }
}
liCreator(items);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let user = [
    {id: "roman", name: "ran", age: 123549},
    {id: "nazar", name: 'nar1', age: 123456},
    {id: "vova", name: 'nar2', age: 123456},
    {id: "ihor", name: 'nar3', age: 123456},
    {id: "taras", name: 'nar4', age: 123456},
    {id: "volodia", name: 'nar4', age: 123456},
    {id: "mikola", name: 'nar5', age: 123456},
    {id: "petro", name: 'nar6', age: 123456},
    {id: "sergiy", name: 'nar7', age: 123456},
    {id: "vanya", name: 'nar8', age: 123456},
]
let divCreator = (arr) => {
    for (let arrElement of arr) {
        document.write(`<div>${arrElement.id},${arrElement.name},${arrElement.age}</div>`)
    }
}
divCreator(user);
// - створити функцію яка повертає найменьше число з масиву

let arrNumbrs = [0.1, 2, 3, 4, 5, 6, 8, 9, 10]
let minNum = (arr) => {
    let min = arr[0]
    for (nums of arr) {
        if (nums > min) {
            min = min
        } else {
            min = nums
        }
    }
    return min
}
let minimum = minNum(arrNumbrs);
console.log(minimum)
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let sum = (arr) => {
    let sum = 0;
    for (let x of arr) {
        sum += x
    }
    return sum
}
console.log(sum(arrNumbrs));
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let arrray = [1, 2, 5]
let reversr = (arr) => {
    let newArrr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArrr.push(arr[i])
    }
    return newArrr
}
console.log(reversr(arrray));