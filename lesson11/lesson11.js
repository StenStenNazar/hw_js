// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.createElement('div');
// div.setAttribute('id','text')
// div.innerText= ' hello owu'
// document.body.appendChild(div)
// let button = document.createElement('button');
// button.setAttribute('id','1')
// button.innerText = 'hide'
// document.body.appendChild(button);
// let btn = document.getElementById('1')
// console.log(btn)
// btn.onclick=function (e){
//     e.preventDefault()
// };
// btn.addEventListener('click',function (){
//     document.body.removeChild(div)
// })
//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
//     на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// document.body.appendChild(form)
// let input = document.createElement('input');
// form.appendChild(input);
// input.setAttribute('type','text');
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText = 'submit'
// button.onclick= function (e){
//     e.preventDefault()
//     if(+input.value>=18){
//         console.log('user is adult')
//     }else{
//         console.log('user is kids')
//     }
// }
//
//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let formFirst = document.createElement('form');
// let formSecond = document.createElement('form');
// document.body.appendChild(formFirst)
// document.body.appendChild(formSecond)

// let inputFormFirst1 = document.createElement('input');
// formFirst.appendChild(inputFormFirst1 );
// inputFormFirst1.setAttribute('type','text');
//
// let inputFormsFirst2 = document.createElement('input');
// formFirst.appendChild(inputFormsFirst2);
// inputFormsFirst2.setAttribute('type','text');
//
// let inputFormsSecond1 = document.createElement('input');
// formSecond.appendChild(inputFormsSecond1);
// inputFormsSecond1.setAttribute('type','text');
//
// let inputFormsSecond2 = document.createElement('input');
// formSecond.appendChild(inputFormsSecond2);
// inputFormsSecond2.setAttribute('type','text');
//
// let button = document.createElement('button');
// document.body.appendChild(button);
// button.innerText ='submit'
//
// button.addEventListener('click',function (){
//     console.log(inputFormFirst1.value);
//     console.log(inputFormsFirst2.value);
//
// })
// button.addEventListener('click',function (){
//     console.log(inputFormsSecond1.value);
//     console.log(inputFormsSecond2.value);
// })
//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let form = document.createElement('form');
document.body.appendChild(form);
let input1 = document.createElement('input');
input1.setAttribute('type', 'text');
form.appendChild(input1)

let input2 = document.createElement('input');
input2.setAttribute('type', 'text');
form.appendChild(input2)

let input3 = document.createElement('input');
input3.setAttribute('type', 'text');
form.appendChild(input3)

let button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'submit'

button.onclick = function () {
    for (let i = 0; i < input1.value; i++) {
        let table = document.createElement('table');
        document.body.appendChild(table);
        table.style.border = '1px solid black'
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 0; i < input2.value; i++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            td.innerText = input3.value
            td.style.border = '1px solid black'
        }
    }

}
