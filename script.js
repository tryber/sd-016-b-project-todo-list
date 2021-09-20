// Remove o valor de input
function removeValueInput() {
  const inputText = document.getElementById('texto-tarefa');
  inputText.value = '';
}

// Adiciona a cor cinza ao clicar no item da lista

function changeColor() {
  const li = document.getElementsByClassName('list-item');
  for (let index = 0; index < li.length; index += 1) {
    li[index].addEventListener('click', () => {
      for (let index2 = 0; index2 < li.length; index2 += 1) {
        if (li[index2].classList.contains('selected') === true) {
          li[index2].classList.toggle('selected');
        }
      }
      li[index].classList.toggle('selected');
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
}

window.onload = function page() {
  const buttonAdd = document.querySelector('#criar-tarefa');
  buttonAdd.addEventListener('click', addLi);
  buttonAdd.addEventListener('click', removeValueInput);
};
