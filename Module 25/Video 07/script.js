document.getElementById('item-2').addEventListener('click', function(event) {
    console.log('item  2 clicked');
    event.stopPropagation();
})

document.getElementById('list').addEventListener('click', function(event) {
    console.log('list clicked');
    event.stopPropagation();
})

document.getElementById('container').addEventListener('click', function(event) {
    console.log('container clicked');
    event.stopPropagation();
})

document.getElementById('body').addEventListener('click', function(event) {
    console.log('body clicked');
    event.stopPropagation();
})
