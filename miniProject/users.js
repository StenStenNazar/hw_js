// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let div = document.createElement('div')
document.body.appendChild(div);

let h3 = document.createElement('h3')
h3.innerText = 'Users'
div.appendChild(h3);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        let wraperOfDivs = document.createElement('div');
        wraperOfDivs.classList.add('wrapper')
        document.body.appendChild(wraperOfDivs);
        users.map(user => {
            let userDiv = document.createElement('div');
            wraperOfDivs.appendChild(userDiv);
            userDiv.classList.add('user')

            let divForH = document.createElement('div');
            userDiv.appendChild(divForH);
            divForH.classList.add('hConteiner')

            let h4 = document.createElement('h4');
            divForH.appendChild(h4)

            let h3 = document.createElement('h3')
            divForH.appendChild(h3)

            h4.innerText = `${user.id})`
            h3.innerText = user.name;

            let button = document.createElement('button');
            userDiv.appendChild(button);
            button.innerText = 'show details->'
            button.classList.add('button')

            button.onclick = function () {
                location.href = `user-details.html?id=${user.id}`
            }
        })
    });
