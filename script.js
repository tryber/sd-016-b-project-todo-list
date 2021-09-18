const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const text = document.getElementById('texto-tarefa');

button.addEventListener('click', function (){
  if(text.value.length > 0){
  let item = document.createElement('li')
  item.innerText = text.value;
  list.appendChild(item);
  text.value = null
  item.addEventListener('click', function(){
  item.style.backgroundColor = 'grey'
  item.classList = 'selected'
  })
  item.addEventListener('dblclick', function(event){
    if(event.target.classList.contains('check')){
      event.target.classList.remove('check')
    } else {
      event.target.classList.add('check')
    }
  })
}
})


