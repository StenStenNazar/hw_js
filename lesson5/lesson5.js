// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a, b) {
    let s = a * b
    return s
}

console.log(area(5, 8));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r) {
    let circleArea = 3.14 * r ^ 2;
    return circleArea
}

console.log(areaOfCircle(8));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaOfCylinder(h, r) {
    let cylinderArea = 2 * 3.14 * r * h;
    return cylinderArea;
}

console.log(areaOfCylinder(8, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

function itemReader(arr) {
    for (const item of arr) {
        console.log(item)
    }
}

itemReader(listOfItems);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textWriter(text) {
    document.write(`<p>${text}</p>`)
}

textWriter('hello owu');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function liCreator(text) {
    document.write('<ul>')
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write('</ul>')
}

liCreator('hello owu')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liCreatorDynamic(text, quantity) {
    document.write('<ul>')
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

liCreatorDynamic('sten', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let items = ['owu', 1, 2, true, false, 123, 'school', true, 56, [123, 154]];

function liBuilder(arr) {
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
}

liBuilder(items);

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

function creatorOfUserList(arr) {
    for (const user of arr) {
        document.write(`<div class="wrapper">${user.id},${user.name},${user.age}</div>`)

    }
}

creatorOfUserList(user);

// - створити функцію яка повертає найменьше число з масиву
let numberArr3 =[5,10,46,3,56,-500];
function minNumber(arr){
    let min = arr[0];
    for (num of arr){
        if(min<num){
            min = min
        }else{
            min=num
        }
    }
    return min
}
let min =minNumber(numberArr3)
console.log(min)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numberArr2 =[5,10,46,1,3,56,78];
function add(arr){
    let result  =0;
    for (item of arr)(
      result+=item
    )
    console.log(result)
}
add(numberArr2)



