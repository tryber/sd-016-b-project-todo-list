const createTitle = document.createElement('header');
createTitle.innerText = 'Minha Lista de Tarefas';
document.body.appendChild(createTitle);
const createParagraph = document.createElement('p');

createParagraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';
document.body.appendChild(createParagraph);
