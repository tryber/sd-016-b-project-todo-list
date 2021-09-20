const body = document.getElementsByTagName('body')[0];
const main = document.getElementById('main');
const paragraph = document.getElementById('funcionamento');
const taskInput = document.getElementById('texto-tarefa');
const oList = document.getElementById('lista-tarefas');
const newTaskBtn = document.getElementById('criar-tarefa');
const clearBtn = document.getElementById('apaga-tudo');
const removeBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');
const upBtn = document.getElementById('mover-cima');
const downBtn = document.getElementById('mover-baixo');
const rmSelectedBtn = document.getElementById('remover-selecionado');

function newTask() {
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskInput.value = '';
  oList.appendChild(task);
}
newTaskBtn.addEventListener('click', newTask);

function select(event) {
  for (const task of oList.children) {
    if (task.classList.contains('selected')) {
      if (event.target !== task) {
        task.classList.remove('selected');
      }
    } else {
      if (event.target === task) {
        task.classList.add('selected');
      }
    }
  }
}
oList.addEventListener('click', select);

function finished(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
oList.addEventListener('dblclick', finished);

function clearTasks() {
  oList.innerHTML = '';
  localStorage.clear();
}
clearBtn.addEventListener('click', clearTasks);

function removeTask() {
  const completedList = document.getElementsByClassName('completed');
  
  for (let i = completedList.length - 1; i >= 0; i -= 1) {
    oList.removeChild(completedList[i]);
  }
}
removeBtn.addEventListener('click', removeTask);

function saveTasks() {
  if (oList.innerHTML != '') {
    let tasksToSave = oList.innerHTML;
    localStorage.setItem('tasks', JSON.stringify(tasksToSave));
  }
}
saveBtn.addEventListener('click', saveTasks);

function moveUp() {
  const tasks = document.getElementsByTagName('li');
  const selected = document.querySelector('.selected');
  let changeTask;
  if (selected !== null) {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].innerHTML === selected.innerHTML && i > 0) {
        changeTask = tasks[i - 1].innerHTML;
        tasks[i - 1].innerHTML = selected.innerHTML;
        tasks[i - 1].classList.add('selected');
        tasks[i].innerHTML = changeTask;
        tasks[i].classList.remove('selected');
      }
    }
  }
}
upBtn.addEventListener('click', moveUp);

function moveBottom() {
  const tasks = document.getElementsByTagName('li');
  const selected = document.querySelector('.selected');
  let changeTask;
  if (selected !== null) {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].innerHTML === selected.innerHTML && i < tasks.length - 1) {
        changeTask = tasks[i + 1].innerHTML;
        tasks[i + 1].innerHTML = selected.innerHTML;
        tasks[i + 1].classList.add('selected');
        tasks[i].innerHTML = changeTask;
        tasks[i].classList.remove('selected');
      }
    }
  }
}
downBtn.addEventListener('click', moveBottom);

function rmSelected() {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    oList.removeChild(selected);
  }
}
rmSelectedBtn.addEventListener('click', rmSelected);

window.onload = savedTasks;
function savedTasks() {
  if (localStorage.getItem('tasks')) {
    let loadTasks = JSON.parse(localStorage.getItem('tasks'));
    const tasksList = document.getElementById('lista-tarefas');
    tasksList.innerHTML = loadTasks;
  }
}
