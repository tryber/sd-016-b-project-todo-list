let addToDoButton = document.getElementById('criar-tarefa');
let toDoList = document.getElementById('lista-tarefas');
let inputField = document.getElementById('texto-tarefa');

addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p')
    //paragraph.classList.add('') // ADICIONAR ESSA CLASSE QUANDO FOR ESTILIZAR O PROJETO.
    paragraph.innerText = inputField.value;
    toDoList.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('oneClick');
    })
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    })
})