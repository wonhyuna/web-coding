const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

/*items[0].addEventListener('click', function() {
  items[0].classList.toggle('done');
});

items[1].addEventListener('click', function() {
  items[1].classList.toggle('done');
});

items[2].addEventListener('click', function() {
  items[2].classList.toggle('done');
});*/

function updateToDo(event){
  event.target.classList.toggle('done');
}

for (let i = 0; i < items.length; i++){
  items[i].addEventListener('click', updateToDo);
}


items[2].removeEventListener('click', updateToDo);