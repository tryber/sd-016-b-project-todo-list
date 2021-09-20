const taskButton = document.querySelector("#criar-tarefa");
const listOfTasks = document.querySelector('#lista-tarefas');
const taskInput = document.querySelector('#texto-tarefa');

// Requisito 5
// Fonte de pesquisa : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this
taskInput.addEventListener('input', function(event) {
    event.target.value = this.value;
})

// fonte de pesquisa : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
taskButton.addEventListener('click',() => {
  const task =document.createElement('li');
  task.innerHTML = taskInput.nodeValue;
  task.classList.add('tarefa-criada');
  listOfTasks.appendChild(task);
  taskInput.value = '';
});

listOfTasks.addEventListener('click', function (event) {
    const selectTask = event.target;
    if(previousSelected.length > 0){
        previousSelected[0].classList.remove("selected");
            if(selectedTask.classList.contains("selected")){
            selectedTask.classList.remove("selected");
        } else{
            selectedTask.classList.add("selected");
        }
    }
    else{
        selectedTask.classList.add("selected");
    }
})

// Requisito 9
listOfTasks.addEventListener("dblclick", function(event){
    let selectedTask = event.target;
    if(selectedTask.classList.contains("completed")){
        selectedTask.classList.remove("completed");
    } else{
        selectedTask.classList.add("completed");
    }
})