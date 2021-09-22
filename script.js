window.onload = function letsBegin(){
  // requisito 5-6  
  const butt = document.getElementById('criar-tarefa');
  const list = document.querySelector('#lista-tarefas');
  
  function createLi() {
    let li = document.createElement('li');
    li.classList.add('listItem');
    li.innerText = document.getElementById('texto-tarefa').value;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  }
  
  butt.addEventListener('click', createLi);
  
  //REQUISITO 7-8
  const listItem = document.getElementsByClassName('listItem');
  list.addEventListener('click', addBckColor)
  
  function addBckColor(event){
      for (let index = 0; index < listItem.length; index++) {
        listItem[index].classList.remove('bckGrey')
        if (event.target.classList.contains('listItem')) {
          event.target.classList.add('bckGrey');
      }
    }
  }

//requisito 9
  list.addEventListener('dblclick', completeTask);
  function completeTask(event) {
    if (listItem.length !==  0) {
      if (event.target.classList.contains('completed')){
        event.target.classList.remove('completed');
      }else {
      event.target.classList.add('completed');
      }
    }
  }
}
