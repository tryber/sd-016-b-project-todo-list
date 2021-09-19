function pintaTarefa(event) {
  const eventTarget = event.target;
  const tarefaPintada = document.querySelectorAll('.tarefaAdd');

  for (let i = 0; i < tarefaPintada.length; i += 1) {
    if (tarefaPintada[i].classList.contains('tarefaPintada')) {
      tarefaPintada[i].classList.remove('tarefaPintada');
    }
  }
  eventTarget.classList.add('tarefaPintada');
}
// requisito 7: referência: https://www.w3schools.com/howto/howto_js_todolist.asp;

function riscaTarefa(evento) {
  const tarefaRiscadaOrigem = evento.target;
  if (tarefaRiscadaOrigem.classList.contains('completed') === false) {
    tarefaRiscadaOrigem.classList.add('completed');
  } else {
    tarefaRiscadaOrigem.classList.remove('completed');
  }
}

// enquanto houver elementos filhos do pai lista-tarefas, ao clicar o botão, apagar todos os filhos.

function apagaTudo() {
  const listaTarefas = document.querySelector('#lista-tarefas');
  while (listaTarefas.firstElementChild) {
    listaTarefas.removeChild(listaTarefas.firstElementChild);
  }
}

const apagaTarefasButton = document.querySelector('#apaga-tudo');
apagaTarefasButton.addEventListener('click', apagaTudo);

function apagaSelecionadas() {
  const tarefasRiscadas = document.querySelectorAll('.completed');
  while (tarefasRiscadas.length > 0) {
    tarefasRiscadas[0].parentNode.removeChild(tarefasRiscadas[0]); // é necessário acessar os objetos do acesso qsALL criados, para que as li's possam ser apagadas através de seus nós. Desenvolvido com a ajuda dos colegas Airton Lopes e Luiz Wanderson
  }
}

const apagaSel = document.querySelector('#remover-finalizados');
apagaSel.addEventListener('click', apagaSelecionadas);

const criarTarefa = (evento) => {
  evento.preventDefault(); // previne o comportamento padrão
  const lista = document.querySelector('#lista-tarefas');
  const tarefas = document.querySelector('#texto-tarefa');
  const valor = tarefas.value;
  const addTarefa = document.createElement('li');
  const conteudo = `${valor}`; // pega o valor do javascript
  lista.addEventListener('click', pintaTarefa);
  lista.addEventListener('dblclick', riscaTarefa);
  addTarefa.className = 'tarefaAdd';
  addTarefa.innerHTML = conteudo;

  lista.appendChild(addTarefa);

  tarefas.value = ''; // limpa o valor do input
};

function addTarefaClick() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', criarTarefa);
}
addTarefaClick();

// Requisitos 5 e 6 desenvolvidos com a video aula do curso da Alura : 'Manipule o Dom com  JS';
