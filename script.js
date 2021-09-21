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

function listBack(list) {
  const listTarget = list.target;
  console.log(list.target);
  listTarget.style.backgroundColor = 'rgb(128, 128, 128)';
}

function backColor() {
  ordenedList.addEventListener('click', listBack);
}

window.onload = function init() {
  createTask();
  backColor();
};
