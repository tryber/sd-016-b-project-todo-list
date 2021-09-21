// função que faz o botao incluir uma tarefa no fim da lista
function createTask() {  
  const list = document.getElementById('lista-tarefas');
  const listItem = document.createElement('li');
  listItem.innerText = task.value;
  list.appendChild(listItem);
  listItem.classList.add('item');
  task.value = '';
}
// função que muda a cor da task selecionada
function seleciona(event) {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1 ) {
    items[i].style.backgroundColor = '';
    items[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}
// função que risca task completa
function complete(event) {
  if(event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
//função que apaga tudo
function reset() {
  taskList.innerHTML = '';
}
//função que apaga tarefas concluídas
function deleteCompletedTasks() {
  const finalizados = document.querySelectorAll('.completed');
  for (let i=0; i < finalizados.length; i += 1) {
    finalizados[i].remove();
  }
}
//função que salva as tarefas
function saveTasks() {
  localStorage.setItem('List', taskList.innerHTML);
}

window.onload = function beginning() {
  taskList.innerHTML = localStorage.getItem('List');
}
//função que remove tarefa selecionada
function removeSelected() {
  const selecteds = document.querySelectorAll('.selected');
  for (let i=0; i < selecteds.length; i += 1) {
    selecteds[i].remove();
  }
}
//função que move para cima
function moveUp() {
  const itensList = document.querySelectorAll('.item');
  for(let i=1; i < itensList.length; i += 1) {
    if(itensList[i].classList.contains('selected')) {
      if(itensList[i].classList.contains('completed')) {
        let upPosition = itensList[i].innerHTML;
        let downPosition = itensList[i-1].innerHTML;
        itensList[i].innerHTML = downPosition;
        itensList[i-1].innerHTML = upPosition;
        itensList[i-1].classList.add('completed','selected');
        itensList[i].classList.remove('completed','selected');
      } else {
        let upPosition = itensList[i].innerHTML;
        let downPosition = itensList[i-1].innerHTML;
        itensList[i].innerHTML = downPosition;
        itensList[i-1].innerHTML = upPosition;
        itensList[i-1].classList.add('selected');
        itensList[i].classList.remove('selected');
      }
    }
  }
}
//função que move para baixo
function moveDown() {
  const itensList = document.querySelectorAll('.item');
  for(let i = itensList.length-2; i >= 0; i -= 1) {
    if(itensList[i].classList.contains('selected')) {
      if(itensList[i].classList.contains('completed')) {
        let downPosition = itensList[i].innerHTML;
        let upPosition = itensList[i+1].innerHTML;
        itensList[i].innerHTML = upPosition;
        itensList[i+1].innerHTML = downPosition;
        itensList[i+1].classList.add('completed','selected');
        itensList[i].classList.remove('completed','selected');
      } else {
        let downPosition = itensList[i].innerHTML;
        let upPosition = itensList[i+1].innerHTML;
        itensList[i].innerHTML = upPosition;
        itensList[i+1].innerHTML = downPosition;
        itensList[i+1].classList.add('selected');
        itensList[i].classList.remove('selected');
      }
    }
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
const task = document.getElementById('texto-tarefa'); 
const taskList = document.getElementById('lista-tarefas');  taskList.addEventListener('click', seleciona); 
taskList.addEventListener('dblclick', complete); 

document.getElementById('apaga-tudo').addEventListener('click',reset);
document.getElementById('remover-finalizados').addEventListener('click',deleteCompletedTasks);
document.getElementById('salvar-tarefas').addEventListener('click',saveTasks);
document.getElementById('remover-selecionado').addEventListener('click', removeSelected);
document.getElementById('mover-cima').addEventListener('click', moveUp);
document.getElementById('mover-baixo').addEventListener('click', moveDown);