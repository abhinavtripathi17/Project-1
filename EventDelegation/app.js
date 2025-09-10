

let section = document.getElementById('container');

section.addEventListener('click' , function(e){
    if(e.target.nodeName === 'FIGURE'){
        console.log(e.target.innerText);
    }
})






