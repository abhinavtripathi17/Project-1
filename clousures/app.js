

function counter(){
    let count = 0;

    return{
        getCount : function(){
            return count;
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset : function(){
            count = 0;
        }
    }
}
//console.log(counter.getCount());
let counter1 = counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
counter1.reset();

console.log(counter1.getCount());