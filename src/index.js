import createHome from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import './styles.css'

// content is the only element on the page
const content = document.querySelector("#content")

// the layout of the page is setup 
const title = document.createElement("h1")
const header = document.createElement("div")
header.classList.add("header")
title.textContent = "THE STEAKHOUSE"
title.classList.add("title")
const header1 = document.createElement("div")
header1.textContent = "Home"
const header2 = document.createElement("div")
header2.textContent = "Menu"
const header3 = document.createElement("div")
header3.textContent = "Contacts"

header1.classList.add("hmebtn")
header2.classList.add("menubtn")
header3.classList.add("contactbtn")
header.appendChild(header1)
header.appendChild(header2)
header.appendChild(header3)

content.appendChild(title)
content.appendChild(header)

// createHome() contains the default page so it's run first
createHome()
  
// event listeners are added to the home buttons
const homeBtn = document.querySelector(".hmebtn")
const menuBtn = document.querySelector(".menubtn")
const contactBtn = document.querySelector(".contactbtn")

// this function loops over each container and removes it
function containerRemover() {
const conts = document.querySelectorAll("#container")
conts.forEach((contss) => {
    contss.remove()
})
}

menuBtn.addEventListener("click", () => {
         
    containerRemover()
    createMenu()

})


homeBtn.addEventListener("click", () => {
    
    containerRemover()
    createHome()
   
})



contactBtn.addEventListener("click", () => {
    
   containerRemover()
   createContacts()
  
}) 



