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
  
//REQUISITO 7

  list.addEventListener('click', liColorChange)

  const listItem = document.getElementsByClassName('listItem')
  function liColorChange() {
    for (i = 0; i< listItem.length; i += 1) {
      listItem[i].classList.remove('bckGrey')
    }
  }
  list.addEventListener('click', liColorChange2)
  function liColorChange2(event) {
    event.target.classList.add('bckGrey')
  }

}


  
