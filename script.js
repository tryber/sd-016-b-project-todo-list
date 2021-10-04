// section 1
const bCreateTask = document.getElementById('criar-tarefa');
const bClearTask = document.getElementById('apaga-tudo');
const inputId = document.getElementById('texto-tarefa');
const ordenedList = document.getElementById('lista-tarefas');
const listSelected = document.getElementsByClassName('list-ordened');
// section 2
const bRemoveSelect = document.getElementById('remover-selecionado');
const bMoveUp = document.getElementById('mover-cima');
const bMoveDown = document.getElementById('mover-baixo');
const bClearTaskFinish = document.getElementById('remover-finalizados');
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
    if (listTarget === listSelected[i]) {
      listTarget.classList.add('selected');
      listTarget.style.backgroundColor = 'rgb(128, 128, 128)';
      listTarget.style.borderRadius = '2px';
    }
  }
}

function lineThr(list) {
  const listTarget = list.target;
  // https://www.horadecodar.com.br/2020/10/08/detectar-se-um-elemento-contem-uma-classe-com-javascript/
  if (listTarget.classList.contains('completed') === true) {
    listTarget.classList.remove('completed');
    listTarget.style.textDecoration = '';
  } else {
    listTarget.classList.add('completed');
    listTarget.style.textDecoration = 'line-through solid black';
  }
}

function selectTask() {
  ordenedList.addEventListener('dblclick', lineThr);
  ordenedList.addEventListener('click', listGray);
}

function clearTask() {
  // https://stackoverflow.com/questions/683366/remove-all-the-children-dom-elements-in-div
  while (ordenedList.hasChildNodes()) {
    ordenedList.removeChild(ordenedList.lastChild);
  }
}

function clearAllTask() {
  bClearTask.addEventListener('click', clearTask);
}

function rmCompleted() {
  const listFinish = document.getElementsByClassName('completed');
  while (listFinish.length > 0) {
    listFinish[0].remove();
  }
}

function removeCompleted() {
  bClearTaskFinish.addEventListener('click', rmCompleted);
}

function rmSelected() {
  const listFinish = document.getElementsByClassName('selected');
  while (listFinish.length > 0) {
    listFinish[0].remove();
  }
}

function removeSelected() {
  bRemoveSelect.addEventListener('click', rmSelected);
}

function up() {
  const upSelected = document.getElementsByClassName('selected')[0];
  if (upSelected !== null && upSelected !== ordenedList.firstElementChild) {
    ordenedList.insertBefore(upSelected, upSelected.previousElementSibling);
  }
}

function upTo() {
  bMoveUp.addEventListener('click', up);
}

function down() {
  const upSelected = document.getElementsByClassName('selected')[0];
  if (upSelected !== null && upSelected !== ordenedList.lastElementChild) {
    ordenedList.insertBefore(upSelected, upSelected.nextElementSibling.nextElementSibling);
  }
}

function downTo() {
  bMoveDown.addEventListener('click', down);
}

window.onload = function init() {
  createTask();
  selectTask();
  clearAllTask();
  removeCompleted();
  removeSelected();
  upTo();
  downTo();
};
