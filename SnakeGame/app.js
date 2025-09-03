
let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');

let cellSize = 50;
let height = 600;
let width = 1000;
let snakeCells = [[50,0]];

let direction = 'right';
let gameOver = 'false';

let score = 0;

let foodCells = generateFood();

let intervalId = setInterval(function(){
    update();
    draw();
}, 300);


//key functionality
document.addEventListener('keydown' , function(event){
    if(event.key === 'ArrowDown'){
        direction = 'down';
    }
    else if(event.key === 'ArrowUp'){
        direction = 'up'
    }
    else if(event.key === 'ArrowLeft'){
        direction = 'left';
    }
    else direction = 'right';
})

function update(){
    //update coordinates
    let headX = snakeCells[snakeCells.length - 1][0];
    let headY = snakeCells[snakeCells.length - 1][1];

    let newHeadX;
    let newHeadY;
    if(direction === 'right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === width || khudkokhagaya(newHeadX , newHeadY)) gameOver = 'true';
    }
    else if(direction === 'left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX < 0 || khudkokhagaya(newHeadX , newHeadY)) gameOver = 'true';
    }
    else if(direction === 'up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0 || khudkokhagaya(newHeadX , newHeadY)) gameOver = 'true';
    }
    else{
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === height || khudkokhagaya(newHeadX , newHeadY)) gameOver = 'true';
    }

    snakeCells.push([newHeadX , newHeadY]);

    if(newHeadX === foodCells[0] && newHeadY === foodCells[1]){
        foodCells = generateFood();
        score++;
    }
    else{
    snakeCells.shift();
    }

}

function draw(){
    //out of canvas
    if(gameOver === 'true'){
        clearInterval(intervalId);
        ctx.fillStyle = 'cyan';
        ctx.font = '50px monospace'
        ctx.fillText('KHEL KHATAM !!' , 330 , 300);
        
        return;
    }
    //draw snake
    ctx.clearRect(0 , 0 , width , height);
    for(let cell of snakeCells){
        ctx.fillStyle = 'red';
        ctx.fillRect(cell[0] , cell[1] , cellSize , cellSize);
        ctx.strokeStyle = 'orange';
        ctx.strokeRect(cell[0] , cell[1] , cellSize , cellSize);
    }

    //draw food
    ctx.fillStyle = 'green';
    ctx.fillRect(foodCells[0] , foodCells[1] , cellSize , cellSize);
    
    //draw score
    ctx.fillText(`Score : ${score}`, 25 , 30);
    ctx.font = '30px monospace'
}

function generateFood(){
    return[
        Math.round(Math.random() * (width - cellSize)/cellSize)*cellSize,
        Math.round(Math.random() * (height - cellSize)/cellSize)*cellSize
    ]
}

//function to check -> khudko toh kha gaya?
function khudkokhagaya(newHeadX , newHeadY){
    for(let item of snakeCells){
        if(item[0] === newHeadX && item[1] === newHeadY){
            return true;
        }
    }
    return false;
}















