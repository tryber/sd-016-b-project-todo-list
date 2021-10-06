const addButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
const resetButton = document.getElementById('apaga-tudo');
const removeButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById("salvar-tarefas")

function removeCompletedTask() {
  Array.from(taskList.children).forEach((task) => {
    if (task.classList.contains('completed')) task.remove();
  });
}

function saveTasks() {
  window.localStorage.setItem('tasks', JSON.stringify(taskList.innerHTML));
}

function getTasks() {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'));
  taskList.innerHTML = tasks;
  Array.from(taskList.children).forEach((task) => {
    addTaskEventListeners(task);
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

saveTasksButton.addEventListener('click', saveTasks);
  getTasks();