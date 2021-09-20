let elis = [];
/**
 * Adiciona os valores na lista;
 */
function setList(value) {
  const element = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  if (typeof value === 'object') {
    if (Object.prototype.hasOwnProperty.call(value, 'att')) {
      li.setAttribute(value.add, '');
      li.style.background = 'rgb(128, 128, 128)';
    }
    if (Object.prototype.hasOwnProperty.call(value, 'class')) {
      li.classList.add(value.class);
    }
    li.innerHTML = value.value;
  } else {
    li.innerHTML = value;
  }
  element.appendChild(li);
}
/**
 * Adiciona o atributo selected quando o alvo for clicado;
 */
function setSelected(event) {
  const elements = document.getElementById('lista-tarefas').childNodes;
  const { target } = event;
  if (!target.hasAttribute('selected')) {
    for (const value of elements) {
      if (value.tagName == 'LI') {
        value.removeAttribute('selected');
        value.removeAttribute('style');
      }
    }

    /* IF responsável por verificar se o elemento clicado é uma tag LI; */
    if (target.tagName === 'LI' && target.nodeName === 'LI') { // Verifica se o elemento clicado foi uma LI;
      event.target.setAttribute('selected', ''); // Adiciona o atributo selected ao elemento;
      event.target.style.background = 'rgb(128, 128, 128)';
    }
  }
}

/**
 * Adiciona a classe completed quando o elemento for duplamente clicado;
 */
function setCompleted(event) {
  const { target } = event;
  if (target.tagName === 'LI' && target.nodeName === 'LI') {
    if (!target.classList.contains('completed')) {
      target.classList.add('completed');
    } else {
      target.classList.remove('completed');
    }
  }
}

function setUp() {
  const elements = document.getElementById('lista-tarefas').childNodes;
  for (const element of elements) {
    if (element.hasAttribute('selected') && element.previousSibling && element.tagName === 'LI' && element.nodeName === 'LI') {
      element.parentNode.insertBefore(element, element.previousSibling);
      break;
    }
  }
}

function setDown() {
  const elements = document.getElementById('lista-tarefas').childNodes;
  if (document.getElementById('lista-tarefas').hasChildNodes) {
    for (let element of elements) {
      if ((element.nodeName === 'LI' && element.tagName === 'LI') 
          && element.nextSibling && element.hasAttribute('selected')) {
        element.parentNode.insertBefore(element.nextSibling, element);
        break;
      }
    }
  }
}

/**
 * Remove o elemento selecionado da lista;
 */
function removeElement() {
  const elements = document.getElementById('lista-tarefas').childNodes;
  for (const element of elements) {
    if (element.tagName === 'LI' && element.hasAttribute('selected')) {
      element.remove();
    }
  }
}

function clearAllTaskCompleted() {
  const main = document.getElementById('lista-tarefas');
  for (let i = (main.childNodes.length - 1); i >= 0; i -= 1) {
    if (main.childNodes[i].tagName === 'LI' && main.childNodes[i].nodeName === 'LI'
        && main.childNodes[i].classList.contains('completed')) {
      main.childNodes[i].remove();
    }
  }
}

function clearAllTaskList() {
  const main = document.getElementById('lista-tarefas');
  for (let i = (main.childNodes.length - 1); i >= 0; i -= 1) {
    if (main.childNodes[i].tagName === 'LI' && main.childNodes[i].nodeName === 'LI') {
      main.childNodes[i].remove();
    }
  }
}

function saveTaskList() {
  const main = document.getElementById('lista-tarefas');
  if (main.hasChildNodes) {
    elis = [];
    for (const element of main.childNodes) {
      if (element.nodeName === 'LI' && element.tagName === 'LI') {
        if (element.hasAttribute('selected') && element.classList.contains('completed')) {
          elis.push({ value: element.innerHTML, att: 'selected', class: 'completed' });
        } else if (element.hasAttribute('selected')) {
          elis.push({ value: element.innerHTML, att: 'selected' });
        } else if (element.classList.contains('completed')) {
          elis.push({ value: element.innerHTML, class: 'completed' });
        } else {
          elis.push(element.innerHTML);
        }
      }
    }
    localStorage.setItem('list-task', JSON.stringify(elis));
    if (localStorage.hasOwnProperty('list-task')) {
      alert('salvo com sucesso');
    }
  }
}

/**
 * Adiciona o valor do INPUT na lista;
 */
function createTask() {
  const text = document.getElementById('texto-tarefa');
  console.log('here');
  if (text.value !== '' && text.value !== ' ') {
    setList(text.value);
    text.value = '';
  }
}

/**
 * Executa funções assim que o DOM for carregado;
 */
window.onload = function () {
  if (localStorage.hasOwnProperty('list-task')) {
    elis = JSON.parse(localStorage.getItem('list-task'));
    for (const value of elis) {
      setList(value);
    }
  }
   /** Adiciona o valor do INPUT na lista; */
  document.getElementById('criar-tarefa').addEventListener('click', createTask, false);
  /** Adiciona o atributo selected quando o alvo for clicado; */
  document.getElementById('lista-tarefas').addEventListener('click', setSelected);
  /** Adiciona a classe completed quando o elemento for duplamente clicado; */
  document.getElementById('lista-tarefas').addEventListener('dblclick', setCompleted);
  /** Remove o elemento selecionado da lista; */
  document.getElementById('remover-selecionado').addEventListener('click', removeElement);
  /** Troca o elemento selecionado de lugar com o elemento antecesso; */
  document.getElementById('mover-cima').addEventListener('click', setUp);
  /** Troca o elemento selecionado de lugar com o elemento seguinte; */
  document.getElementById('mover-baixo').addEventListener('click', setDown);
  /** Prototipo de Função; Remove todos os elementos da lista; */
  document.getElementById('apaga-tudo').addEventListener('click', clearAllTaskList);
  /** Remove todos os elementos atribuidos como finalizado da lista; */
  document.getElementById('remover-finalizados').addEventListener('click', clearAllTaskCompleted);
  /** Salva a lista de tarefas; */
  document.getElementById('salvar-tarefas').addEventListener('click', saveTaskList);
};
