console.log('vamo q vamo');
const orderedList = document.getElementById('lista-tarefas');
function createListItem() {
  const valorInput = document.getElementById('texto-tarefa');
  const p = document.createElement('li');
  p.classList.add('lista');
  orderedList.appendChild(p).innerText = valorInput.value;
  valorInput.value = '';

  const getListelements = document.getElementsByClassName('lista');
  for (let index = 0; index < getListelements.length; index += 1) {
    getListelements[index].addEventListener('click', changeBackgroundColorToGray);
  }
}

const submitButton = document.getElementById('criar-tarefa');
submitButton.addEventListener('click', createListItem);

// mudando para cor cinza
function changeBackgroundColorToGray(event) {
  const seletor = document.getElementsByTagName('li');
  for (let index = 0; index < seletor.length; index += 1) {
    seletor[index].classList.add('selected');
    seletor[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const getListelements = document.getElementsByClassName('lista');
for (let index = 0; index < getListelements.length; index += 1) {
  getListelements[index].addEventListener('click', changeBackgroundColorToGray);
}

// apagar tudo
function eraseAll() {
  orderedList.innerHTML = '';
}

const eraseButton = document.getElementById('apaga-tudo');
eraseButton.addEventListener('click', eraseAll);
