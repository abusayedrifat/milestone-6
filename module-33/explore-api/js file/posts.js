function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => loadComment(data))
}
function loadComment(data) {
    const ul = document.getElementById('post-container');
    for (const post of data) {
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML =`
       <h3>${post.id}</h3>
       <h4> ${post.title} </h4>
       <p> ${post.body} </p>
       `;
       ul.appendChild(div);
    }
    console.log(data);
}


loadPost()



function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'DELETE',
    })
}

function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function creatAPost(params) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }), 
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}