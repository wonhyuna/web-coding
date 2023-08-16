// DOM 트리 프로퍼티
const myTag = document.querySelector('#list-1');

//본인
console.log(myTag);

// 형제 요소 노드
console.log(myTag.previousElementSibling);
console.log(myTag.nextElementSibling);

// 부모 요소 노드
console.log(myTag.parentElement);

// 자식 요소 노드
console.log(myTag.children[1]);
console.log(myTag.firstElementChild);
console.log(myTag.lastElementChild);



// textContext: HTML태그를 제외하고 text만 가지고 옴 (줄바꿈, 들여쓰기 모두 포함)
console.log(myTag.textContent);
// myTag.textContent = 'new text!';

// outerHTML
console.log(myTag.outerHTML);
// myTag.outerHTML = '<ul id = "new-list"><li>Exotic</li></ul>';

// innerHTML (줄바꿈, 들여쓰기 모두 포함)
console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>';