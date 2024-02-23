// Content: forEach method

const numbers = [1, 2, 3, 4, 5];
const result = numbers.forEach(n => console.log(n)); // 1 2 3 4 5
console.log(result); // undefined

// Content: filter method

const numbers2 = [1, 2, 3, 4, 5];
const players = [75, 65, 67, 72, 55, 59];
const filtered = players.filter(player => player >= 70);
console.log(filtered); // [75, 72]

const friends = ['Nafi', 'Nayeef', 'Riju'];
const evennFriends = friends.filter(friend => friend.length === 4);
console.log(evennFriends); // ['Nafi', 'Riju']

// Content: find method

const numbers3 = [1, 2, 3, 4, 5];
const selected = numbers3.find(p => p>3);
console.log(selected); // 4

// Content: map method

const numbers4 = [1, 2, 3, 4, 5];
const doubled = numbers4.map(n => n*2);
console.log(doubled); // [2, 4, 6, 8, 10]
