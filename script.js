const listaDeTarefa = document.getElementById("lista-tarefas")
const buttonTask =  document.getElementById("criar-tarefa")
const inputText = document.getElementById("texto-tarefa")


function createTask(){
    const itemListaDeTarefas = document.createElement("li");
    listaDeTarefa.appendChild(itemListaDeTarefas);
    itemListaDeTarefas.innerText = inputText.value;
    inputText.value = "";
}

buttonTask.addEventListener("click",createTask)
