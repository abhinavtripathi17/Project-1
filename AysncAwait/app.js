


async function some(){
    await new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("2 sec ho gye");
            resolve();
        } , 2000)
        
    })

    await new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log("3 sec ho gye");
            resolve();
        } , 3000)
        
    })

    console.log("dono kaam ho gaye");
}
some();






