const addButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const resetButton = document.getElementById('apaga-tudo');
const removeButton = document.getElementById('remover-finalizados')

function removeCompletedTask() {
  const taskList = document.getElementById('lista-tarefas');
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove();
  });
}

function switchCompletedTask(event) {
  const taskSelected = event.target;
  taskSelected.classList.toggle('completed');
}

addButton.addEventListener ('click', function() {

  const addList = document.createElement('li');
  addList.innerText = inputField.value;
  inputField.value = '';
  taskList.appendChild(addList);

  addList.addEventListener('click', function() {
    addList.classList.add('selected');
  });

  addList.addEventListener('dblclick', switchCompletedTask);

});

resetButton.addEventListener('click', function() {
  taskList.innerHTML = ''
});

removeButton.addEventListener('click', removeCompletedTask);