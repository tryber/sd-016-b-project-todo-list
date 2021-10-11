const addButton = q('#criar-tarefa');
const taskList = q('#lista-tarefas');
const inputField = q('#texto-tarefa');
const resetButton = q('#apaga-tudo');
const removeButton = q('#remover-finalizados');
const saveTasksButton = q("#salvar-tarefas");

function q(params) {
  return document.body.querySelector(params);
}

function qAll(params) {
  return document.body.querySelectorAll(params);
}

function removeCompletedTask() {
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove()
  });
};

function backgroundColor(event) {

  const aleatorio = qAll('li');

  for (let i = 0; i < aleatorio.length; i += 1) {
    aleatorio[i].style.backgroundColor = ''
  }
  
  event.target.style.backgroundColor = 'gray';
};

function lineThrough(e) {
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

  addList.addEventListener('click', backgroundColor)

  addList.addEventListener('dblclick', lineThrough)

resetButton.addEventListener('click', function() {
  taskList.innerHTML = ''
});

});

removeButton.addEventListener('click', removeCompletedTask);
