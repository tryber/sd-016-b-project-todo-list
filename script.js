function createTask() {

let newTaskInput = document.querySelector('#texto-tarefa');
let createTaskButton = document.querySelector('#criar-tarefa');
let taskList = document.querySelector('#lista-tarefas');


createTaskButton.addEventListener('click', function (){
    if (newTaskInput.value.length > 0) {
        let newLi =document.createElement('li');
        newLi.innerText = newTaskInput.value;
        taskList.appendChild(newLi);
        newTaskInput.value = '';
    }



})

}

createTask();
