const orderedList = document.getElementById('lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');
const delAllButton = document.getElementById('apaga-tudo');
const delButton = document.getElementById('remover-finalizados');
const saveListBtn = document.getElementById('salvar-tarefas');
const delSelected = document.getElementById('remover-selecionado');
const moveDownBtn = document.getElementById('mover-baixo');
const moveUpBtn = document.getElementById('mover-cima');
const liAmmount = orderedList.children;
let select = document.getElementsByClassName('background-li');

function liChangeColor(event) {
  const background = 'background-li';
  for (let index = 0; index < liAmmount.length; index += 1) {
    if (liAmmount[index].classList.contains(background)) {
      liAmmount[index].classList.remove(background);
    }
  }
  event.target.classList.add(background);
}

function addListenerClickLi() {
  if (liAmmount.length > 0) {
    for (let index = 0; index < liAmmount.length; index += 1) {
      liAmmount[index].addEventListener('click', liChangeColor);
    }
  }
}

function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function addListenerDoubleClickLi() {
  if (liAmmount.length > 0) {
    for (let index = 0; index < liAmmount.length; index += 1) {
      liAmmount[index].addEventListener('dblclick', lineThrough);
    }
  }
}

addButton.addEventListener('click', function () {
  const inputTextValue = inputText.value;
  const createLi = document.createElement('li');
  createLi.innerText = inputTextValue;
  orderedList.appendChild(createLi);
  inputText.value = '';
  addListenerClickLi();
  addListenerDoubleClickLi();
});

function allClear() {
  let count = 0;
  for (let index = 0; index < liAmmount.length; index += 1) {
    count += 1;
  }
  for (let index = 0; index < count; index += 1) {
    liAmmount[0].remove();
  }
}

function addButtonDel() {
  delAllButton.addEventListener('click', allClear);
}

function clearDone() {
  for (let index = 0; index < liAmmount.length; index += 1) {
    if (liAmmount[index].classList.contains('completed')) {
      liAmmount[index].remove();
      index -= 1;
    }
  }
}

function delDoneButton() {
  delButton.addEventListener('click', clearDone);
}

saveListBtn.addEventListener('click', () => {
  const savedItens = orderedList.innerHTML;
  localStorage.setItem('list', savedItens);
  alert('Lista salva!!');
});

delSelected.addEventListener('click', () => {
  if(select.length === 1) {
    select[0].remove();
  }
});

moveDownBtn.addEventListener('click', () => {
  if (select[0] !== undefined) {
    if (select[0].nextElementSibling !== null){
      orderedList.insertBefore(select[0].nextElementSibling, select[0]);
    }
  }
});

moveUpBtn.addEventListener('click', () => {
  if (select[0] !== undefined) {
    if (select[0].previousElementSibling !== null){
      orderedList.insertBefore(select[0], select[0].previousElementSibling);
    }
  }
});

window.onload = function start() {
  addButtonDel();
  delDoneButton();
  orderedList.innerHTML = localStorage.getItem('list');
  addListenerClickLi();
  addListenerDoubleClickLi();
};
