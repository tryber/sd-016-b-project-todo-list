const addButton = q('#criar-tarefa');
const taskList = q('#lista-tarefas');
const inputField = q('#texto-tarefa');
const resetButton = q('#apaga-tudo');
const removeButton = q('#remover-finalizados');
const removeSelectedButton = q("#remover-selecionado");
const saveTasksButton = q("#salvar-tarefas");

function q(params) {
  return document.body.querySelector(params);
}

function qAll(params) {
  return document.body.querySelectorAll(params);
}

function checkClass() {
  const arrClassList = document.getElementsByClassName('selected');

  for (let i = 0; i < arrClassList.length; i += 1) {
    arrClassList[i].classList.remove('selected');
  }
}

function selectedItem(event) {
  checkClass();

  const oneclick = event.target;

  oneclick.classList.add('selected');
}

function removeCompletedTask() {
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove()
  });
};

function removeSelectedTask() {
  document.querySelector('.selected').remove();
};

function completedTask(event) {
  const dblClick = event.target.classList;

  dblClick.toggle('completed');
}

function saveList() {
  localStorage.clear();
  const saveTasks = document.getElementsByClassName('itemsList');
  console.log(saveTasks);
  for (let index = 0; index < saveTasks.length; index += 1) {
    const item = 'item';
    const classes = 'class';
    const i = index;
    localStorage.setItem(item + i, saveTasks[index].innerHTML);
    localStorage.setItem(classes + i, saveTasks[index].classList.value);
  }
};

addButton.addEventListener('click', function() {

  const addList = document.createElement('li');
  addList.innerText = inputField.value;
  inputField.value = '';
  addList.className = 'itemsList'
  taskList.appendChild(addList);

  addList.addEventListener('click', selectedItem)

  addList.addEventListener('dblclick', completedTask)
});

resetButton.addEventListener('click', function() {
  taskList.innerHTML = '';

  localStorage.clear();
});

removeButton.addEventListener('click', removeCompletedTask);

removeSelectedButton.addEventListener('click', removeSelectedTask);

saveTasksButton.addEventListener('click', saveList);

window.onload = function() {
  if (localStorage.length !== 0) {
    for (let index = 0; index < (localStorage.length / 2); index += 1) {
      const createLi = document.createElement('li');

      taskList.appendChild(createLi);

      const item = 'item';
      const classes = 'class';
      const i = index;

      createLi.innerHTML = localStorage.getItem(item + i);

      document.getElementsByTagName('li')[index].className = (localStorage.getItem(classes + i));
    }
  }
};