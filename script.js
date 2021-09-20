// criar uma li
const todoText = document.getElementById('texto-tarefa');
const createButton = document.getElementById('criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');
const taskLi = document.getElementsByTagName('li');

function createTodo() {
  const createLi = document.createElement('li');
  const text = todoText.value;
  todoList.appendChild(createLi).innerText = text;
  todoText.value = '';
}

createButton.addEventListener('click', createTodo);

// selecionar li
let liTarget = '';

function selectedLi(event) {
  for (let index = 0; index < taskLi.length; index += 1) {
    taskLi[index].style.backgroundColor = 'rgb(47, 52, 55)';
  }
  liTarget = event.target;
  liTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

todoList.addEventListener('click', selectedLi);

// tarefa completa
function completTask() {
  if (liTarget.className === 'completed') {
    liTarget.classList.remove('completed');
  } else {
    liTarget.classList.add('completed');
  }
}

todoList.addEventListener('dblclick', completTask);

// limpar todas as tasks
const cleanButton = document.getElementById('apaga-tudo');

function cleanAllTasks() {
  for (let index = 0; index < todoList.children.length; index = 0) {
    todoList.removeChild(taskLi[index]);
  }
}

cleanButton.addEventListener('click', cleanAllTasks);

// limpar tasks finalizadas
const finishTasks = document.getElementById('remover-finalizados');
const completList = [];

function cleanCompleted() {
  for (let index = 0; index < taskLi.length; index += 1) {
    if (taskLi[index].className === 'completed') {
      completList.push(taskLi[index]);
    }
  }
  for (let index = 0; index < completList.length; index += 1) {
    todoList.removeChild(completList[index]);
  }
}

finishTasks.addEventListener('click', cleanCompleted);

/*
// salvar tarefas no navegador
const localItem = {};
const saveButton = document.getElementById('salvar-tarefas');

function saveItem() {
  for (let index = 1; index < taskLi.length; index += 1) {
    localItem.push(taskLi[index]);
    localStorage.setItem(`task-${index}`, localItem[index].innerText);
  }
}

saveButton.addEventListener('click', saveItem)
// salvar array com class para o value do localsotrage
window.onload = function() { // nao funcionando como planejado
  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      const createLi = document.createElement('li');
      todoList.appendChild(createLi).innerText = localStorage.getItem(`task-${index}`);
    }
  }
} */

// remover selecionado
const buttonRemove = document.getElementById('remover-selecionado');

function removeSelected() {
  if (todoList.children.length > 0) {
    liTarget.remove();
    const localKey = localStorage.key(liTarget);
    localStorage.removeItem(localKey);
  }
}

buttonRemove.addEventListener('click', removeSelected);
