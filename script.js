// requisito 8 e 9
// A funcao abaixo risca o item da lista quando o item da lista é clicado duas vezes:
function checkItemList(erasy) {
  const itemcheck = erasy.target; // ao 'escutar' um duplo click...
  if (itemcheck.className === 'completed') { // remove class se ja estiver rabiscado
    itemcheck.removeAttribute('class');
  } else {
    itemcheck.classList.add('completed'); // coloca o atributo class completed
  }
}

// requisito 9
// funcao que adiciona o evento de double click nos elementos da lista:
function eventDoubleClickList() {
  for (let i = 0; i < document.querySelectorAll('li').length; i += 1) {  
    document.querySelectorAll('li')[i].addEventListener('dblclick', checkItemList);
  }
}

// requisito 7
// funcao que muda a cor da li para cinza quando o evento click acontecer:
function ChangeBackGroundColor(newItem) {
  const itemColorGrey = newItem.target; // fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/target
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].style.removeProperty('background-color'); // fonte: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty
  }
  itemColorGrey.style.backgroundColor = 'rgb(128, 128, 128)';
}
// requisito 7
// funcao abaixo serve para ver "escutar" quando a li for clicada e torna a cor cinza:
function eventClickList() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    document.getElementsByTagName('li')[i].addEventListener('click', ChangeBackGroundColor);
  }
}

// requisito 5 e 6
// funcao que insere o elemento li na ol atraves do input pelo usuario:
const toDoList = document.querySelector('#lista-tarefas'); // ol
const createNewItemList = document.getElementById('criar-tarefa'); // button

function insertElementLI() {
  const newItem = document.getElementById('texto-tarefa').value; // valor do input
  const createItem = document.createElement('li'); // criando elemento li
  createItem.innerText = newItem; // coloca conteudo do input no elemento li
  toDoList.appendChild(createItem); // coloca a li dentro do ol como filho //fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild
  const input = document.getElementById('texto-tarefa'); // pega o input
  input.value = ''; // coloca valor vazio no input
  createItem.style.display = 'block'; // colocar as li em lista
  eventClickList(); // chama a funcao para ver o click da lista de li
  eventDoubleClickList(); // chama a funcao para ver dois clicks seguidos em um item da li
}
createNewItemList.addEventListener('click', insertElementLI); // se clicar no botao executa a funcao inserir elemento

// requisito 10
// funcao que limpa a lista de tarefas:
function clearList() {
  const listClear = document.querySelectorAll('li'); // seleciona todas li
  for (let i = 0; i < listClear.length; i += 1) { // loop para pegar cada li[i]
    listClear[i].remove(); // remover li[i]
  }
}
document.getElementById('apaga-tudo').addEventListener('click', clearList); // se clicar no botao limpa toda lista de tarefas

// requisito 11
// funcao que remove os itens finalizados:
function removeFinished() {
  const removeListFinished = document.querySelectorAll('.completed'); // seleciona as li que tem class .completed
  for (let i = 0; i < removeListFinished.length; i += 1) { // loop para pegar cada li[i] com a class completed
    removeListFinished[i].remove(); // remover li[i] com class completed
  }
}
document.getElementById('remover-finalizados').addEventListener('click', removeFinished); // se clicar no botao remove os itens com check (riscados)

// requisito 12
// função que salva a lista de tarefas 
function saveList() {
  //textoSave = document.getElementById('lista-tarefas').innerHTML; //FONTE: https://stackoverflow.com/questions/45525062/save-data-to-localstorage-and-display-it-as-innerhtml
  localStorage.setItem('lista', document.getElementById('lista-tarefas').innerHTML); 
}
 //https://javascript.tutorialink.com/is-it-possible-to-call-local-storage-inside-a-function-and-use-it-in-windows-onload-closed/
window.onload = function () {  //fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/GlobalEventHandlers/onload
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('lista');
};
document.getElementById('salvar-tarefas').addEventListener('click',saveList);
// requisito 13
// função mover item selecionado para cima ou para baixo.
//function moveItem() {
//}
// requisito 14 
// função remove item selecionado
function removeItem() {
  for (let i = 0; i < document.getElementsByTagName('li').length; i += 1) {
    if (document.getElementsByTagName('li')[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      document.getElementsByTagName('li')[i].remove();
  }
  }
}
document.getElementById('remover-selecionado').addEventListener('click', removeItem); 