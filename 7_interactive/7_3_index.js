// window: 전역객체 Global Object
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);

window.console.log(window);
window.console.log(window.innerWidth);
window.console.log(window.innerHeight);


// DOM (Document Object Model)
console.log(document);
console.log(typeof document);
console.dir(document);

// DOM (Document Object Model)
const title = document.querySelector('#title');
title.style.color = 'red';