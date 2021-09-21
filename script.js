const listaDeTarefa = document.getElementById("lista-tarefas")
const buttonTask =  document.getElementById("criar-tarefa")
const inputText = document.getElementById("texto-tarefa")
const deletButton = document.getElementById("apaga-tudo")

function createTask(){
    const itemListaDeTarefas = document.createElement("li");
    listaDeTarefa.appendChild(itemListaDeTarefas);
    itemListaDeTarefas.innerText = inputText.value;
    inputText.value = "";
}

buttonTask.addEventListener("click",createTask)


function paintTask (event){
    const selectedPaint = document.querySelector("paint")
    if(selectedPaint === null) {
        event.target.classList.add("paint");
    } else {
        selectedPaint.classList.remove("paint");
        event.target.classList.add("paint");
    }
}

listaDeTarefa.addEventListener("click", paintTask)



function completeTask (event){
    if(event.target.classList.contains("completed")) {
        event.target.classList.remove("completed");
    } else {
        event.target.classList.add("completed");
    }
}
    
listaDeTarefa.addEventListener("dblclick", completeTask)


function deletAll () {
listaDeTarefa.innerText = " "
}

deletButton.addEventListener("click",deletAll)