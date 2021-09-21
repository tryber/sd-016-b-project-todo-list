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

const addCSS = document.getElementById('lista-tarefas');
addCSS.addEventListener('click', (event) => {
  const lis = document.querySelectorAll('li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = '';
    lis[i].classList.remove('selected');
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selected');
  }
});