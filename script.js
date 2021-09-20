// Remove o valor de input
function removeValueInput() {
  const inputText = document.getElementById('texto-tarefa');
  inputText.value = '';
}

// Desselecionar o selected
function deselectedChangeColor() {
  const li = document.getElementsByClassName('list-item');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected') === true) {
      li[index].classList.toggle('selected');
    }
  }
}

// Adiciona a cor cinza ao clicar no item da lista
function changeColor() {
  const li = document.getElementsByClassName('list-item');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', () => {
      deselectedChangeColor();
      li[index].classList.toggle('selected');
    });
  }
}

// Duplo clique adiciona o elemento completed
function doneItem() {
  const li = document.getElementsByClassName('list-item');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('dblclick', () => {
      if (li[index].classList.contains('completed') === true) {
        li[index].classList.remove('completed');
      } else {
        li[index].classList.add('completed');
      }
    });
  }
}

// Adiciona li a lista de tarefas
function addLi() {
  const inputText = document.getElementById('texto-tarefa').value;

  if (inputText !== '') {
    const li = document.createElement('li');
    const list = document.getElementById('lista-tarefas');
    li.classList.add('list-item');
    li.innerText = inputText;
    list.appendChild(li);
  }
  changeColor();
  doneItem();
}

// Botão que apaga todos os itens da lista
function removeItem() {
  const pai = document.getElementById('lista-tarefas');
  pai.innerHTML = '';
}

window.onload = function page() {
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', addLi);
  buttonAdd.addEventListener('click', removeValueInput);
  const buttonRemove = document.getElementById('apaga-tudo');
  buttonRemove.addEventListener('click', removeItem);
};
