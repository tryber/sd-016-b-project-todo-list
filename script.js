window.onload = () => {
  taskList.innerHTML = localStorage.getItem('taskList');
}

// Declarações
const addTaskButton = document.getElementById('criar-tarefa');
const removeSelectedTaskButton = document.getElementById('remover-selecionado');
const removeFinishedTasksButton = document.getElementById('remover-finalizados');
const clearAllTasksButton = document.getElementById('apaga-tudo');
const taskList = document.getElementById('lista-tarefas');
const taskInput = document.getElementById('texto-tarefa');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const saveTaskListButton = document.getElementById('salvar-tarefas');

// Funções

function selectTask(event) {
  const allTasks = document.querySelectorAll('li');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function completeTask(event) {
  const completedTask = event.target;
  if (completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    completedTask.classList.add('completed');
  }
}

function addTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  if (task.innerText === '') {
    alert('Tarefa em branco.');
  } else {
    taskInput.value = '';
    taskList.appendChild(task);
    task.addEventListener('click', selectTask);
    task.addEventListener('dblclick', completeTask);
  }
}

function removeSelected() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask) {
    selectedTask.parentElement.removeChild(selectedTask);
  }
}

function removeFinished() {
  const finishedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < finishedTasks.length; i += 1) {
    finishedTasks[i].parentElement.removeChild(finishedTasks[i]);
  }
}

function clearAllTasks() {
  const AllTasks = document.querySelectorAll('li');
  for (let i = 0; i < AllTasks.length; i += 1) {
    AllTasks[i].parentElement.removeChild(AllTasks[i]);
  }
}

function moveUp() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask !== selectedTask.parentElement.firstChild) {
    const previousTask = selectedTask.previousSibling;
    const txt = previousTask.innerText;
    previousTask.innerText = selectedTask.innerText;
    selectedTask.innerText = txt;
    selectedTask.classList.remove('selected');
    previousTask.classList.add('selected');
  }
}

function moveDown() {
  const selectedTask = document.querySelector('.selected');
  if (selectedTask && selectedTask !== selectedTask.parentElement.lastChild) {
    const nextTask = selectedTask.nextSibling;
    const txt = nextTask.innerText;
    nextTask.innerText = selectedTask.innerText;
    selectedTask.innerText = txt;
    selectedTask.classList.remove('selected');
    nextTask.classList.add('selected');
  }
}

function saveTaskList() {
  const taskList = document.getElementById('lista-tarefas').innerHTML;
  localStorage.setItem('taskList', taskList);
  alert('Lista salva no navegador.')
}

// Event Listeners
addTaskButton.addEventListener('click', addTask);
removeSelectedTaskButton.addEventListener('click', removeSelected);
removeFinishedTasksButton.addEventListener('click', removeFinished);
clearAllTasksButton.addEventListener('click', clearAllTasks);
moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
saveTaskListButton.addEventListener('click', saveTaskList);

// Referências JS:
// https://www.w3schools.com/howto/howto_js_todolist.asp
// https://youtu.be/-pRg_daFjfk
// https://youtu.be/pRwxgtqImZQ
