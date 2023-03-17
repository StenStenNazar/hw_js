let url = new URL(location.href)
let id = url.searchParams.get('postId');
console.log(id)

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(infoPost =>infoPost.json())
    .then(infoPost =>{
        let infoPostDiv = document.createElement('div');
        infoPostDiv.classList.add('wrapper')
        document.body.appendChild(infoPostDiv);
        let h3 = document.createElement('h3')
        infoPostDiv.appendChild(h3);
        h3.innerText = 'Post'
       for(item in infoPost){
           let infoLi = document.createElement('li');
           infoLi.classList.add('list')
           infoPostDiv.appendChild(infoLi);
           infoLi.innerText =`${item}:${infoPost[item]}`
       }
       fetch(`https://jsonplaceholder.typicode.com/posts/${infoPost.id}/comments`)
           .then(coments =>coments.json())
           .then(coments=>{
               let comentDiv = document.createElement('div')
               comentDiv.classList.add('coment')
               infoPostDiv.appendChild(comentDiv);
               let h3 = document.createElement('h3')
               comentDiv.appendChild(h3);
               h3.innerText = 'Coments'
               coments.forEach(coment =>{
                       let comentLi = document.createElement('li')
                        comentLi.classList.add('comentList')
                       comentDiv.appendChild(comentLi)
                       comentLi.innerText =`${coment.id}\n${coment.body}`
               })

           })
    })
