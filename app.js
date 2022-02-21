const btnCreate = document.getElementById('btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.remove');
const taskList = document.querySelector('.list-container ul');

function addRemoveButton (li) {
  const btn = document.createElement("button");
  btn.className = "remove";
  btn.textContent = "Remove";
  li.appendChild(btn);
};

for (let i = 0; i < taskList.children.length; i++){
  addRemoveButton(taskList.children[i])
}


btnToggle.addEventListener('click', () => {
  const listContainer = document.querySelector('.list-container');
  if (listContainer.style.display === 'none') {
    btnToggle.textContent = 'Hide List';
    listContainer.removeAttribute('style');
  } else {
    btnToggle.textContent = 'Show List';
    listContainer.style.display = 'none';
  }
});

btnCreate.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  const input = document.querySelector('.input-main');
  let li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  addRemoveButton(li)
  input.value = '';
});


taskList.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON'){
    event.target.parentNode.remove();
}});
