let newTaskInput = document.querySelector('#texto-tarefa');
let createTaskButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');

function createTask() {
let newLi = document.createElement('li');
let textli = document.createTextNode(`${newTaskInput.value}`);
newLi.addEventListener('click', function(event){
    newLi.classList.add('selected');
    let itemClassSelected = document.querySelectorAll('.selected');
    for(let i = 0; i < itemClassSelected.length ; i += 1) {
        if(itemClassSelected[i].classList.contains('selected')) {
            itemClassSelected[i].classList.remove('selected');
        }


    }
    event.target.classList.add ('selected')

    })
    if(newTaskInput.value) {
        newLi.appendChild(textli);
        taskList.appendChild(newLi);
        newTaskInput.value = '';
    }
}

createTaskButton.addEventListener('click', createTask)

function completedTask() {
    taskList.addEventListener('dblclick', function(event){
        if(event.target.classList.contains('completed')) {
            return event.target.classList.remove('completed');

        }

        event.target.classList.add('completed');

    })
}

completedTask()

function deleteTask() {

    let deleteTaskButton = document.querySelector('#apaga-tudo');

    deleteTaskButton.addEventListener('click', function(){
        taskList.innerHTML = " ";
 


    })
}

deleteTask();

function deleteFinalizedTask() {
    let finalizedButton = document.querySelector('#remover-finalizados');

    finalizedButton.addEventListener('click', function(){
        let completedClass = document.querySelectorAll('.completed');
        for(let i=0; i < completedClass.length; i+=1) {
            completedClass[i].remove()
        }

    })

}

deleteFinalizedTask();


function deleteSelectedTask() {
    let selectedButton = document.querySelector('#remover-selecionado');

    selectedButton.addEventListener('click', function(){
        let selectedClass = document.querySelector('.selected');
        
            selectedClass.remove()

    })

}

deleteSelectedTask();

function saveTask() {

let saveListButton = document.querySelector('#salvar-tarefas');
taskList = document.querySelector('#lista-tarefas');
let save = localStorage.getItem('list');
taskList.innerHTML = save;

saveListButton.addEventListener('click', function () {
    taskList = document.querySelector('#lista-tarefas');
    localStorage.setItem('list', taskList.innerHTML);
})

}

saveTask();