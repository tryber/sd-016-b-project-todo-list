
  // requisito 5
  
const butt = document.getElementById('criar-tarefa');

function createLi() {
  let input = document.getElementById('texto-tarefa').value;
  const list = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  li.classList.add('listItem');
  let temp = input;
  li.innerText = temp;
  list.appendChild(li);
  document.getElementById('texto-tarefa').value = '';

}

  function cleanInput() {
    const input2 = document.getElementById('texto-tarefa').value = '';
  }
butt.addEventListener('click', createLi);
//   butt.addEventListener('click', cleanInput);

  
