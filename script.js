//usado em selectItem
firsTime = true;
//usado em itemButton e tarefaCreator
let listIl = document.querySelector('#lista-tarefas');

//seleciona individualmente cada item
function selectItem(event) {
  if(firsTime == false){
    document.querySelector('.selected').classList.remove('selected');
  }
  firsTime = false
  event.target.classList.add('selected');
}

//função para riscar ou remover o risco do item selecionado
function riscItem(event) {
  let riscCheck = false;
  for(let index = 0; index < event.target.classList.length; index +=1){
    if(event.target.classList[index] == 'completed'){
      riscCheck = true;
    }
  }
  if(riscCheck == true){
    event.target.classList.remove('completed');
  }else {
    event.target.classList.add('completed');
  }
}

//caracteristicas de botao necessario ao item da lista
function itemButton(){
  listIl.lastChild.addEventListener('click', selectItem);
  listIl.lastChild.addEventListener('dblclick', riscItem);
}

//adiciona uma nova tarefa e limpa campo de input
function tarefaCreator () {
  let entrada = document.querySelector('#texto-tarefa').value;
  if(entrada == ""){
    alert("Adicione um texto para o item");
  }else{
    let list = document.createElement("li");
    listIl.appendChild(list);
    itemButton();
    list.innerText = entrada;
    document.querySelector('#texto-tarefa').value = "";
  }
}

//apaga toda lista
function clearAll() {
  let elemento = document.getElementById("lista-tarefas");
  while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
  }
  console.log('apaguei')
}

//remove o item marcado
function removeThis() {
  
}

window.onload = function() {
  //cria os botoes especificos
  function CreatAllButton () {
    //botao para adicionar item
    let buttonAdd = document.querySelector('#criar-tarefa');
    buttonAdd.addEventListener('click', tarefaCreator);
    //cria o botao para limpar o board
    let buttonClean = document.querySelector('#apaga-tudo');
    buttonClean.addEventListener('click', clearAll);
    //cria botao para remover item marcado
    let buttonRemove = document.querySelector('#remover-finalizados');
    buttonRemove.addEventListener('click', removeThis);
  }
CreatAllButton();
}