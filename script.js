const TaskBtn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

// funcao mudar para cinza

function Grey(event) {
  const list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].style.backgroundColor = 'rgb(128,128,128)') {
      list[index].style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

// função adiciona tarefas.(tasks)

function tasks() {
  const newList = document.createElement('li');
  newList.addEventListener('click', Grey);
  list.appendChild(newList);
  newList.innerText = text.value;
  text.value = '';
}
TaskBtn.addEventListener('click', tasks);

// Item 9 riscar item

function line(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', line);
