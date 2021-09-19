const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

button.addEventListener('click', adicionaTarefa) 

function adicionaTarefa () {
  if(text.value.length > 0){
  const newItem = document.createElement('li')
  newItem.addEventListener('click', paint)

  newItem.innerText = text.value
  newItem.classList = ('selected')
  list.appendChild(newItem)
  text.value = null   
} else {
  alert('Caixa de Tarefas Vazia')
}
}


function paint(event) {
  let list = document.getElementsByClassName('selected')
  for (let index = 0; index < list.length; index += 1) {
      if (list[index].style.backgroundColor = 'grey') {
          list[index].style.backgroundColor = 'white';
      }
  }
  event.target.style.backgroundColor = 'grey'
  }

list.addEventListener('dblclick', feature);

function feature(event) {
  if (event.target.classList.contains ('completed')){
      event.target.classList.remove ('completed')
  } else {
      event.target.classList.add ('completed')
  }
}

const clear = document.getElementById('apaga-tudo');
clear.addEventListener('click', clean);

function clean (){
  list.innerHTML = null;
}

const remove = document.getElementById('remover-finalizados');
const finalizados = document.getElementsByClassName('completed')

remove.addEventListener('click', taskFinish);

function taskFinish (){
  for(let i= 0; i < finalizados.length; i+=1)
  list.removeChild(finalizados[index])
}
