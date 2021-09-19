function criaTarefas() {
  const inputTarefa = document.querySelector('#texto-tarefa');
  const btnAdcionar = document.querySelector('#criar-tarefa');
  const listaTarefas = document.querySelector('#lista-tarefas');

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
    limpaClasse.removeAttribute('style');
    limpaClasse.className = 'tarefa';
  }
}

function mudaCorItem() {
  const itemTarefa = document.querySelector('#lista-tarefas');
  const novaCor = 'rgb(128, 128, 128)';

  function mudaCorClick(event) {
    const evento = event.target;
    evento.style.backgroundColor = novaCor;
    evento.className = 'tarefa selected';
  }
  itemTarefa.addEventListener('click', limpaSelecionado);
  itemTarefa.addEventListener('click', mudaCorClick);
}

mudaCorItem();
