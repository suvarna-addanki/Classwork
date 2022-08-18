//exercise cat
//give cat atleast 3 properties and 3 methods
//create 2 instances of the class(two cats)
//log both instances to see their properties
//invoke each method from both instances

/*
class Cat {
    constructor(nameParam,soundParam,colorParam){
    this.nameParam = nameParam;
    this.soundParam = soundParam;
    this.colorParam = colorParam;
}
sound(){
    console.log('Meow!')
}
hungry(){
    console.log('cat food please!')
}
bored(){
    console.log('pick me up!')
}
}

const catOne = new Cat('Katy','Meow!','lets go out')
const catTwo = new Cat('Matt','Purr!','wanna sleep now')
 console.log(catOne)
 console.log(catTwo)

 catOne.hungry()
 catTwo.bored()
 */

 //exercise 2 Pirate
 //create 3 properties that are set by the constructor
 //create 3 methods
 //instantiate 2 arrays of 3 pirates, name the arrays after your favorite pirate ships,jollyRoger and blackPearl
 //loop over each arrayand print 3 properties of each pirate
/*
 class Pirate{
    constructor(region,aka,noOfShipsRobbed){
        this.region = region;
        this.aka = aka;
        this.noOfShipsRobbed = noOfShipsRobbed;
    }
    attack(){
        return 'gonna rob u now!'
    }
    warning(){
        return 'Surrender! or I will shoot your boat'
    }
    abc(){
        console.log('hfhfjhd')
    }
    toString(){
        return this.region + ' ' + this.aka + ' says ' + this.warning()
    }
}
const jollyRoger = [new Pirate('Caribbean','Raider', 13), new Pirate('Somalian','Bucaneer','23'), new Pirate('Australian','Robber','32')]
const blackPearl = [new Pirate('Pacific','Looter', 15), new Pirate('Indian','Killer','28'), new Pirate('Gulf','Stealer','44')]

for(i = 0; i < jollyRoger.length; i++){
    console.log(jollyRoger[i].toString());
    jollyRoger[i].attack();
    jollyRoger[i].abc();
}

for(j = 0; j < blackPearl.length;  j++){
    console.log(blackPearl[j].toString());
//    blackPearl[j].warning();
//   blackPearl[j].abc()
}
*/


//exercise 3 create 100 cars using Vehicle class and deliver them in an array called freighter

/*class Car {
     constructor(number){
        this.number = number
     }
    }

    const freighter = []
    for (let i = 0; i < 100; i++){
        freighter.push(new Car(i))
    }

    console.log(freighter)
*/