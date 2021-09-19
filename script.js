const listaTarefas = document.querySelector('#lista-tarefas');

function criaTarefas() {
  const inputTarefa = document.querySelector('#texto-tarefa');
  const btnAdcionar = document.querySelector('#criar-tarefa');

  function adcTarefa() {
    if (inputTarefa.value !== 0) {
      const novoItem = document.createElement('li');

      novoItem.className = 'tarefa';
      novoItem.innerText = inputTarefa.value;

      listaTarefas.appendChild(novoItem);

      inputTarefa.value = '';
    }
  }
  btnAdcionar.addEventListener('click', adcTarefa);
}
criaTarefas();

function limpaSelecionado() {
  const limpaClasse = document.querySelector('.selected');
  if (limpaClasse !== null) {
    if (limpaClasse.className.includes('completed')) {
      limpaClasse.style.backgroundColor = '';
      limpaClasse.className = 'tarefa completed';
    } else {
      limpaClasse.style.backgroundColor = '';
      limpaClasse.className = 'tarefa';
    }
  }
}

function selecionaItem() {
  const novaCor = 'rgb(128, 128, 128)';

  function mudaCorClick(event) {
    const evento = event.target;
    evento.style.backgroundColor = novaCor;
    evento.className += ' selected';
  }
  listaTarefas.addEventListener('click', limpaSelecionado);
  listaTarefas.addEventListener('click', mudaCorClick);
}

selecionaItem();

const itemFinalizado = document.querySelector('#lista-tarefas');
function riscaFinalizado() {
  function risca(event) {
    const alvo = event.target;
    if (alvo.classList.contains('completed')) {
      alvo.classList.remove('completed');
    } else {
      alvo.className += ' completed';
    }
  }
  itemFinalizado.addEventListener('dblclick', risca);
}
riscaFinalizado();
