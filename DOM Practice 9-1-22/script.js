let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1

    let newTitle = document.getElementById("main-title");
    newTitle.textContent = "DOM Toretto's homepage"
    console.log(newTitle)
  
  
    // Part 2

    document.body.style.backgroundColor = "lightblue"
   
  
    // Part 3

    // let favThings = document.querySelector("#favorite-things");
    // console.log(favThings)
    // favThings.removeChild(favThings.lastElementChild)
    // console.log(favThings)

    //other way
    let favThings = document.querySelectorAll("#favorite-things li");
    console.log(favThings);
    favThings[favThings.length - 1].remove()

  
  
    // Part 4

    let all = document.querySelectorAll(".special-title")
    for(let i = 0; i < all.length; i++){
        all[i].style.fontSize = '2rem'
    }
    


    // Part 5

    let raceList = document.querySelectorAll("#past-races li")
    console.log(raceList)
    for(let item of raceList)
    if(item.textContent === "Chicago"){
        item.remove()
    }
    //[3].remove();
  
    // Part 6

    let newLi = document.createElement("li")
    newLi.textContent = "Charlotte"
    document.querySelector("#past-races").appendChild(newLi)
    

    // Part 7

    let blogPost = document.createElement("div")
    blogPost.classList.add("blog-post")
    document.querySelector(".main").appendChild(blogPost)
    let h2 = document.createElement("h2")
    h2.textContent = "Charlotte"
    blogPost.appendChild(h2)
    let p = document.createElement("p")
    p.textContent = "Didn't race here"
    blogPost.appendChild(p)
    // Part 8

    let quote = document.querySelector("#quote-title")
    quote.addEventListener('click', (event) =>{
            randomQuote()   
    })
  // Part 9

  

  let allBlogPost = document.querySelector(".blog-post")
  for(i = 0; i < allBlogPost.length; i++){

  }

  
  });

  