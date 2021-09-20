window.onload = function beginning() {
  // função que faz o botao incluir uma tarefa no fim da lista
  
  document.getElementById('criar-tarefa').addEventListener('click',createTask);
  const task = document.getElementById('texto-tarefa');

  function createTask() {  
    const list = document.getElementById('lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = task.value;
    list.appendChild(listItem);
    listItem.classList.add('item');
    task.value = '';
  }
 
  const taskList = document.getElementById('lista-tarefas');taskList.addEventListener('click', seleciona);

  function seleciona(event){
    const items = document.querySelectorAll('li');
    for (let i = 0; i < items.length; i ++) {
      items[i].style.backgroundColor = '';
      items[i].classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}
