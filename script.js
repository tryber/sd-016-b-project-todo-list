window.onload = function beginning() {

  // função que faz o botao incluir uma tarefa no fim da lista
  let btn =document.getElementById("criar-tarefa").addEventListener("click",createTask);
  let task = document.getElementById("texto-tarefa");

  function createTask(event) {  
    list = document.getElementById("lista-tarefas");
    let listItem = document.createElement("li");
    listItem.innerText = task.value;
    list.appendChild(listItem);
    task.value = '';
  }
}