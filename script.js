const body = document.querySelector('body');
let main;
let input;
let ol;
let li;

// função que cria o elemento com a tag header como filha de body
function mkHeader() {
  const createHeader = document.createElement('header');
  createHeader.innerText = 'Minha Lista de Tarefas';
  body.appendChild(createHeader);
}

// função que cria o elemento com a tag main como filha de body
function mkMain() {
  const createMain = document.createElement('main');
  body.appendChild(createMain);
}

// função que cria o elemento com a tag p como filha de header, atribuindo id e conteúdo
function mkParagraph() {
  const header = document.querySelector('header');
  const createParagraph = document.createElement('p');
  createParagraph.id = 'funcionamento';
  createParagraph.innerHTML = 'Clique duas vezes em um item para marcá-lo como completo';
  header.appendChild(createParagraph);
}

// função que cria o elemento com a tag input como filha da main, atribuindo id e type
// essa função também torna global o valor de main e input
function mkInput() {
  const createInput = document.createElement('input');
  const toMain = document.querySelector('main'); main = toMain;
  createInput.id = 'texto-tarefa';
  createInput.type = 'text';
  main.appendChild(createInput);
  const toInput = document.querySelector('input'); input = toInput;
}

/* função que cria o elemento com a tag ol como filha de main, atribuindo id e tornando-a global
na variável "ol" */
function mkList() {
  const createOl = document.createElement('ol');
  main.appendChild(createOl);
  createOl.id = 'lista-tarefas';
  const toOl = document.querySelector('ol'); ol = toOl;
  ol.style.display = 'flex'
  ol.style.flexDirection = 'column'
}

// função que cria o elemento com a tag li como filha de ol, atribuindo id e classList
function mkNewListItem(inputContent) {
  const createLI = document.createElement('li');
  createLI.innerHTML = inputContent;
  createLI.classList = 'toDo';
  ol.appendChild(createLI);
  const toLi = document.getElementsByTagName('li'); li = toLi;
}

/* função que cria o elemento com a tag button para criar tarefas como filho de main, atribuindo
id e conteúdo html além de adicionar um escutador de eventos que interage com o input.value */
function mkButton() {
  const createButton = document.createElement('button');
  createButton.id = 'criar-tarefa';
  createButton.innerHTML = 'Criar Tarefa';
  main.insertBefore(createButton, main.children[1]);
  createButton.addEventListener('click', function tkRstInput() {
    mkNewListItem(input.value);
    input.value = '';
  });
}

/* função que, com um escutador de eventos em ol baseado em um click, verifica se há um elemento
com classe selected, e caso não, ele há atribui ao target do evento; caso sim, ele remove a classe
e atribui ao e.target */
function mkEvidence() {
  ol.addEventListener('click', function bgColor(e) {
    const selected = e.target;
    const oldSelected = document.querySelector('.selected');
    if (oldSelected !== null) {
      oldSelected.classList.remove('selected');
      oldSelected.style.backgroundColor = 'white';
    }
    selected.classList.add('selected');
    selected.style.backgroundColor = 'grey';
  });
}

/* função que adiciona um escutador de eventos em ol esperando um duplo click, quando houver, ele
verifica se o target contain a classe toDo, ativando-a ou desativando-a */
function mkDo() {
  ol.addEventListener('dblclick', function markUp(e) {
    const completed = e.target.classList;
    if (completed.contains('toDo')) {
      completed.toggle('completed');
    }
  });
}

/* função que cria um botão como filho da main afim de apagar tudo da lista com um click, é atribuido a ele um id e um
texto, além de um escutador para o mesmo, que zera todo o conteúdo html de ol */
function mkDelAll() {
  const createButton = document.createElement('button');
  createButton.id = 'apaga-tudo';
  createButton.innerText = 'Limpar Lista';
  main.appendChild(createButton);
  createButton.addEventListener('click', function delToDoList() {
    ol.innerHTML = '';
  });
}

/* função que cria um botão como filho da main, com id e texto, afim de apagar todos os elementos com classe completed da lista */
function mkDelDones() {
  const createDoneButton = document.createElement('button');
  createDoneButton.id = 'remover-finalizados';
  createDoneButton.innerText = 'Limpar Finalizados';
  main.appendChild(createDoneButton);
  createDoneButton.addEventListener('click', function delDones() {
    const getDones = document.querySelectorAll('.completed');
    for (let i = 0; i < getDones.length; i += 1) {
      document.querySelector('.completed').remove();
    }
  });
}

function mkSaver() {
  const createSaveButton = document.createElement('button');
  createSaveButton.id = 'salvar-tarefas';
  createSaveButton.innerText = 'Salvar Tarefas';
  main.appendChild(createSaveButton);
  createSaveButton.addEventListener('click', function saver() {
    localStorage.clear()
    for (let index = 0; index < li.length; index += 1) {
      const liContent = li[index].innerHTML;
      localStorage.setItem(`saved${[index]}`, `${liContent}`)
    }
  });
}

function getSaves() {
  const values = Object.values(localStorage);
  for (let index = 0; index < values.length; index += 1) {
    const lis = document.createElement('li');
    lis.innerHTML = values[index];
    lis.classList += 'toDo'
    ol.appendChild(lis);
  }
}

const downAndUp = () => {
  const toDown = document.createElement('button');
  toDown.innerText = 'Descer'
  toDown.id = 'mover-baixo'
  const toUp = document.createElement('button');
  toUp.innerText = 'Subir'
  toUp.id = 'mover-cima'
  main.appendChild(toDown)
  main.appendChild(toUp)
}

const moveLI = () => {
  let down = document.getElementById('mover-baixo')
  let up = document.getElementById('mover-cima')
  const selectedLi = querySelector('.selected')
  down.addEventListener('click', () => {
    
  })
}

window.onload = () => {
  mkHeader();
  mkMain();
  mkParagraph();
  mkInput();
  mkList();
  mkButton();
  mkEvidence();
  mkDo();
  mkDelAll();
  mkDelDones();
  mkSaver();
  getSaves();
  downAndUp();
};
