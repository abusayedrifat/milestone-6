function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

// function displayUsers2(data) {
//     for (const user of data) {
//         console.log(user);
//     }
//     
// }
function displayUsers2(data) {
    document.getElementById('load-user').setAttribute('disabled', true);
    
    const ul = document.getElementById('users-list');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}




