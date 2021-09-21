let criarTarefa = document.getElementById("criar-tarefa")
let limparTudo = document.getElementById("apaga-tudo")
let limparFinalizados = document.getElementById("remover-finalizados")
let listaTarefas = document.getElementById("lista-tarefas")
let textoTarefa = document.getElementById("texto-tarefa")
let items = document.getElementsByTagName("li")
let finalizados = document.getElementsByClassName("completed")

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


function eraseAll() {
  listaTarefas.innerText=""
}
limparTudo.addEventListener("click", eraseAll)


function eraseCompleted() {
  for (let i = 0; i < finalizados.length; i++) {
    finalizados[i].remove()
  }
}
limparFinalizados.addEventListener("click", eraseCompleted)



function selectedTask(task) {
  for (let i = 0; i < items.length; i++) {
    let item = items[i]
    if (item.classList.contains("selected")) {
      item.classList.remove("selected")
    }
  }
  let selectedTask = task.target
  selectedTask.classList.add("selected")
  
  for (let i = 0; i < items.length; i++) {
    let selected = items[i]
    if (selected.classList.contains("selected")) {
      selected.style.backgroundColor = "rgb(128, 128, 128)"
    } else {
      selected.style.backgroundColor = "white"
    }
  }
}  
listaTarefas.addEventListener("click", selectedTask)


function completed(task) {
  
  let itemSelected = task.target
  
  if (itemSelected.classList.contains("completed")) {
    itemSelected.classList.remove('completed')
    itemSelected.style.textDecoration = "none"
  } else {
    itemSelected.classList.add("completed")
    itemSelected.style.textDecoration = " line-through solid rgb(0, 0, 0)"
  }
}
listaTarefas.addEventListener("dblclick", completed)
