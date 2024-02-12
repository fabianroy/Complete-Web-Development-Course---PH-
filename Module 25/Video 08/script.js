// let items = document.getElementsByClassName('item');
// for (let item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

let listContainer = document.getElementById('list-container');
listContainer.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('addItem').addEventListener('click', function () {
    let listContainer = document.getElementById('list-container');
    let li = document.createElement('li');
    li.innerText = 'New Item';
    listContainer.appendChild(li);    
})
