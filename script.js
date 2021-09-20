let criarTarefa = document.getElementById("criar-tarefa")
let listaTarefas = document.getElementById("lista-tarefas")
let textoTarefa = document.getElementById("texto-tarefa")

function addTask() {
  if (textoTarefa.value !== "") {
    let li = document.createElement("li")
    
    li.className = "tarefa"
    li.innerText = textoTarefa.value
    
    listaTarefas.appendChild(li)

    textoTarefa.value = ""
  }
}

criarTarefa.addEventListener("click", addTask)