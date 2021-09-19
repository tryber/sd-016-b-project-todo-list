//SELECTORS
const todoInput = document.getElementById('texto-tarefa')
const todoButton = document.getElementById('criar-tarefa')
const todoList = document.getElementById('lista-tarefas')
const deleteButton = document.getElementById('apaga-tudo')




//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteAll);
// newTodo.addEventListener('dblclick', pintarDeCinza)



//FUNCTIONS
function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //Criando um ITEM NA LISTA - li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  // Pinta de cinza o item clicado
  newTodo.addEventListener('click', pintarDeCinza)

  function pintarDeCinza(e) {
    const todoItens = document.querySelectorAll('.todo-item')
    todoItens.forEach((todoItem) => {
      todoItem.classList.remove('pintarDeCinza')
    })

    const currentElement = e.target
    currentElement.classList.add('pintarDeCinza')

    // const selectedElement = document.querySelector('.pintarDeCinza')
    // selectedElement.classList.remove('pintarDeCinza')

    // let newTodo = e.target;
    // newTodo.classList.add('pintarDeCinza');
  }

  //Adiciona risco no item clicando duas vezes
  newTodo.addEventListener('dblclick', itemRiscado)



  function itemRiscado() {
    newTodo.classList.toggle('completed')
  }

  //Colocando o "newTodo" dentro da div "todoDiv"
  todoList.appendChild(newTodo);

  //Colocando "todoDiv" dentro de "#LISTA-TAREFAS"
  todoList.appendChild(newTodo);

  // Limpar o Input depois de criar um item
  todoInput.value = '';
}



function deleteAll(e) {
  // const item = e.target;
  //Deletando todos os itens
  todoList.innerHTML = ' '; //Selecionar os "li" que estao sendo criados.
  // todo.remove();
}



