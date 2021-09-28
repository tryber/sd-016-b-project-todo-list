window.onload = function(){
    
    getValueAndSubmit();
    
}


function getValueAndSubmit(){
    
    let submit = document.getElementById('criar-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let inputText = document.getElementById('texto-tarefa');
        
    submit.addEventListener('click',function(){

        let itens = document.createElement('li');
           
        itens.innerText = inputText.value;
        
        taskList.appendChild(itens);

        inputText.value = '';
       
        })
    
}
