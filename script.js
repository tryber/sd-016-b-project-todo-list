// add tarefas
function addTask() {
  const getInput = document.getElementById('texto-tarefa');
  const getButton = document.getElementById('criar-tarefa');

  getButton.addEventListener('click', () => {
    const creatLi = document.createElement('li');
    creatLi.innerHTML = getInput.value;
    const getOl = document.getElementById('lista-tarefas');
    getOl.appendChild(creatLi);
    getInput.value = '';
  });
}
addTask();