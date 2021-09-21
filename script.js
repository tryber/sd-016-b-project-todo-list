const buttonId = document.getElementById('criar-tarefa');
const inputId = document.getElementById('texto-tarefa');
const ordenedList = document.getElementById('lista-tarefas');

function addTask() {
  const textInput = inputId.value;
  const createLi = document.createElement('li');
  ordenedList.appendChild(createLi);
  createLi.setAttribute('class', 'list-ordened');
  createLi.innerText = textInput;
  inputId.value = '';
}

function createTask() {
  buttonId.addEventListener('click', addTask);
}

window.onload = function init() {
  createTask();
};
