const createTaskFunction = document.querySelector('#criar-tarefa');
const listTask = document.querySelector('#lista-tarefas');
const taskText = document.querySelector('#texto-tarefa');
let clickSelected = '';

// Limpa o input após ser preenchido

function inputClean() {
  taskText.value = '';
}

// Cria o evento do botão para buscar a tarefa do input ao clicar com o mouse

createTaskFunction.addEventListener('click', () => {
  const task = taskText.value;
  if (task === '') {
    alert('Não há nenhuma tarefa a ser criada!!');
  } else {
    const createTask = document.createElement('li');
    createTask.innerText = task;
    listTask.appendChild(createTask);
    inputClean();
  }
});

// Cria o evento do botão para buscar a tarefa do input ao apertar o enter
// Referência: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_trigger_button_enter

taskText.addEventListener('keyup', (event) => {
  const task = taskText.value;
  if (task === '') {
    alert('Não há nenhuma tarefa a ser criada!!');
  } else if (event.keyCode === 13) {
    const createTask = document.createElement('li');
    createTask.innerText = task;
    listTask.appendChild(createTask);
    inputClean();
  }
});

// Após o click analisa se elemento contém ou não o id 'selected' e o exclue se houver. Cria o evento na variável e coloca o id selected no item da lista selecionado

function clickTask() {
  listTask.addEventListener('click', (event) => {
    const elementList = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < elementList.length; index += 1) {
      if (elementList[index].id === 'selected' || elementList[index].id === '') {
        elementList[index].id = '';
      }
    }
    clickSelected = event.target;
    clickSelected.id = 'selected';
  });
}

clickTask();

// Ao ser dado o dblclick, a função avalia se a classe do elemento está vazia, e se estiver seta a classe nela e o item é taxado. Se estiver com classe (no caso da segundo dblclick), a classe e o tachado é removido

function doubleClickTask() {
  listTask.addEventListener('dblclick', (event) => {
    if (clickSelected.className === '') {
      clickSelected = event.target;
      clickSelected.id = '';
      clickSelected.className = 'completed';
    } else if (clickSelected.className === 'completed') {
      clickSelected = event.target;
      clickSelected.id = '';
      clickSelected.className = '';
    }
  });
}

doubleClickTask();

function deleteListItem(params) {
  
}