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