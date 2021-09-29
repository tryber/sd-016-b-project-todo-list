const addToDoButton = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const inputField = document.getElementById('texto-tarefa');
addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('li')
    paragraph.classList.add('paragStyle');
    paragraph.innerText = inputField.value;
    toDoList.appendChild(paragraph);
    inputField.value = '';
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('oneClick');
    });
    paragraph.addEventListener('dblclick', function(){
        toDoList.removeChild(paragraph);
    });
});