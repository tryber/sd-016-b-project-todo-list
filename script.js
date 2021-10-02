window.onload = function () {
    
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
       
        setBGcolor ();

        })
    
}

function setBGcolor (){

    let li = document.getElementsByTagName('li');
   

    for (let index = 0; index < li.length; index++) {
        
        li[index].addEventListener('click',function(event){

            let position = Array.from(li).indexOf(event.target);
            
            li[position].style.backgroundColor = 'rgb(128,128,128)';
           
            for (let index = 0; index < li.length; index++) {
                
                if (index != position){
                   
                    li[index].style.backgroundColor = '';
                }
                
            }
        })
        
    }

}