let loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log('Error Happened!'))
}

let loadComments2 = async() => {
    let res = await fetch('https://jsonplaceholder.typicode.com/comments')
    let data = await res.json();
    console.log(data);
}
