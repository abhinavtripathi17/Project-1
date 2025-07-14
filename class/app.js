

// function Person(fname , lname , mail){
//     this.firstName = fname;
//     this.lastName = lname
//     this.email = mail;
// }

// Person.prototype.printName = function(){
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
// }
// Person.prototype.getName = function(){
//     return (`${this.firstName} ${this.lastName}`);
// }

// let person1 = new Person('Abhi' , 'Tripathi' ,'abhinav@gmail.com');
// console.log(person1);
// console.log(person1.email);
// console.log(person1.printName());
// console.log(person1.getName());


//class syntax

class Person{
    constructor(fname , lname , mail){
        this.firstName = fname;
        this.lastName = lname
        this.email = mail;
    }
}

let person2 = new Person('MS' ,'Dhoni' , 'msdhoni@gmail.com');
console.log(person2);