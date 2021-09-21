const header = document.querySelector('header');

const main = document.querySelector('main');

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(paragraph);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
main.appendChild(input);

const addTaskButton = document.createElement('button');
addTaskButton.id = 'criar-tarefa';
addTaskButton.innerText = 'Adicionar';
main.appendChild(addTaskButton);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
main.appendChild(taskList);

function changeSelectedTask(selectedTask, newTask) {
  const backgroundColor = 'gray-background';
  if (selectedTask !== newTask) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre os métodos 'add' e 'remove'
    selectedTask.classList.remove(backgroundColor);
    newTask.classList.add(backgroundColor);
  }
}

function changeTaskBackgroundColor(task) {
  task.addEventListener('click', (event) => {
    const selectedTask = document.querySelector('.gray-background');
    // Quando nenhuma tarefa foi selecionada ainda, o conteúdo de selectedTask é null, então eu apenas atribuo a classe gray-background ao elemento que disparou esse evento. Caso contrário, eu retiro gray-background da tarefa atual selecionada e atribuo ela ao elemento que disparou o evento.
    if (selectedTask !== null) {
      changeSelectedTask(selectedTask, event.target);
    } else {
      // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'add'
      event.target.classList.add('gray-background');
    }
  });
}

function markAsCompleted(task) {
  task.addEventListener('dblclick', (event) => {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'toggle'
    event.target.classList.toggle('completed');
  });
}

addTaskButton.addEventListener('click', () => {
  if (input.value !== '') {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerText = input.value;
    taskList.appendChild(task);
    input.value = '';
    changeTaskBackgroundColor(task);
    markAsCompleted(task);
  } else {
    alert('Ops! Você ainda não inseriu a tarefa.');
  }
});

const clearListButton = document.createElement('button');
clearListButton.id = 'apaga-tudo';
clearListButton.innerText = 'Limpar lista';
main.appendChild(clearListButton);

clearListButton.addEventListener('click', () => {
  // ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ - pesquisei sobre como remover todos os filhos de um nó
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

const removeTasksButton = document.createElement('button');
removeTasksButton.id = 'remover-finalizados';
removeTasksButton.innerText = 'Limpar completas';
main.appendChild(removeTasksButton);

removeTasksButton.addEventListener('click', () => {
  // ref: https://stackoverflow.com/questions/37311003/how-to-remove-an-item-from-htmlcollection - pesquisei sobre como remover todos os elementos com uma característica específica de uma HTML Collection
  const { children } = taskList;
  for (let index = (children.length - 1); index >= 0; index -= 1) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp - pesquisei sobre o método 'contains'
    if (children[index].classList.contains('completed')) {
      taskList.removeChild(children[index]);
    }
  }
});

const saveListButton = document.createElement('button');
saveListButton.id = 'salvar-tarefas';
saveListButton.innerText = 'Salvar Lista';
main.appendChild(saveListButton);

saveListButton.addEventListener('click', () => {
  const tasks = document.getElementsByClassName('task');
  const taskObjects = [];
  for (let index = 0; index < tasks.length; index += 1) {
    taskObjects[index] = {
      text: tasks[index].innerText,
      classes: tasks[index].classList.value,
    };
  }
  localStorage.setItem('tasks', JSON.stringify(taskObjects));
});

if (localStorage.length !== 0) {
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  for (let index = 0; index < savedTasks.length; index += 1) {
    const task = document.createElement('li');
    task.className = savedTasks[index].classes;
    task.innerText = savedTasks[index].text;
    taskList.appendChild(task);
    localStorage.clear();
  }
}
