// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// elem.classList: add, remove, toggle
const item = tomorrow.children[1];
item.classList.add('done', 'example');
item.classList.remove('done', 'example');
item.classList.toggle('done'); //true - add / false - remove

// elem.className
today.children[1].className = 'done';

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';
today.children[0].style.backgroundColor = '#DDDDDD';
today.children[2].style.textDecoration = 'line-through';
today.children[2].style.backgroundColor = '#DDDDDD';

//css에선 box-sizing이라고 하면 js에선 boxSizing이라고 함 (카멜표기법)