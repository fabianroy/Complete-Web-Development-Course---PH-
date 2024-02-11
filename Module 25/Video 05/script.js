document.getElementById('submit').addEventListener('click',function(){
    let comment = document.getElementById('comment').value;
    let newComment = document.getElementById('comment-container');
    let p = document.createElement('p');
    p.innerHTML = comment;
    newComment.appendChild(p);
})
