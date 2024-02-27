function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    let postContainer = document.getElementById('post-container');
    for(let post of posts){
        let div = document.createElement('div');
        div.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(div);

    }
}

loadPost();
