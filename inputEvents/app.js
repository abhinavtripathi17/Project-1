
//events

// let inpEle = document.querySelector('input');

// function funn(event){
//     console.log(event.target.value);
//     // console.log('kaam ho gaya');
// }

// inpEle.addEventListener('input' , funn);



//-----------------------------------------------------------------------

//task -> what so ever is input , it shown in h2 tag

let inpEle = document.querySelector('input');
let head2 = document.querySelector('h2');

function fun(e){
    head2.innerText = e.target.value;
}

inpEle.addEventListener('input' , fun);









