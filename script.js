const inputArea = document.getElementById('input-area');
const listaArea = document.getElementById('lista-area');
const buttonsArea = document.getElementById('buttons-area');

// Cria input.
function createInputTarefa() {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Adicione sua nova tarefa';
  inputArea.appendChild(input);
}
createInputTarefa();

// Cria lista ordenada.
function createListOrdenada() {
  const olList = document.createElement('ol');
  olList.id = 'lista-tarefas';
  olList.innerHTML = localStorage.getItem('tarefas-salvas');
  listaArea.appendChild(olList);
}
createListOrdenada();

// Cria botão criar tarefa.
function createButtonTarefa() {
  const buttonTarefa = document.createElement('button');
  buttonTarefa.id = 'criar-tarefa';
  buttonTarefa.innerText = 'Adicionar tarefa';
  inputArea.appendChild(buttonTarefa);
}
createButtonTarefa();

// Evento para adicionar o item na lista.
const olList = document.getElementById('lista-tarefas');
const buttonAddItem = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
buttonAddItem.addEventListener('click', () => {
  const inputValue = document.querySelector('#texto-tarefa').value;
  if (inputValue !== '') {
    const li = document.createElement('li');
    li.classList.add('list-iten');
    li.innerText = inputValue;
    olList.appendChild(li);
    input.value = '';
  }
});

function salvaTarefas() {
  localStorage.setItem('tarefas-salvas', olList.innerHTML);
}

// Evento para mudar o background color do item.
olList.addEventListener('click', (event) => {
  const alvo = event.target;
  for (let index = 0; index < olList.children.length; index += 1) {
    olList.children[index].style.backgroundColor = '';
    olList.children[index].classList.remove('selecionado');
    olList.style.backgroundColor = '';
  }
  alvo.style.backgroundColor = 'grey';
  olList.style.backgroundColor = '';
  alvo.classList.add('selecionado');
});

// Clicar duas vezes risca o item.
olList.addEventListener('dblclick', (event) => {
  const alvo = event.target;
  if (alvo.classList.contains('completed')) {
    alvo.className = '';
  } else {
    alvo.classList.add('completed');
  }
});

// Adiciona um botão para apagar tudo.
function createButtonClearList() {
  const buttonClearList = document.createElement('button');
  buttonClearList.id = 'apaga-tudo';
  buttonClearList.innerText = 'Limpar lista';
  buttonsArea.appendChild(buttonClearList);
}
createButtonClearList();

// Evento que utiliza o botão para apagar a lista.
const buttonClear = document.getElementById('apaga-tudo');
buttonClear.addEventListener('click', () => {
  olList.innerHTML = '';
  salvaTarefas();
});

// Cria botão que remove os finalizados
function createButtonRemoveFinalizado() {
  const buttonRemove = document.createElement('button');
  buttonRemove.id = 'remover-finalizados';
  buttonRemove.innerHTML = 'Limpar completos';
  buttonsArea.appendChild(buttonRemove);
}
createButtonRemoveFinalizado();

// Remove as tarefas completadas.
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
buttonRemoveCompleted.addEventListener('click', () => {
  const selectedItens = document.querySelectorAll('.completed');
  for (let index = 0; index < selectedItens.length; index += 1) {
    olList.removeChild(selectedItens[index]);
  }
  salvaTarefas();
});

// Adiciona um botão que salva as tarefas no localState.
function createButtonSaveList() {
  const buttonSaveList = document.createElement('button');
  buttonSaveList.id = 'salvar-tarefas';
  buttonSaveList.innerText = 'Salvar lista';
  buttonsArea.appendChild(buttonSaveList);
}
createButtonSaveList();

// Evento para salvar os itens.
const buttonSaveList = document.getElementById('salvar-tarefas');
buttonSaveList.addEventListener('click', salvaTarefas);

// Cria botões para mover as tarefas.
function createButtons(nameButton, id) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = nameButton;
  buttonsArea.appendChild(button);
}
createButtons('Mover para cima', 'mover-cima'); // Botão Up
createButtons('Mover para baixo', 'mover-baixo'); // Botão Down;

// Botão mover tarefa para cima.
const buttonUp = document.getElementById('mover-cima');
buttonUp.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  const li = document.querySelectorAll('.list-iten');
  if (selecionado === li[0] || selecionado === null) {
    return;
  }
  olList.insertBefore(selecionado, selecionado.previousElementSibling);
  // selecionado = 0;
});

// Botão mover tarefa para baixo.
const buttonDown = document.getElementById('mover-baixo');
buttonDown.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  const li = document.querySelectorAll('.list-iten');
  if (selecionado === li[li.length - 1] || selecionado === null) {
    return;
  }
  olList.insertBefore(selecionado.nextElementSibling, selecionado);
  // selecionado = 0;
});

createButtons('Remover selecionado', 'remover-selecionado');// Botão remover selecionado.
const buttonRemoveSelecionado = document.getElementById('remover-selecionado');
buttonRemoveSelecionado.addEventListener('click', () => {
  const selecionado = document.querySelector('.selecionado');
  selecionado.parentElement.removeChild(selecionado);
});
