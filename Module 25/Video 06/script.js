// document.getElementById('input').addEventListener('focus', function () {

// })

// document.getElementById('input').addEventListener('blur', function () {

// })


// document.getElementById('text').addEventListener('keypress', function (event) {
//     console.log(event.target.value);
// })


// document.getElementById('text').addEventListener('keydown', function (event) {
//     console.log(event.target.value);
// })


// document.getElementById('text').addEventListener('keyup', function (event) {
//     console.log(event.target.value);
// })


// document.getElementById('btn').addEventListener('click', function () {

// })

document.getElementById('text2').addEventListener('keyup', function (event) {
    let text = event.target.value;
    let deleteBTN = document.getElementById('btn2');
    if (text === "Delete"){
        deleteBTN.removeAttribute('disabled');
    } else {
        deleteBTN.setAttribute('disabled', true);
    }
})

document.getElementById('btn2').addEventListener('click', function () {
    let secretInfo = document.getElementById('hide');
    secretInfo.style.display = 'none';
})
