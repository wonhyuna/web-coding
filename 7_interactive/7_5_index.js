const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML; 

const newToday = document.querySelector('#today');
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last);

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev);

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next);


// 노드 삭제와 이동
const today1 = document.querySelector('#today');
const tomorrow1 = document.querySelector('#tomorrow');

// 노드 삭제하기: Node.remove()
// tomorrow1.remove();
// today1.children[2].remove();

// 노드 이동하기: prepend, append, before, after
today1.append(tomorrow1.children[1]);
tomorrow1.children[1].after(today1.children[1]);
tomorrow1.children[2].before(today1.children[1]);
tomorrow1.lastElementChild.before(today1.children[1]);