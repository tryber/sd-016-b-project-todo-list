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
  for (i=0; i < finalizados.length; i += 1) {
    finalizados[i].remove();
  }
}

document.getElementById('criar-tarefa').addEventListener('click', createTask);
const task = document.getElementById('texto-tarefa'); 

const taskList = document.getElementById('lista-tarefas');  taskList.addEventListener('click', seleciona); 
taskList.addEventListener('dblclick', complete); 

document.getElementById('apaga-tudo').addEventListener('click',reset);
document.getElementById('remover-finalizados').addEventListener('click',deleteCompletedTasks);
