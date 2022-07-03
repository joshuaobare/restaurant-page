import createHome from "./home.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import './styles.css'


const content = document.querySelector("#content")



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

    createHome()
  // createMenu()

  const homeBtn = document.querySelector(".hmebtn")
  const menuBtn = document.querySelector(".menubtn")
  const contactBtn = document.querySelector(".contactbtn")
  const menuPage = document.querySelector("#menuPage")
  const homePage = document.querySelector("#homePage")
  const contactsPage = document.querySelector("#contactsPage")
  const cont = document.querySelector("#container")

  function containerRemover() {
    const conts = document.querySelectorAll("#container")
    conts.forEach((contss) => {
        contss.remove()
    })
}

menuBtn.addEventListener("click", () => {
    console.log('m')
  /*  homePage.classList.add("hide")
    contactsPage.classList.add("hide")
    menuPage.classList.remove("hide") 
    menuPage.style.display =""
    homePage.style.display ="none"
    contactsPage.style.display ="none" */
    //content.innerHTML = ""
    
    containerRemover()
    createMenu()
    
    
    
})


homeBtn.addEventListener("click", () => {
    
    console.log('h')
    //homePage.classList.add("show")
   /* contactsPage.classList.add("hide")
    menuPage.classList.add("hide")
    homePage.classList.remove("hide") 
    //createHome()
    menuPage.style.display ="none"
    homePage.style.display =""
    contactsPage.style.display ="none"*/
    //content.innerHTML = ""
    containerRemover()
    createHome()
   // menuPage.remove()
    //contactsPage.remove()
    

})



contactBtn.addEventListener("click", () => {
    console.log('c')
  /*  menuPage.classList.add("hide")
    homePage.classList.add("hide")
    contactsPage.classList.remove("hide") 
   // createContacts()
   menuPage.style.display ="none"
    homePage.style.display ="none"
    contactsPage.style.display =""*/
   // content.innerHTML = ""
   containerRemover()
   createContacts()
   //menuPage.remove()
   //homePage.remove()

    

}) 



/*
function component() {
homeBtn.onclick = createMenu }

content.appendChild(component())*/
