let url = new URL(location.href)
let id = url.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(userInfo => userInfo.json())
    .then(userInfo => {

        let ifoDiv = document.createElement('div');
        document.body.appendChild(ifoDiv)
        ifoDiv.classList.add('wrapper')

        let arr = [
            {id: userInfo.id},
            {Name: userInfo.name},
            {Username: userInfo.username},
            {Email: userInfo.email},
            {street: userInfo.address.street},
            {Suite: userInfo.address.suite},
            {City: userInfo.address.city},
            {Zipcode: userInfo.address.zipcode},
            {Suite: userInfo.address.suite},
            {Lat: userInfo.address.geo.lat},
            {Lng: userInfo.address.geo.lng},
            {Phone: userInfo.phone},
            {Website: userInfo.website},
            {Name: userInfo.company.name},
            {CatchPrase: userInfo.company.catchPhrase},
            {Bs: userInfo.company.bs}

        ];

        arr.forEach(obj => {
            Object.keys(obj).forEach(key => {
                let userInfo = document.createElement("li");
                ifoDiv.appendChild(userInfo);
                userInfo.innerText = `${key}:${obj[key]}`
            })
        })

        let button = document.createElement('button');
        ifoDiv.appendChild(button);
        button.setAttribute('id', 1);
        button.classList.add('button')
        button.innerText = 'show title of post'


        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(post => post.json())
            .then(post => {
                console.log(post)
                let postDiv = document.createElement('div');
                postDiv.classList.add('post')
                postDiv.classList.toggle('unvisible')
                ifoDiv.appendChild(postDiv);

                post.forEach((post) => {
                    let titleLI = document.createElement('li');
                    titleLI.classList.add('list');
                    postDiv.appendChild(titleLI)
                    titleLI.innerText = post.title

                    let postButton = document.createElement('button');
                    titleLI.appendChild(postButton);
                    postButton.classList.add('postButton')
                    postButton.innerText = 'details'

                    postButton.onclick = function (){
                        location.href =`post-details.html?postId=${post.id}`
                    }
                })
                button.onclick = function () {
                    postDiv.classList.toggle('unvisible')
                    if(postDiv.classList.value === 'post'){
                        button.innerText = 'hide title of post'
                    }else {
                        button.innerText = 'show title of post'
                    }
                }
            })
    })

