// Requisito 5 e 6
// Fonte de pesquisa : 
// Arrow function - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// ${variavel}- https://pt.stackoverflow.com/questions/363976/uso-de-variavel-em-javascript
// preventDefault -  previne comportamento padrão visto no course 6.1

const createTask = (event) => {
    event.preventDefault();
const listOfTasks = document.querySelector('#lista-tarefas');
const taskInput = document.querySelector('#texto-tarefa');
const valueInput = taskInput.value;
const addList = document.createElement('li');
const valueTask = `${valueInput}`;
addList.innerHTML = valueTask;
listOfTasks.appendChild(addList);

taskInput.value = '';
};

function addTaskClick(){
const button = document.querySelector('#criar-tarefa');
button.addEventListener('click',createTask);
}
addTaskClick();

// Requisito 7 e 8
const listOfTasks = document.getElementById('lista-tarefas');

function removeIdSelected () {
    const elementsLi = listOfTasks.children;
    for (index = 0; index < listOfTasks.length; index += 1) {
        if (elementsLi[i].id === 'selected') {
            elementsLi[i].removeAttribute('id');
        }
    }
}

function selectedTask () {
  listOfTasks.addEventListener('click', (evento) => {
    removeIdSelected();
    const targetEvent = evento.target;
    targetEvent.id = 'selected';
  });
}
selectedTask();

// Requisito 9
listOfTasks.addEventListener('dblclick', (event) => {
    const selectedTask = event.target;
    if(selectedTask.classList.contains("completed")){
        selectedTask.classList.remove("completed");
    } else {
        selectedTask.classList.add("completed");
    }
})

// Requisito 10
// fonte de pesquisa : 
// while e remove -https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function deleteTasks () {
    while (listOfTasks.firstChild) {
        listOfTasks.removeChild(listOfTasks.firstChild);
    }
}

const deleteButton = document.getElementById('apaga-tudo');
deleteButton.addEventListener('click', deleteTasks);

// Requisito 11
const selectedElements = document.getElementsByClassName('completed');
const completedButton = document.getElementById('remover-finalizados');

function completedTask () {
    completedButton.addEventListener('click', () => {
        while (selectedElements.length > 0) {
            listOfTasks.removeChild(selectedElements[0]);
        }
    });
}
completedTask();
