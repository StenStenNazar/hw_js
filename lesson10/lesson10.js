// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('wrap','cpllapse','alpha','beta');
htmlDivElement.style.backgroundColor = 'silver'
htmlDivElement.style.color = 'blue'
htmlDivElement.style.fontSize = '40px'
htmlDivElement.innerText = 'hello owu'

let clone=htmlDivElement.cloneNode(true);
document.body.appendChild(clone);
document.body.appendChild(htmlDivElement);
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.
let navArr =['Main','Products','About us','Contacts'];
let nav = document.createElement('div');
nav.style.display ='flex'
nav.style.justifyContent ='space-around'
document.body.appendChild(nav);
nav.classList.add('menu')
 for(item of navArr){
     let li=document.createElement('li')
     li.innerText =item
     nav.appendChild(li)
 }
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (item of coursesAndDurationArray){
    let div = document.createElement('div')
    let p= document.createElement('p')
    p.innerText = item.title+ '-'+ item.monthDuration
    div.appendChild(p)
    document.body.appendChild(div)
}
//
// - Є масив
let DurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for(item of DurationArray){
    let div = document.createElement("div");
    div.classList.add('item')
    div.style.border = 'black 1px solid'
    div.style.margin = '5px'

    let h1= document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText = item.title;

    let p = document.createElement('p');
    p.innerText = item.monthDuration +' month'

    div.appendChild(h1)
    div.appendChild(p)
    document.body.appendChild(div)
}