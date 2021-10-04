// section 1
const bCreateTask = document.getElementById('criar-tarefa');
// const bClearTask = document.getElementById('apagar-tudo');
const inputId = document.getElementById('texto-tarefa');
const ordenedList = document.getElementById('lista-tarefas');
const listSelected = document.getElementsByClassName('list-ordened');
// section 2
// const bRemoveSelect = document.getElementById('remover-selecionado');
// const bMoveUp = document.getElementById('mover-cima');
// const bMoveDown = document.getElementById('mover-baixo');
// const bClearTaskFinish = document.getElementById('remover-finalizados');
// const bSaveTask = document.getElementById('salvar-tarefas');

function addTask() {
  if (inputId.value.length < 4) {
    alert('Error - número de caracteres menor que 4');
  } else {
    const createLi = document.createElement('li');
    ordenedList.appendChild(createLi);
    createLi.classList.add('list-ordened');
    createLi.innerText = inputId.value;
    inputId.value = '';
  }
}

function createTask() {
  bCreateTask.addEventListener('click', addTask);
}

function clearColor() {
  // const listSelected = document.getElementsByClassName('list-ordened');
  for (let i = 0; i < listSelected.length; i += 1) {
    listSelected[i].style.backgroundColor = 'white';
    listSelected[i].classList.remove('selected');
  }
}

function listGray(list) {
  clearColor();
  const listTarget = list.target;
  // const listSelected = document.getElementsByClassName('list-ordened');
  for (let i = 0; i < listSelected.length; i += 1) {
    if (list.target === listSelected[i]) {
      listTarget.classList.add('selected');
      listTarget.style.backgroundColor = 'rgb(128, 128, 128)';
      listTarget.style.borderRadius = '2px';
    }
  }
}

function selectTask() {
  ordenedList.addEventListener('click', listGray);
}

window.onload = function init() {
  createTask();
  selectTask();
};
