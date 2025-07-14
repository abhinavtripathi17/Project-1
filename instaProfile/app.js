


//Wrong Method

// function step1(){
//     setTimeout(function(){
//         console.log("Take Photo");
//     }, 4000);
// }

// function step2(){
//     setTimeout(function(){
//         console.log("Apply Filters");
//     }, 2000);
// }

// function step3(){
//     setTimeout(function(){
//         console.log("Add Caption");
//     }, 3000);
// }

// function step4(){
//     setTimeout(function(){
//         console.log("Upload Image");
//     }, 2000);
// }

// step1();
// step2();
// step3();
// step4();



//CORRECT METHOD

function step1(fn){
    setTimeout(function(){
        console.log("Take Photo");
        fn();
    }, 4000);
}

function step2(fun){
    setTimeout(function(){
        console.log("Apply Filters");
        fun();
    }, 2000);
}

function step3(funn){
    setTimeout(function(){
        console.log("Add Caption");
        funn();
    }, 3000);
}

function step4(funnn){
    setTimeout(function(){
        console.log("Upload Image");
        funnn();
    }, 2000);
}

step1(function(){
    step2(function(){
        step3(function(){
            step4();
        });
    });
});

