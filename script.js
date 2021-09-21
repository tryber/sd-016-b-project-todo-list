const header = document.querySelector('header');

const main = document.querySelector('main');

const title = document.createElement('h1');
title.innerText = 'Minha Lista de Tarefas';
header.appendChild(title);

const paragraph = document.createElement('p');
paragraph.id = 'funcionamento';
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
header.appendChild(paragraph);

const addTaskSection = document.createElement('section');
addTaskSection.id = 'add-task';
main.appendChild(addTaskSection);

const input = document.createElement('input');
input.id = 'texto-tarefa';
input.type = 'text';
addTaskSection.appendChild(input);

const addTaskButton = document.createElement('button');
addTaskButton.id = 'criar-tarefa';
addTaskButton.innerText = 'Adicionar';
addTaskSection.appendChild(addTaskButton);

const taskListSection = document.createElement('section');
main.appendChild(taskListSection);

const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
taskListSection.appendChild(taskList);

function changeSelectedTask(selectedTask, newSelectedTask) {
  const status = 'selected';
  if (selectedTask !== newSelectedTask) {
    /*
    Consultei o site abaixo para descobrir como adicionar e remover uma classe sem perder as que já estavam aplicadas
    ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    */
    selectedTask.classList.remove(status);
    newSelectedTask.classList.add(status);
  }
}

function getSelectedTask() {
  return document.querySelector('.selected');
}

function changeTaskBackgroundColor(task) {
  /*
  Consultei o site abaixo para descobrir como criar uma função anônima de forma que o linter aceitasse
  ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  */
  task.addEventListener('click', (event) => {
    const selectedTask = getSelectedTask();
    // Quando nenhuma tarefa foi selecionada ainda, o conteúdo de selectedTask é null, então eu apenas atribuo a classe selected ao elemento que disparou esse evento. Caso contrário, eu retiro selected da tarefa atual selecionada e atribuo ela ao elemento que disparou o evento.
    if (selectedTask !== null) {
      changeSelectedTask(selectedTask, event.target);
    } else {
      event.target.classList.add('selected');
    }
  });
}

function markAsCompleted(task) {
  task.addEventListener('dblclick', (event) => {
    /*
    Consultei o site abaixo para descobrir como alternar a aplicação de uma classe a um elemento
    ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    */
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

const controlSection = document.createElement('section');
controlSection.id = 'tasks-control';
main.appendChild(controlSection);

const clearListButton = document.createElement('button');
clearListButton.id = 'apaga-tudo';
clearListButton.innerText = 'Limpar lista';
controlSection.appendChild(clearListButton);

clearListButton.addEventListener('click', () => {
  /*
  Consultei o site abaixo para descobrir como remover todos os filhos de um nó
  ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  */
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
});

const removeTasksButton = document.createElement('button');
removeTasksButton.id = 'remover-finalizados';
removeTasksButton.innerText = 'Limpar completas';
controlSection.appendChild(removeTasksButton);

removeTasksButton.addEventListener('click', () => {
  /*
  Consultei o site abaixo para descobrir como remover todos os elementos com uma característica específica de uma HTML Collection
  ref: https://stackoverflow.com/questions/37311003/how-to-remove-an-item-from-htmlcollection
  */
  const { children } = taskList;
  for (let index = (children.length - 1); index >= 0; index -= 1) {
    /*
    Consultei o link abaixo para saber como identificar se um elemento contém uma classe específica aplicada a ele
    ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    */
    if (children[index].classList.contains('completed')) {
      taskList.removeChild(children[index]);
    }
  }
});

const saveListButton = document.createElement('button');
saveListButton.id = 'salvar-tarefas';
saveListButton.innerText = 'Salvar Lista';
controlSection.appendChild(saveListButton);

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
    changeTaskBackgroundColor(task);
    markAsCompleted(task);
  }
}

const upButton = document.createElement('button');
upButton.id = 'mover-cima';
upButton.innerText = '⇧';
controlSection.appendChild(upButton);

upButton.addEventListener('click', () => {
  const selectedTask = getSelectedTask();
  if (selectedTask === null) {
    alert('Nenhuma tarefa foi selecionada.');
  } else if (selectedTask !== taskList.firstElementChild) {
    /*
    Consultei o site abaixo para descobrir como adicionar um elemento HTML antes de um determinado elemento já existente
    ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
    */
    taskList.insertBefore(selectedTask, selectedTask.previousElementSibling);
  }
});

const downButton = document.createElement('button');
downButton.id = 'mover-baixo';
downButton.innerText = '⇩';
controlSection.appendChild(downButton);

downButton.addEventListener('click', () => {
  const selectedTask = getSelectedTask();
  if (selectedTask === null) {
    alert('Nenhuma tarefa foi selecionada.');
  } else if (selectedTask !== taskList.lastElementChild) {
    taskList.insertBefore(selectedTask.nextElementSibling, selectedTask);
  }
});

const removeSelectedButton = document.createElement('button');
removeSelectedButton.id = 'remover-selecionado';
removeSelectedButton.innerText = 'X';
controlSection.appendChild(removeSelectedButton);

removeSelectedButton.addEventListener('click', () => {
  const selectedTask = getSelectedTask();
  taskList.removeChild(selectedTask);
});
