
//InLine way
// function doSomething(){
//     console.log("OnClick chal gaya");
// }


//2nd way
// let btn = document.querySelector("button");
// btn.onclick = function(){
//     console.log("Doosra Tareeka");
// }



//addEventListner
let btn = document.querySelector("button");
let bdy = document.querySelector("body");

function one(){
    bdy.style.backgroundColor = 'blue';
}

btn.addEventListener('dblclick' , one)