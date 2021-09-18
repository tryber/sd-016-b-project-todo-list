// functions for working with elements

function getOne(element) {
  return document.querySelector(element);
}

function getAll(element) {
  return document.querySelectorAll(element);
}

function createElement(tag) {
  return document.createElement(tag);
}

function addClass(element, newClass) {
  element.classList.add(newClass);
}

function toggleClass(element, alternateClass) {
  element.classList.toggle(alternateClass);
}

function removeClass(element, delClass) {
  element.classList.remove(delClass);
}

function plugHtml(fatherElement, sonElement) {
  fatherElement.appendChild(sonElement);
}

function removeOfHtml(fatherElement, sonElement) {
  fatherElement.removeChild(sonElement);
}

function addMultiplesEvents(element, eventsName, listener) {
  const events = eventsName.split(' ');

  events.forEach((event) => {
    element.addEventListener(event, listener, false);
  });
}

function addMultiplesListeners(arr, eventName, listener) {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
}

function addMultiplesEventsAndListeners(arr, eventsName, listener) {
  const events = eventsName.split(' ');

  arr.forEach((element) => {
    events.forEach((event) => {
      element.addEventListener(event, listener, false);
    });
  });
}

// global variables

const user = {
  taskContent: '',
  allTasks: [],
};

const staticElements = {
  inputTextTask: getOne('#texto-tarefa'),
  taskList: getOne('#lista-tarefas'),
  buttonCreateTask: getOne('#criar-tarefa'),
  buttonDeleteAll: getOne('#apaga-tudo'),
  buttonDeleteDone: getOne('#remover-finalizados'),
  buttonDeleteSelected: getOne('#remover-selecionado'),
  buttonSave: getOne('#salvar-tarefa'),
  buttonMoveUp: getOne('#mover-cima'),
  buttonMoveDown: getOne('#mover-baixo'),
}

// functions for the project

function resetTaskSelection() {
  user.allTasks.forEach((task) => {
    removeClass(task, 'selected');
  });
}

function selectTask(event) {
  resetTaskSelection();
  addClass(event.target, 'selected');
}

function completeTask(event) {
  toggleClass(event.target, 'completed');
}

function taskEvents(event) {
  event.type !== 'dblclick' ? selectTask(event) : completeTask(event);
}

function lintenTaskItem() {
  const allTasks = getAll('li');
  if (allTasks.length > 0) {
    addMultiplesEventsAndListeners(allTasks, 'click dblclick', taskEvents);
  }
}

function getTaskContent(event) {
  user.taskContent = event.target.value;
}

function taskListInput() {
  staticElements.inputTextTask.addEventListener('keyup', getTaskContent);
}

function saveTask(taskItem) {
  user.allTasks.push(taskItem);
}

function createTask() {
  const newTask = createElement('li');
  newTask.innerText = user.taskContent;
  saveTask(newTask);
}

function resetTaskList() {
  user.allTasks.forEach((task)=> {
    task.remove();
  });
}

function resetAllTasks() {
  user.allTasks.length = 0;
}

function renderTask() {
  user.allTasks.forEach((task)=> {
    plugHtml(staticElements.taskList, task);
  });
  lintenTaskItem();
}

function resetInput() {
  staticElements.inputTextTask.value = '';
}

function taskCreation() {
  resetInput();
  createTask();
  resetTaskList();
  renderTask();
}

function buttonCreateTask() {
  staticElements.buttonCreateTask.addEventListener('click', taskCreation)
}

function deleteAllTasks() {
  resetTaskList();
  resetAllTasks();
  renderTask();
}

function buttonDeleteAll() {
  staticElements.buttonDeleteAll.addEventListener('click', deleteAllTasks);
}

function deleteDoneTasks() {
  user.allTasks.forEach((task) => {
    const taskClass = task.classList.toString();
    if (taskClass.includes('completed')) {
      const removeIndex = user.allTasks.indexOf(task);
      user.allTasks.splice(removeIndex, 1);
      task.remove();
    }
  });
}

function buttonDeleteDone() {
  staticElements.buttonDeleteDone.addEventListener('click', deleteDoneTasks);
}

function deleteSelectedTask() {
  getOne('.selected').remove();
}

function buttonDeleteSelected() {
  staticElements.buttonDeleteSelected.addEventListener('click', deleteSelectedTask);
}

window.onload = () => {
  taskListInput();
  buttonCreateTask();
  buttonDeleteAll();
  buttonDeleteDone();
  buttonDeleteSelected();
};
