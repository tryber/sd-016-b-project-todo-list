let tarefa = document.getElementById("texto-tarefa");
let botao = document.getElementById("criar-tarefa");
let salvando = [];
let contador = 0;

botao.onclick = function(){
let criarLista = tarefa.value;
let ordenada = document.getElementById("lista-tarefas");
let lista = document.createElement("li");
lista.setAttribute("id",contador);
lista.setAttribute("class","list");
contador+=1;
lista.onclick =new Function("selecionadora(this)")
lista.ondblclick = new Function("DBclick(this)")
lista.innerText = criarLista;
salvando.push(criarLista)
ordenada.append(lista);
tarefa.value = ""; 

}
function selecionadora(a){
  let adicionarClasse = document.getElementsByClassName("list")
  for(let i=0; i<salvando.length; i+=1){
    adicionarClasse[i].style = "background:rgb(255, 255, 255)";
  if (document.getElementById(a.id).style != null) {
    document.getElementById(a.id).style = "background:rgb(128, 128, 128)";
  }
    else{
      document.getElementById(a.id).style = "background:rgb(255, 255, 255)"
    }
  }
}
  selecionadora()
function DBclick(b){
  let incompleto = document.getElementsByClassName("list")
  for(let i=0; o<salvando.length; i+=1){
    incompleto[i].classList.add("incompleto")
  if (b.target.classList.contains('completed') === true) {
   b.target.classList.remove('completed');
  } else {
    b.target.classList.add('completed');
  }
}
DBclick()