// requisito 1
const createTitle = document.createElement('header');
createTitle.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(createTitle);
const createParagraph = document.createElement('p');
// requisito 2
createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';
document.body.appendChild(createParagraph);

// requisito 3
const CreateInput = document.createElement('input');
CreateInput.id = 'texto-tarefa';
document.body.appendChild(CreateInput);

// requisito 4
const createOrderedList = document.createElement('ol');
createOrderedList.id = 'lista-tarefas';
document.body.appendChild(createOrderedList);

// requisito 5 e 6
const createButton = document.createElement('button');
createButton.innerText = 'Criar tarefa';
createButton.id = 'criar-tarefa';
document.body.appendChild(createButton);

function addTask() {
  const getInput = document.getElementById('texto-tarefa');
  const getButton = document.getElementById('criar-tarefa');

  getButton.addEventListener('click', function () {
    const createLi = document.createElement('li');
    createLi.innerHTML = getInput.value;
    const getOl = document.getElementById('lista-tarefas');
    getOl.appendChild(createLi);
    getInput.value = '';
  });
}
addTask();

// Requisito 7 e 8

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', function (event) {
    const allLi = document.querySelectorAll('li');
  for (let i = 0; i < allLi.length; i += 1) {
    allLi[i].style.backgroundColor = '';
    allLi[i].classList.remove('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  }
});

// trocar cor de fundo do input
