// requisito 5-6  
const butt = document.getElementById('criar-tarefa');

function createLi() {
  const list = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  li.classList.add('listItem');
  li.innerText = document.getElementById('texto-tarefa').value;
  list.appendChild(li);
  document.getElementById('texto-tarefa').value = '';
}

butt.addEventListener('click', createLi);

  
