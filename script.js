const input = document.getElementById('texto-tarefa');
const buttonCreate = document.getElementById('criar-tarefa');
const buttonErase = document.getElementById('apaga-tudo');
const orderedList = document.getElementById('lista-tarefas');

// Adicionar tarefa na lista
buttonCreate.addEventListener('click', function () {
  const task = input.value;
  if (task.length > 0) {
    const li = document.createElement('li');
    orderedList.appendChild(li);
    li.innerHTML = task;
    input.value = '';
  }
});

// Selecionado tarefa da lista
orderedList.addEventListener('click', function (event) {
  if (event.target.id !== 'lista-tarefas') {
    const listItems = orderedList.children;
    const currentSelection = event.target;
    for (const item of listItems) {
      item.style.backgroundColor = '';
    }
    currentSelection.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

// Riscando tarefa da lista
orderedList.addEventListener('dblclick', function (event) {
  if (event.target.id !== 'lista-tarefas') {
    if (event.target.classList[0] === 'completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

// Função para verificar se tem item na lista
function verifyListItem() {
  if (orderedList.children.length > 0) { // Se a OL tem filho, então retorna true
    return true;
  }
  return false;
}

buttonErase.addEventListener('click', function () {
  while (verifyListItem()) { // Enquanto a função acima retornar true, ele fica removendo os itens
    orderedList.removeChild(orderedList.firstChild);
  }
});
