const criarTarefas = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefas = document.getElementById('texto-tarefa');
const apagaTarefas = document.getElementById('apaga-tudo');
const rmvSelecionado = document.getElementById('remover-selecionado');
const rmvFinalizado = document.getElementById('remover-finalizados');
// const moverCima = document.getElementById('mover-cima');
// const moverBaixo = document.getElementById('mover-baixo');

criarTarefas.addEventListener('click', () => {
  const itemLista = document.createElement('li');
  const text = textoTarefas.value;
  itemLista.innerText = text;
  if (textoTarefas.value === '') {
    alert('Campo vazio: Adicione uma tarefa!');
  } else {
    listaTarefas.appendChild(itemLista);
    itemLista.classList = 'item';
  }
  textoTarefas.value = '';
});

apagaTarefas.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

function removedSelect() {
  const rmvSelect = document.querySelectorAll('.select');
  for (let idx = 0; idx < rmvSelect.length; idx += 1) {
    rmvSelect[idx].classList.remove('select');
  }
}

// Ref.: https://www.w3schools.com/howto/howto_js_todolist.asp
listaTarefas.addEventListener('click', (event) => {
  removedSelect();
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('select');
  }
}, false);

rmvSelecionado.addEventListener('click', () => {
  const getElementRemoved = document.querySelector('.select');
  listaTarefas.removeChild(getElementRemoved);
});

listaTarefas.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
}, false);

// Usei o este laço while tendo como referência o código utilizado por Bruno Fay.
rmvFinalizado.addEventListener('click', () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
});
