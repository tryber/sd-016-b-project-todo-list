 

getValueAndSubmit();
deleteTaskList ();
removeFinishedTasks ();
saveItens();    
returnItens();

function getValueAndSubmit(){
    
    let submit = document.getElementById('criar-tarefa');
    let taskList = document.getElementById('lista-tarefas');
    let inputText = document.getElementById('texto-tarefa');
    let itensLista = document.getElementsByTagName('li');
    
    
    submit.addEventListener('click',function(){

        let itens = document.createElement('li');
           
        itens.innerText = inputText.value;
        
        taskList.appendChild(itens);

        inputText.value = '';

        

        for (let index = 0; index < itensLista.length; index++) {
       
            itensLista[index].addEventListener('click',setBGcolor);
            itensLista[index].addEventListener('dblclick',setLineThrough);
            itensLista[index].addEventListener('click',getPosition);
       }

       })
    
}

function setBGcolor(event){
        
        let itensLista = document.getElementsByTagName('li')
        
        let position = Array.from(itensLista).indexOf(event.target);            

        itensLista[position].style.backgroundColor = 'rgb(128,128,128)';
           
        for (let index = 0; index < itensLista.length; index++) {
                
                if (index != position){
                   
                    itensLista[index].style.backgroundColor = '';
                }
                
        }
}   

function setLineThrough (event){

            event.target.classList.toggle('completed');
  
}

function deleteTaskList (){
         let taskList = document.getElementById('lista-tarefas');
         const deleteAll = document.getElementById('apaga-tudo');

        deleteAll.addEventListener('click',function(event){
               
                while (taskList.firstChild){

                    taskList.removeChild(taskList.firstChild);
                }
                
   })

}

function removeFinishedTasks (){

       
       const removeFinished = document.getElementById('remover-finalizados');

       removeFinished.addEventListener('click',function(){
            
            let itensLista = document.querySelectorAll('li');

            for (let index = 0; index < itensLista.length; index++) {
            
                if (itensLista[index].classList.contains('completed') === true){
                    itensLista[index].remove();
                }
            }
       })

}

function getPosition (event){

    let itensLista = document.getElementsByTagName('li')
        
    let position = Array.from(itensLista).indexOf(event.target); 

    return position;
}


function removeSelected (){

    let position = getPosition();
    let itensList = document.querySelectorAll('li');

    let buttonRemoveSelected = document.getElementById('remover-selecionado');

    buttonRemoveSelected.addEventListener('click', function(event){

        itensList[position].remove();

    })
    

}

function saveItens (){

    let saveTasks = document.getElementById('salvar-tarefas');
   
    saveTasks.addEventListener('click',function(){     
        
        let listaItens = document.querySelectorAll('li');
        let cont = 100;
        for (let index = 0; index < listaItens.length; index++) {
            
            let getClass = listaItens[index].className;
            localStorage.setItem(index,listaItens[index].innerText);
            localStorage.setItem(cont,getClass);
            cont++
        }


    })         
}

function returnItens(){
    
    let taskList = document.getElementById('lista-tarefas');
   
    let cont = 100;
   
    for (let index = 0; index < localStorage.length; index++) {

            let texto = localStorage.getItem(index);
            let classe = localStorage.getItem(cont);
    
            let li = document.createElement('li')

            li.innerText = texto;
           
            if (classe){
    
                li.classList.add(classe);
    
            }
            
            cont++;

            if(localStorage.getItem(index)){

                taskList.appendChild(li);
            }
            

       
    }
}