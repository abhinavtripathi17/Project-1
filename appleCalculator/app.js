


let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click' , function(event){
       let buttonText =  event.target.innerText;
       if(buttonText === 'C'){
            input.value = '';
        }
       else if(buttonText === '='){
            try{
                input.value = eval(input.value);
            }
            catch(e){
                input.value = 'ERROR';
            }
        }
       else{
           input.value += buttonText;
        }
    })
}














