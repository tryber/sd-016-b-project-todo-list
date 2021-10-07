getValueAndSubmit();

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