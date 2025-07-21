

let inpEle = document.querySelector('input');
let btnEle = document.querySelector('button');
let listEle = document.querySelector('ul');

btnEle.addEventListener('click' , function(){
    let titleText = inpEle.value;
    let newEle = document.createElement('li');
    newEle.innerText = titleText;
    listEle.appendChild(newEle);
    inpEle.value = '';

    newEle.addEventListener('click' , function(){
        newEle.remove();
    })
})