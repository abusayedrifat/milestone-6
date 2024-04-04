const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happened', error))
}
//same output but using "async". 
const loadComments2 = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await res.json();
    console.log(data);
}

