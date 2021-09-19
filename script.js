let button = document.getElementById('criar-tarefas');
let listaTarefas = document.getElementById('lista-tarefas');
let adicionar = document.getElementById('texto-tarefa');

function buttonAdd() {
  let li = document.createElement('li');
  li.innerText = adicionar.value; 
  listaTarefas.appendChild(li);
  adicionar.value = "";  
}

button.addEventListener('click', buttonAdd);