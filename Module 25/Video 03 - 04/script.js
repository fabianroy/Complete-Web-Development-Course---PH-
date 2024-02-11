function handleOnClick() {
    document.getElementById('handler-status').innerText = 'Handled By Function';
}

// Option 2

document.getElementById('btn2').addEventListener('click', function(){
    let handleStatus = document.getElementById('handler-status2');
    handleStatus.innerText = 'Handled By Function';
})

// Option 2 Recap

document.getElementById('btn-update').addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');
    output.innerText = input;
})
