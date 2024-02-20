// 1. getElementById
// 2. getElementByClassName
// 3. querySelector
// 4. querySelectorAll
// 5. createElement
// 6. appendChild
// 7. addEventListener
// 7.1 click
// 7.2 mouseover
// 7.3 mouseout
// 7.4 keydown
// 7.5 keyup
// 7.6 keypress
// 7.7 focus
// 7.8 blur
// 7.9 onchange
// 8. addEventListener onclick='functionName()'
// 9. innerHTML
// 10. innerText
// 11. textContent
// 12. style
// 13. classList
// 14. getAttribute
// 15. setAttribute
// 16. removeAttribute


document.querySelectorAll('.container .section .h3');

let newElement = document.createElement('div');
newElement.className.innerHTML = `
  <h1>Heading</h1>
  <p>Paragraph</p>
  `;
