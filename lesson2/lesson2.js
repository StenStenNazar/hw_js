// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['owu', 1, 2, true, false, 123, 'school', true, 56, [123, 154]];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'master',
    pageCount: 20,
    genre: 'fantasy'
};

let book2 = {
    title: "spaces",
    pageCount: 22,
    genre: 'horor'
};

let boooK3 = {
    title: 'rain',
    pageCount: 23,
    genre: 'cartuns'
};
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - масив. Кожен автор має поля name,age
let book11 = {
    title: 'master',
    pageCount: 20,
    genre: 'fantasy',
    authors: [
        {name: "Roma", age: 22,},
        {name: "Oleh", age: 35}
    ]
};

let book21 = {
    title: "spaces",
    pageCount: 22,
    genre: 'horor',
    authors: [
        {name: 'vova', age: 25},
        {name: 'petya', age: 98}
    ]
};

let boooK31 = {
    title: 'rain',
    pageCount: 23,
    genre: 'cartuns',
    authors: [
        {name: 'vasya', age: 55},
        {name: 'nazar', age: 23}
    ]
};
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username
// password. Вивести в консоль пароль кожного користувача

let user =[
    {name:"roman",username:"ran",password:123549},
    {name:"nazar",username:'nar1',password: 123456},
    {name:"vova",username:'nar2',password: 123456},
    {name:"ihor",username:'nar3',password: 123456},
    {name:"taras",username:'nar4',password: 123456},
    {name:"volodia",username:'nar4',password: 123456},
    {name:"mikola",username:'nar5',password: 123456},
    {name:"petro",username:'nar6',password: 123456},
    {name:"sergiy",username:'nar7',password: 123456},
    {name:"vanya",username:'nar8',password: 123456},
]
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

