


let promise = new Promise(function(reject , resolve){
    setTimeout(() =>{
        let data = "hi promise";
        resolve(data);
        let error = "dikkat aa gyi";
        reject(error);
    } , 4000);
});

promise.then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
})














