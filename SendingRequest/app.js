

let ul = document.querySelector('ul');

let req = new XMLHttpRequest();

req.open('GET' , 'https://pokeapi.co/api/v2/pokemon/1/');

req.send();

req.onload = function(){
    let samachar = JSON.parse(this.response);

    // for(let d of samachar.data){
    //     let li = document.createElement('li');
    //     li.innerHTML = `
    //     <img src = ''>
    //     `
    // }
    console.log(this , 'Done');
}
req.onerror = function(){
    console.log(this , 'error');
}









