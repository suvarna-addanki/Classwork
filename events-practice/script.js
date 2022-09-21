//first select the element we want and store it in a variable(btn)
const btn = document.querySelector("button")

//then attach an event listener to that element
btn.addEventListener("click", function(event){
    
    //evt is a special parameter representing the event
    //object has all the info you will ever need about
    //the event that occured and the element that caused it
    console.log(event)
    console.log(this) // we can avoid using this because it will be different if we use arrow function
    //btn,event.target and this all represent the same thing which is button element


//what is method's signature?
//method name, the number and type of arguments it takes, and what it returns

//create a brand new li tag (in memory) and store in a variable called li
const li = document.createElement('li')
console.log(li)

//select the input element and store it in a variable(input)

const input = document.querySelector('input')
console.dir(input)

//for input elements we will need to access the "value" property for displaying the text that is inside
console.log(input.value)

//we target the textcontent property of the li tag and assign it to the value of our input

li.textContent = input.value

// const ul = document.querySelector('ul')
// ul.appendChild(li)

//we first select ul tag and then we add(append) the new li tag,
//which has our new comment, to the selected ul

document.querySelector('ul').appendChild(li)



input.value = ""  //clear the previous comment and makes it blank so that we can add our next comment

})

//select the ul tag
const ul = document.querySelector("ul")

//add an event listener to our ul tag
ul.addEventListener("click", handleClick)

function handleClick(event){
// console.log('clicked on ul....')
// console.log(event)
// console.log(event.target)
// event.target.style.color = "blue"
//console.log(event.target)

    console.log('clicked on....', event.target.tagName)

    if(event.target.tagName === " LI "){
        event.target.style.color = "white"
    }

    if(event.target.)
}

//delegation
const ul = document.querySelector("ul")


//remove eventlistener

//ul.removeEventListener("click", handleClick)