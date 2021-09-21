
// Declarações
let addTaskButton = document.getElementById('criar-tarefa');
let removeSelectedTaskButton = document.getElementById('remover-selecionado');
let removeFinishedTasksButton = document.getElementById('remover-finalizados');
let clearAllTasksButton = document.getElementById('apaga-tudo');
let taskList = document.getElementById('lista-tarefas');
let taskInput = document.getElementById('texto-tarefa');

// Event Listeners
addTaskButton.addEventListener('click', addTask);
removeSelectedTaskButton.addEventListener('click', removeSelected);
removeFinishedTasksButton.addEventListener('click', removeFinished);
clearAllTasksButton.addEventListener('click', clearAllTasks);

// Funções
function addTask(){
    const task = document.createElement('li');
    task.innerText = taskInput.value;
    if (task.innerText === ""){
        alert("Tarefa em branco.");
    } else {
        taskInput.value = "";
        taskList.appendChild(task);
        task.addEventListener('click', selectTask);
        task.addEventListener('dblclick', completeTask)
    }
}

function removeSelected(){
    const selectedTask = document.querySelector('.selected');
    if (selectedTask) {
        selectedTask.parentElement.removeChild(selectedTask);
    }
}

function removeFinished(){
    const finishedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < finishedTasks.length; i += 1){
        finishedTasks[i].parentElement.removeChild(finishedTasks[i]);
    }
}

function clearAllTasks(){
    const AllTasks = document.querySelectorAll('li');
    for (let i = 0; i < AllTasks.length; i += 1){
        AllTasks[i].parentElement.removeChild(AllTasks[i]);
    }
}

function selectTask(event){
    const selectedTask = document.querySelectorAll('li');
    for (let i = 0; i < selectedTask.length; i += 1){
        selectedTask[i].classList.remove('selected');
    }
    event.target.classList.add('selected');
}

function completeTask(event){
    const completedTask = event.target;
    if (completedTask.classList.contains('completed')){
        completedTask.classList.remove('completed');
    } else {
        completedTask.classList.add('completed');
    }
}


// Referências JS:
// Arrow Function - https://www.w3schools.com/js/js_arrow_function.asp
// To Do List - https://www.w3schools.com/howto/howto_js_todolist.asp
// To Do List - https://youtu.be/-pRg_daFjfk
// To Do List - https://youtu.be/pRwxgtqImZQ
// Background Repeat - https://www.w3schools.com/cssref/pr_background-repeat.asp