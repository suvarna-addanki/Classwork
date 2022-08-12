//for loop
//inside paranthesis we have 3 statements
//statement 1: 
//declare and initialize a variable
//scoped to the for loop

//statement 2
//a condition to check
// code in the for loop

//statement 3 
//incrementing of the variable in
//order to eventually break the loop
/*for (let i = 0; i < 10; i++){
    console.log(i)
}
*/
// exercise 1 

/*for (i = 10; i > 0; i--)
{
    console.log(i)
}
*/

//exercise 2
// for (i = 1; i <=10 ; i+=2)
// {
//     console.log(i)
// }
// for (i =2;  i <=10 ; i+=2){
//     console.log(i)
// }

//exercise 2 different version

//exercise3
/*for (i = 6; i <= 60 ; i+=3){
    console.log(i)
}*/


//exercise4
//let string = "";
//for (i = 1; i <=7; i++){
    //string += "#"
    //console.log(string);
//}

//exelet string = "";
// for (let i = 1; 1 <= 7; i++){
//     string = "#";
//     console.log(string.repeat(i));
//}

//Print even numbers
// for(m = 0; m < 10; m++){
//     if (m%2 ==0){
//         console.log(m)
//     }
// }
//prime for prime numbers; even for even; odd for odd
// for(let n = 1; n <=20; n++){
//     if (n == 1 || n == 3){
//         console.log(n + ' odd ')
//     }else if (n == 2){
//         console.log(n + ' even ');
//     }
//     else {
//         if (n % 2 == 0){
//             console.log(n + ' even ');
//         }else if (n % 3 == 0){
//             console.log(n + ' odd')
//         }else {
//             console.log(n + ' prime');
//         }
//     }
// }

//while loop sample
// let i = 1;
// while (i<10){
//     console.log(i)
//     i++
// }


//exercise 1 with while loop printing multiples of 3 as long as integer is less than 35

// let integer = 0;
// while (integer < 35){
//     console.log(integer)
//     integer+=3
// }

// let i = 0
// while(i < 35) {
//      if (i % 3 == 0) {
//          console.log(i);
//      }
//      i++;
//     }

//exercise 2 with while loop printing multiples of 5 as long as integer is lessthan 100
/*let integer1 = 0;
while (integer1 <100){
    console.log(integer1)
    integer1+=5
} 
*/

//same exercise with for loop
// let output = " "
// for(let j = 0; j <=100; j++){
//     if(j % 5 == 0)
//         output += j + " "
// }
// console.log(output)

// //exercise 3                            
// let integer = 0;                         
// while (integer < 20){                    
//     if (integer %2 ==0){
//         console.log(integer*3)
//     }integer ++
// }



//exercise 4 prime numbers
// let j = 1;
// while (j < 20){
//     if (j % 2 != 0 && j % 3 != 0){
//         console.log(j)
//     }j++
// }

//Bonus

// let i = 600;
// let quarters = 0;
// while (i > 0) {
//     i -= 25;
//     quarters++;
// }
// console.log(quarters + ' quarters');

//while loop for numbers divisible by 4 in between 500-800
// let k = 500;
// while (k < 800){
//     if(k % 4 == 0){
//         console.log(k)
//     }k++

// }
