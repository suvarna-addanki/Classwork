
//classes are used to create objects
//we can avoid hard coding
//can be used to DRY coding
//classes/constructors provide easy way to create dynamic objects
//encapsulation means bundling up together everything that has to do with that class
//classes are blueprint for objects
//syntax always make the first letter capital(as V in Vehicle)
//instance : an obj created by a class
//instantiate: we instantiate class to create an obj
//instantiation: the process of creating an obj

class Vehicle {
  constructor(vinParam, makeParam,modelParam){
    this.vin = vinParam;
    this.make = makeParam;
    this.model = modelParam
    console.log('creating a new instance of Vehicle')
  }

  goVroom(){
    console.log('VRoom!')

}
start(){
    this.running = true;
    console.log('running')
}
stop(){
    this.running = false;
    console.log('stopped!')
}
}

const toyota = new Vehicle('x123y','boeing','Rav4') //toyota is instance, the whole line is instantiation
const tesla = new Vehicle('','Electric','modelS')
const honda = new Vehicle('','van','Odyssey')

console.log(toyota,tesla,honda)
toyota.goVroom()
tesla.goVroom()

toyota.start()
tesla.start()

honda.stop()
    



let arr = [1,2,3]

let arr2 = new Array(1,2,3)

console.log(arr2)
arr2.forEach((x) => console.log(''))

//inheritance
//syntax
//child classname extends parentclassname
//use extend to inherit properties and methods from parent/or super class

