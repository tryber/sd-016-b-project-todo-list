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

function completedTask(e) {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.className = 'completed';
  }
}

addButton.addEventListener('click', function() {

  const addList = document.createElement('li');
  addList.innerText = inputField.value;
  inputField.value = '';
  taskList.appendChild(addList);

  addList.addEventListener('click', selectedItem)

  addList.addEventListener('dblclick', completedTask)
});

resetButton.addEventListener('click', function() {
  taskList.innerHTML = ''
});

removeButton.addEventListener('click', removeCompletedTask);

removeSelectedButton.addEventListener('click', removeSelectedTask);