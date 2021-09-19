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
