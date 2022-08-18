
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

/*
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
*/

//ex3 bank
class BankAccount {
    constructor(accName, balance) {
      this.accName = accName;
      this.balance = balance;
      this.acctNum = Math.floor(Math.random() * 1000)
    }
    deposit(depositedAmount) {
        this.balance += depositedAmount
        console.log('current balance after depositing ' + depositedAmount + " is: " + this.balance)
    }
    withdraw(withdrawnAmount) {
        this.balance -= withdrawnAmount
        console.log('current balance after withdrawing ' + withdrawnAmount + " is: " + this.balance)
    }
}

class CheckingAccount extends BankAccount {
    constructor(accName, balance, overdraftEnabled = true) {
      super(accName, balance) // calls the constructor from parent class (Bank Account)
      this.overdraftEnabled = overdraftEnabled;
    }
    withdraw(amount){
        if(amount > this.balance)
        {
            if(this.overdraftEnabled)
            {
                let overDrafrFee= 20;
                this.balance = this.balance - (amount + overDrafrFee)
                console.log('this transaction overdrafts your balance')
            }else {
                console.log('you cannot withdraw more than you have')
            }
        }else {
            this.balance = this.balance - amount
            console.log('current balance after withdrawing' + amount + 'is: ' + this.balance)
        }
    }
}
class SavingsAccount extends BankAccount {
    withdraw() {
      console.log('you cannot withdraw from this savings account :')
    }
}


const lucas = new BankAccount('Lucas', 1000000)
const usman = new CheckingAccount('Usman', 1000000)
const stephin = new SavingsAccount('Stephin', 5)

 console.log(lucas)
 console.log(usman)
 console.log(stephin)

 lucas.withdraw(1000)
usman.withdraw(2000000)
stephin.withdraw(4)







  




