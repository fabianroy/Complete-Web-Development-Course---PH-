fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response)) // .json is not similae but close to JSON.parse
   // .then(json => console.log(json))
