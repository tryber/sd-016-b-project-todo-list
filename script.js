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

function riscaFinalizado() {
  function risca(event) {
    const alvo = event.target;
    if (alvo.classList.contains('completed')) {
      alvo.classList.remove('completed');
    } else {
      alvo.className += ' completed';
    }
  }
  listaTarefas.addEventListener('dblclick', risca);
}
riscaFinalizado();

function apagaTudo() {
  const btnApagaTudo = document.querySelector('#apaga-tudo');
  function excluiTudo() {
    while (listaTarefas.firstChild) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  }
  btnApagaTudo.addEventListener('click', excluiTudo);
}

apagaTudo();

function apagaFinalizados() {
  const btnApagaFinalizados = document.querySelector('#remover-finalizados');
  const tarefasFinalizadas = document.getElementsByClassName('completed');

  function excluiFinalizados() {
    while (tarefasFinalizadas.length > 0) {
      listaTarefas.removeChild(tarefasFinalizadas[0]);
    }
  }
  btnApagaFinalizados.addEventListener('click', excluiFinalizados);
}

apagaFinalizados();

/* Links utilizados durante a construção do projeto:
 - https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
 - https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
 - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while */
