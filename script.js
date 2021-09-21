window.onload = function(){
let botaoApag = document.getElementById("apaga-tudo")
let ordenada = document.getElementById("lista-tarefas");
let tarefa = document.getElementById("texto-tarefa");
let botao = document.getElementById("criar-tarefa");
let salvando = [];
let contador = 0;

botao.onclick = function(){
let criarLista = tarefa.value;
let lista = document.createElement("li");
lista.setAttribute("id",contador);
lista.setAttribute("class","list");
contador+=1;
lista.addEventListener('click',selecionadora)
lista.innerText = criarLista;
salvando.push(criarLista)
ordenada.append(lista);
tarefa.value = ""; 

}
function selecionadora(event){
  let adicionarClasse = document.getElementsByClassName("list")
  for(let i=0; i<salvando.length; i+=1){
    adicionarClasse[i].style = "background:rgb(255, 255, 255)";
  if (event.target.style != null) {
    event.target.style = "background:rgb(128, 128, 128)";
  }
    else{
      event.target.style = "background:rgb(255, 255, 255)"
    }
  }
}
selecionadora()
  botaoApag.addEventListener("click",Clean)
function Clean(){
    for (let index = 0; index < ordenada.children.length; index = 0) {
      ordenada.children[index].remove();
    }
}

}
