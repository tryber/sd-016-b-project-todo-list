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


function paintTask (event){
    const selectedPaint = document.querySelector("paint")
    if(selectedPaint === null) {
        event.target.classList.add("paint")
    } else {
    selectedPaint.classList.remove("paint")
    event.target.classlist.add("paint")
    }
}

listaDeTarefa.addEventListener("click", paintTask)