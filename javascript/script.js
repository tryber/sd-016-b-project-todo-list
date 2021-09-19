let elis = [];
/**
 * Adiciona os valores na lista;
 */
function setList(value) {
  const element = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  
  if (typeof value === 'object') {
    if (value.hasOwnProperty('att')) {
      li.setAttribute(value.add, '');
      li.style.background = 'rgb(128, 128, 128)';
    }
    if (value.hasOwnProperty('class')) {
      li.classList.add(value.class);
    }
    li.innerHTML = value.value;
  } else {
    li.innerHTML = value;
  }
  element.appendChild(li);
}

/**
 * Executa funções assim que o DOM for carregado;
 */
window.onload = () => {
  if (localStorage.hasOwnProperty('list-task')) {
    elis = JSON.parse(localStorage.getItem('list-task'));
    for (const value of elis) {
      setList(value);
    }
  }

  /**
   * Adiciona o valor do INPUT na lista;
   */
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const text = document.getElementById('texto-tarefa');
    if (text.value !== '' && text.value !== ' ') {
      setList(text.value);
      text.value = '';
    }
  });

  /**
   * Adiciona o atributo selected quando o alvo for clicado;
   */
  document.getElementById('lista-tarefas').addEventListener('click', (event) => {
    /* Pega todos os elementos da lista; */
    const elements = document.getElementById('lista-tarefas').childNodes;
    /* Delegação de eventos; */
    const { target } = event;
    /* Verifica se o elemento ja possúi o atributo selected; */
    if (!target.hasAttribute('selected')) {
      /* Laço responsável por remover os atributos selected de todos os elementos da lista; */
      for (const value of elements) { // Percorre todos os elementos;
        if (value.tagName == 'LI') { // Verifica se o elemento é do tipo LI;
          value.removeAttribute('selected'); // Remove o atributo selected do elemento;
          value.removeAttribute('style');
        }
      }

      /* IF responsável por verificar se o elemento clicado é uma tag LI; */
      if (target.tagName == 'LI' && target.nodeName == 'LI') { // Verifica se o elemento clicado foi uma LI;
        event.target.setAttribute('selected', ''); // Adiciona o atributo selected ao elemento;
        event.target.style.background = 'rgb(128, 128, 128)';
      }
    }
  });

  /**
   * Adiciona a classe completed quando o elemento for duplamente clicado;
   */
  document.getElementById('lista-tarefas').addEventListener('dblclick', (event) => {
    const { target } = event;
    if (target.tagName == 'LI' && target.nodeName == 'LI') {
      if (!target.classList.contains('completed')) {
        target.classList.add('completed');
      } else {
        target.classList.remove('completed');
      }
    }
  });

  /**
   * Remove o elemento selecionado da lista;
   */
  document.getElementById('remover-selecionado').addEventListener('click', () => {
    /* Pega todos os elementos da lista; */
    const elements = document.getElementById('lista-tarefas').childNodes;
    for (const element of elements) {
      if (element.tagName === 'LI' && element.hasAttribute('selected')) {
        element.remove();
      }
    }
  });

  document.getElementById('mover-cima').addEventListener('click', () => {
    const elements = document.getElementById('lista-tarefas').childNodes;
    for (const element of elements) {
      if (element.hasAttribute('selected') && element.previousSibling && element.tagName === 'LI' && element.nodeName == 'LI') {
        element.parentNode.insertBefore(element, element.previousSibling);
        break;
      }
    }
  });

  document.getElementById('mover-baixo').addEventListener('click', () => {
    const elements = document.getElementById('lista-tarefas').childNodes;
    if (document.getElementById('lista-tarefas').hasChildNodes) {
      for (element of elements) {
        if ((element.nodeName == 'LI' && element.tagName === 'LI') && element.nextSibling && element.hasAttribute('selected')) {
          element.parentNode.insertBefore(element.nextSibling, element);
          break;
        }
      }
    }
  });

  /** Prototipo de Função; Remove todos os elementos da lista; */
  document.getElementById('apaga-tudo').addEventListener('click', () => {
    const main = document.getElementById('lista-tarefas');
    for (let i = (main.childNodes.length - 1); i >= 0; i--) {
      if (main.childNodes[i].tagName == 'LI' && main.childNodes[i].nodeName == 'LI') {
        main.childNodes[i].remove();
      }
    }
  });

  document.getElementById('remover-finalizados').addEventListener('click', () => {
    const main = document.getElementById('lista-tarefas');
    for (let i = (main.childNodes.length - 1); i >= 0; i--) {
      if (main.childNodes[i].tagName == 'LI' && main.childNodes[i].nodeName == 'LI' && main.childNodes[i].classList.contains('completed')) {
        main.childNodes[i].remove();
      }
    }
  });

  document.getElementById('salvar-tarefas').addEventListener('click', () => {
    const main = document.getElementById('lista-tarefas');
    if (main.hasChildNodes) {
      elis = [];
      for (const element of main.childNodes) {
        if (element.nodeName == 'LI' && element.tagName === 'LI') {
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
  });
};
