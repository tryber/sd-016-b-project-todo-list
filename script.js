let tarefaEscrita = document.querySelector('#texto-tarefa')
let listaTarefa = document.querySelector('#lista-tarefas')

function adicionaTarefa () {
    let criarTarefa = document.createElement('li')
    criarTarefa.addEventListener('click', colorGrey)

    criarTarefa.innerText = tarefaEscrita.value
    criarTarefa.classList = ('tarefa')
    listaTarefa.appendChild(criarTarefa)
    tarefaEscrita.value = ''    
}

let botaoAdicionar = document.querySelector('#criar-tarefa')
botaoAdicionar.onclick = adicionaTarefa

function colorGrey(event) {
    let tarefas = document.getElementsByClassName('tarefa')
    for (let index = 0; index < tarefas.length; index += 1) {
        if (tarefas[index].style.backgroundColor = 'rgb(128,128,128)') {
            tarefas[index].style.backgroundColor = 'white';
        }
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)'
    }

/* for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('click',function(){
    tarefas[index].style.backgroundColor = 'rgb(128, 128, 128)';
})
}  */

