var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];


 let mainEl = document.querySelector("main")
 //console.dir(mainEl)    
    
mainEl.style.backgroundColor = "#4a4e4d"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.setAttribute("class","flex-ctr")
let topMenuEl = document.querySelector("#top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor ="var(--top-menu-bg)"
topMenuEl.setAttribute("class","flex-around")
 
for(item of menuLinks){
  let newTag = document.createElement("a")
  newTag.setAttribute("href",item.href)
  newTag.innerText = item.text
  topMenuEl.appendChild(newTag)
}

//DOM Menu lab part2

//task 4.0

const subMenuEl = document.querySelector('#sub-menu')

//4.1

subMenuEl.height = "100%"

//task 4.2

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

//task 4.3
subMenuEl.setAttribute("class","flex-around")  //class is flex-around

//4.4
subMenuEl.style.position = 'absolute'

//4.5

subMenuEl.style.top = "0"

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//task 5.1

const topMenuLinks = document.querySelectorAll("a")
var showingSubMenu = false

//5.2

topMenuEl.addEventListener("click",function(event){
  event.preventDefault()
  if(event.target.tagName !== "A"){
    return;
  }
  //console.log(event.target.text);
  let clickedItem;
  for(const menuItem of menuLinks){
    if(menuItem.text == event.target.text){
      clickedItem = menuItem;
      break;
    }
  }
  //5.3
  //console.log(event.target.classList)
  if(event.target.classLame ==='active'){
    event.target.classList.remove("active")
  
  showingSubMenu=false

  subMenuEl.style.top='0'
  return
  }
  //5.4
  for(let element of topMenuLinks){
    //console.log(element);
    element.classList.remove("active");
  }

  //task 5.5
  //event.target.setAttribute('class', 'active')
  //or
  event.target.classList.add("active");
  //console.log(topMenuLinks.classList)

  //5.6
  console.log(event.target.children);
  if(event.target.children){
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
  mainEl.innerHTML = `<h1>${event.target.text}</h1>`

//5.7
if(showingSubMenu){
  //console.log(event.target.subLinks)
  if(clickedItem.subLinks){
    buildSubMenu(clickedItem.subLinkks);
  }
  subMenuEl.style.top = "100%"
  }else{
    subMenuEl.style.top = "0";
  }

//5.8 buildsubMenu
function buildSubMenu(subLinks){
  subMenuEl.textContent = "";
  for (let subEle of subLinks){
    const subA = document.createElement("a");
    subA.setAttribute("href", subEle.href);
    //console.log(subEle.text);
    subA.text = subEle.text;
    //console.log(subA);
    subMenuEl.append(subA);
  }
}


//end of event listener

//6.0 delegate event listener to subMenuEl

subMenuEl.addEventListener("click", function (e){
  e.preventDefault();
  if(e.target.tagName !== "A"){
    return;
  }
  console.log(e.target);
  //6.1  set properties
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  //6.2  remove all active class from a tag from topMenuLinks
  for(let element of topMenuLinks){
    element.classList.remove("active")
}

//6.3
mainEl.innerHTML = `<h1>${e.target.text}</h1>`;
});

})












