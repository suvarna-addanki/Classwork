
//static methods and properties
//There is only one governor in the state.add static methods and properties you would expect a governor to have
//log the properties and test the methods(dont instantiate)
/*
class Governor{
    
    static inChargeOfExBranch = "true"
    static takeAction(){
        return " I will be strict!"

    }
}
console.log(Governor.inChargeOfExBranch);
console.log(Governor.takeAction());
*/


//ex 2
//think of 3 properties all people share,set them with the constructor
//think of 3 methods all people share
//create a postalWorker class that inherits from person,add some methods
//create a chef class that inherits from person,add some methods
//create 2 postalworkers and 2 chefs log them and test all their methods


class Person{
    constructor(name,age,job){
        this.name = name;
        this.age = age;
        this.job =job;
    }
    eat(){
        console.log('time to eat')
    }
    sleep(){
        console.log('time to sleep')
    }
    walk(){
        console.log('I can walk')
        
    }
}
class PostalWorker extends Person{
    deliverMail(){
        console.log( 'I will deliver mail')
    }
    stopAtMailBox(){
        console.log( 'Frequent stops')
    }
}
class Chef extends Person{
    cook(){
        console.log( 'I cook delicious dishes')
    }
    worksAtRestaurant(){
        console.log ('I work at Chipotle ')
    }
    toString() {
        return 'My name is ' + this.name + ' and I am a ' + this.age +
        ' year old ' + this.job;
    }
}
const PostalWorker1 = new PostalWorker('John','35','Postaldepartment')
const PostalWorker2 = new PostalWorker('David','42','Postaldepartment')

const chef1 = new Chef('Natasha','53','Chef')
const chef2 = new Chef('Joe','61','Chef')

console.log(PostalWorker1)
console.log(PostalWorker2)
console.log()

console.log(chef1.toString()); // parent class method
chef2.cook(); // chef class method
chef1.walk(); // parent class method

console.log();
console.log(chef2.toString()); // parent class method
chef2.worksAtRestaurant(); // chef class method
chef1.eat(); // parent class method

console.log();
console.log(PostalWorker1.toString()); // parent class method
PostalWorker1.deliverMail(); // postal worker class method 
PostalWorker1.eat(); // parent class method

console.log();
console.log(PostalWorker2.toString()); // parent class method
PostalWorker2.stopAtMailBox(); // postal worker class method 




