const addButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const resetButton = document.getElementById('apaga-tudo');
const removeButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById("salvar-tarefas");

function removeCompletedTask() {
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove()
  });
};

function backgroundColor(event) {
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
