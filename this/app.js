


//regular invocation

// function fun(){
//     console.log(this);
// }
// fun();

//method invocation

// let obj = {
//     num : 5,
//     fun : function (){
//         function x(){
//             console.log(this);
//         }
//         x();
//     }
// }
// obj.fun();

//.call , .apply , .bind()

let obj = {
    num : 2 ,
    fun : function(){
        console.log(this);
    }
}

let obj2 = {
    name : 'Abhinav'
}

let x = obj.fun.bind(obj);
x();


