const addTarefa = document.getElementById('criar-tarefa');

const todoList = document.getElementById('lista-tarefas');

const apagaTudo = document.getElementById('apaga-tudo');

const removerFinalizadas = document.getElementById('remover-finalizados');

const salvarTarefas = document.getElementById('salvar-tarefas');

const classSelect = 'item-selected';

function addTarefaFunction() {
  const createLi = document.createElement('li');

  const textTodo = document.getElementById('texto-tarefa');

  todoList.appendChild(createLi);

  createLi.innerText = textTodo.value;

  createLi.classList.add('item-list');

  textTodo.value = '';
}

function checkClass() {
  const arrayClassList = document.getElementsByClassName(classSelect);

  for (let index = 0; index < arrayClassList.length; index += 1) {
    arrayClassList[index].classList.remove(classSelect);
  }
}

function selectedItem(event) {
  checkClass();

  const clickItem = event.target;

  clickItem.classList.add(classSelect);
}

function todoComplete(event) {
  const doubleClickItem = event.target.classList;

  doubleClickItem.toggle('completed');
}

function apagarTudo() {
  const selectLis = document.querySelector('ol');

  localStorage.clear();

  while (selectLis.firstChild) {
    selectLis.removeChild(selectLis.firstChild);
  }
}

function removeFinalizadas() {
  const completeList = document.getElementsByClassName('completed');
  const lengthList = completeList.length;
  for (let index = 0; index < lengthList; index += 1) {
    completeList[0].remove();
  }
}

function salvarTarefasFunc() {
  localStorage.clear();
  const tarefasSalvas = document.getElementsByClassName('item-list');
  console.log(tarefasSalvas);
  for (let index = 0; index < tarefasSalvas.length; index += 1) {
    const item = 'item';
    const classes = 'class';
    const i = index;
    localStorage.setItem(item + i, tarefasSalvas[index].innerHTML);
    localStorage.setItem(classes + i, tarefasSalvas[index].classList.value);
  }
}

addTarefa.addEventListener('click', addTarefaFunction);

todoList.addEventListener('click', selectedItem);

todoList.addEventListener('dblclick', todoComplete);

apagaTudo.addEventListener('click', apagarTudo);

removerFinalizadas.addEventListener('click', removeFinalizadas);

salvarTarefas.addEventListener('click', salvarTarefasFunc);

window.onload = function () {
  if (localStorage.length !== 0) {
    for (let index = 0; index < (localStorage.length / 2); index += 1) {
      const createLi = document.createElement('li');

      todoList.appendChild(createLi);

      const item = 'item';
      const classes = 'class';
      const i = index;

      createLi.innerHTML = localStorage.getItem(item + i);

      document.getElementsByTagName('li')[index].className = (localStorage.getItem(classes + i));
    }
  }
};
