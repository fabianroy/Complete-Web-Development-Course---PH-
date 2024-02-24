function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}

let firstServer = kitchen();
let secondServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());

console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
console.log(secondServer());
