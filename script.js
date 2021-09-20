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

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click',createTask);

// Requisito 9
// listOfTasks.addEventListener("dblclick", function(event){
//     let selectedTask = event.target;
//     if(selectedTask.classList.contains("completed")){
//         selectedTask.classList.remove("completed");
//     } else{
//         selectedTask.classList.add("completed");
//     }
// })