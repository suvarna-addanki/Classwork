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

//exercise 3                            
// let integer = 0;                         
// while (integer < 20){                    
//     if (integer %2 ==0){
//         console.log(integer*3)
//     }
//     integer++
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

//exercise large deno
// var balAmount = 72.17;
// var numberof50bills = 0;
// var numberof20bills = 0;
// var numberof10bills = 0;
// var numberof5bills = 0;
// var numberof1bills = 0;

// while(balAmount > 50)
// {
//     balAmount = balAmount - 50;
//     numberof50bills++;
// }
// while(balAmount > 20)
// {
//     balAmount = balAmount - 20;
//     numberof20bills++;
// }
// while(balAmount > 10)
// {
//     balAmount = balAmount - 10;
//     numberof10bills++;
// }
// while(balAmount > 5)
//  {
//      balAmount = balAmount - 5
//      numberof5bills++;
//  }
//  while(balAmount > 1)
//  {
//      balAmount = balAmount - 1;
//      numberof1bills++;
//  }
//  console.log(numberof50bills + numberof20bills + numberof10bills + numberof5bills + numberof1bills)

//exercise for printing 10, 30, 50, 70, 90, 20, 40, 60, 80, 100
// var i = 0;
// while(i < 100){
//     if(i % 10 ==1 || i % 10 == 3 || i % 10 == 5 || i % 10 == 7 || i % 10 == 9)
//         console.log(i)
//      else (i % 10 ==2 || i % 10 == 4 || i % 10 == 6 || i % 10 == 8 || i % 10 == 10)
//         console.log(i)
// }i++
// console.log(i)

// same exercise differently
// var num = 10;
// a = num % 10;
// switch(a)
//     {
        
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 9:
//             console.log(num);
        
//         case 2:
//         case 4:
//         case 6:
//         case 8:
//         case 10:
//             console.log(num)
//         break;            
//     }
//same ex differently fir printing 10,30,50,70,90,20,40,60,80,100
// let num = 10;
// while(num <= 100){
//     console.log(num)
//     num += 20
//     if(num===90){
//         console.log(num)
//         num = 20
//     }
// }


//prime numbers
// let num = 0;
// while (num < 20){
//     if(num == 1){
//         console.log(num +=1)
//     } else if(num == 2){
//         console.log(num)
//     } else if(num == 3){
//         console.log(num)
//     }
//     if(num %2!= 0 && num %3!=0){
//         console.log(num)
//     }
//     num++
//     }

// nested for loop exercise
// i for row and j for column
//}