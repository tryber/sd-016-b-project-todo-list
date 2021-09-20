const buttonCreate = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

function createTask() {
  const inputText = document.getElementById('texto-tarefa').value;
  const newTask = document.createElement('li');
  newTask.innerText = inputText;
  document.getElementById('texto-tarefa').value = '';
  lista.appendChild(newTask);
}

buttonCreate.addEventListener('click', createTask);

/* function mudarCor(event) {
    if (document.getElementById('selected') === null) {
      event.target.id = 'selected';
    } else {
      document.getElementById('selected').id = '';
      event.target.id = 'selected';
    }
    novaTarefa.addEventListener('click', mudarCor);
  } */