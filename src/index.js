import createHome from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import './styles.css'


const content = document.querySelector("#content")
const homeBtn = document.querySelector(".hmebtn")
const menuBtn = document.querySelector(".menubtn")
const contactBtn = document.querySelector(".contactbtn")
const menuPage = document.querySelector(".menuPage")
const homePage = document.querySelector(".homePage")
const contactsPage = document.querySelector(".contactsPage")

menuBtn.addEventListener("click", () => {
    console.log('m')
  /*  homePage.classList.add("hide")
    contactsPage.classList.add("hide")
    menuPage.classList.remove("hide") */
    menuPage.style.display =""
    homePage.style.display ="none"
    contactsPage.style.display ="none"
    
})


homeBtn.addEventListener("click", () => {
    
    console.log('h')
    //homePage.classList.add("show")
   /* contactsPage.classList.add("hide")
    menuPage.classList.add("hide")
    homePage.classList.remove("hide") */
    //createHome()
    menuPage.style.display ="none"
    homePage.style.display =""
    contactsPage.style.display ="none"

})



contactBtn.addEventListener("click", () => {
    console.log('c')
  /*  menuPage.classList.add("hide")
    homePage.classList.add("hide")
    contactsPage.classList.remove("hide") */
   // createContacts()
   menuPage.style.display ="none"
    homePage.style.display ="none"
    contactsPage.style.display =""


}) 
/*
function component() {
homeBtn.onclick = createMenu }

content.appendChild(component())*/
