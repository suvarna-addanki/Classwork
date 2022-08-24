//alert('style') to check if style is connected 

//document (to access the DOM)


//document object has methods we can use to traverse the DOM
//one method is called getElementById

let h1Tag = document.getElementById("title")

//h1Tag is anelement modelled as an object
//it has bunch of properties that we can access with dot notation
console.log(h1Tag)  // will show just the tag in the dev tools(console of the browser)
console.dir(h1Tag) // will show the drop  down in the dev tools(cosole of the browser)

console.log(h1Tag.innerText)  //innertext is one of the property


//query selector is useful to access anything either with id,class or the tag itself
//if you have multiple tags or ids or classes with same name then query selector will get the first one it finds

let pTag = document.querySelector(".cool")  //selct an element by it's tag name

//select an element by it's class name
//let pTag = document.querySelector(".main-title")

//select an element by its id name
//let pTag = document.querySelector(".title")
let pEl = document.querySelector(".cool") //selecting by class called cool and storing in avariable
console.log(pEl)

//textcontent,innerHTML

console.log(pTag.innerHTML)
console.log(pTag.textContent)

console.dir(pTag)

//css props are camel cased in DOM
//css props are kabob cased in css

h1Tag.style.textAlign = "center"
h1Tag.style.color = 'red'
pTag.style.color = "blue"

let alink = document.querySelector("a")
alink.setAttribute("href", "https://www.google.com")

//innerhtml and textcontent both access the text of an element
//the style property(object) can be used to make

//it has bunch of properties that represent css props
  //color
  //backgroundcoloe
  //textalign

//selecting multiple elements by tag name
let liTags = document.getElementsByTagName('li')
console.log(liTags[2])

//selecting multiple elements by class name
let liTags2 = document.getElementsByClassName("comment")
console.log("byClassName method: ", liTags2)

//selecting multiple elements bty whatever u like

let liTags3 = document.querySelectorAll(".comment")
console.log(liTags3)

for(let element of comments){
    element = coments.sty
}
console.log()


