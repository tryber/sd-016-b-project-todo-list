const buttonCreate = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

function createTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.innerText = inputText;
  document.getElementById('texto-tarefa').value = '';
  lista.appendChild(newTask);
  newTask.addEventListener('click', changeColor);
  newTask.addEventListener('dblclick', completedTask);
}

buttonCreate.addEventListener('click', createTask);

function changeColor(event) {
  if (document.getElementById('selected') === null) {
    event.target.id = 'selected';
  } else {
    document.getElementById('selected').id = '';
    event.target.id = 'selected';
  }
}

function completedTask(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}
