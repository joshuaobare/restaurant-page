import image1 from "./images/ribz.jpg"
import image2 from "./images/steak.jpg"
import image3 from "./images/prawn.jpg"
import image4 from "./images/wrap.jpg"
import image5 from "./images/sub.jpg"
import image6 from "./images/wingz.jpg"

function createMenu() {
    document.querySelector("html").style.backgroundSize = "cover"
    const content = document.querySelector("#content")
    const menuPage = document.createElement("div")
    menuPage.setAttribute("id","menuPage")
    
    const cont = document.createElement("div")
    cont.setAttribute("id",'container')
    

    const heading1 = document.createElement('h1')
    heading1.textContent="MAINS"

    // This renders a heading, text content and an image for 6 menu items then appends them onto
    // the #content div
    const menuItem1 = document.createElement("div")
    menuItem1.classList.add("menuItem")
    const item1H = document.createElement("h2")
    item1H.textContent = "BEEF RIBS"
    const item1P = document.createElement("p")
    item1P.textContent = "All hands are needed for this feast! Huge, mighty meaty ribs, specially marinated & dipped in our secret rib basting"
    const img1 = document.createElement("img")
    img1.src = image1
    menuItem1.appendChild(item1H)
    menuItem1.appendChild(item1P)
    menuItem1.appendChild(img1)

    const menuItem2 = document.createElement("div")
    menuItem2.classList.add("menuItem")
    const item2H = document.createElement("h2")
    item2H.textContent = "TOMAHAWK STEAK"
    const item2P = document.createElement("p")
    item2P.textContent = "A delicious cut of beef, full of natural flavour.Specially matured, bursting with flavour"
    const img2 = document.createElement("img")
    img2.src = image2
    menuItem2.appendChild(item2H)
    menuItem2.appendChild(item2P)
    menuItem2.appendChild(img2)

    const menuItem3 = document.createElement("div")
    menuItem3.classList.add("menuItem")
    const item3H = document.createElement("h2")
    item3H.textContent = "SPECIALTY SKEWER"
    const item3P = document.createElement("p")
    item3P.textContent = "Aged selected prime cuts of beef, marinated chicken or prawns skewered with mixed peppers & onions. Flame-grilled to your liking, served with your choice of side."
    const img3 = document.createElement("img")
    img3.src = image3
    menuItem3.appendChild(item3H)
    menuItem3.appendChild(item3P)
    menuItem3.appendChild(img3)

    const menuItem4 = document.createElement("div")
    menuItem4.classList.add("menuItem")
    const item4H = document.createElement("h2")
    item4H.textContent = "BEEF BURRITO"
    const item4P = document.createElement("p")
    item4P.textContent = "Juicy fillet strips, cucumber, onion, tomato, tzatziki, avocado & flavoured rice with beans wrapped in a warm tortilla wrap."
    const img4 = document.createElement("img")
    img4.src = image4
    menuItem4.appendChild(item4H)
    menuItem4.appendChild(item4P)
    menuItem4.appendChild(img4)

    const menuItem5 = document.createElement("div")
    menuItem5.classList.add("menuItem")
    const item5H = document.createElement("h2")
    item5H.textContent = "CHICKEN SANDWICH"
    const item5P = document.createElement("p")
    item5P.textContent = "Crumb fried chicken fillets with melted cheese, coleslaw, tomato & mango served on a brioche knot"
    const img5 = document.createElement("img")
    img5.src = image5
    menuItem5.appendChild(item5H)
    menuItem5.appendChild(item5P)
    menuItem5.appendChild(img5)

    const menuItem6 = document.createElement("div")
    menuItem6.classList.add("menuItem")
    const item6H = document.createElement("h2")
    item6H.textContent = "CHICKEN WINGS"
    const item6P = document.createElement("p")
    item6P.textContent = "Chicken wings grilled with our secret honey basting or Peri Peri hot sauce."
    const img6 = document.createElement("img")
    img6.src = image6
    menuItem6.appendChild(item6H)
    menuItem6.appendChild(item6P)
    menuItem6.appendChild(img6)

    // each created element is appended onto the main #content div
 
    menuPage.appendChild(heading1)
    menuPage.appendChild(menuItem1)
    menuPage.appendChild(menuItem2)
    menuPage.appendChild(menuItem3)
    menuPage.appendChild(menuItem4)
    menuPage.appendChild(menuItem5)
    menuPage.appendChild(menuItem6)
    cont.appendChild(menuPage)
    content.appendChild(cont)
}

export default createMenu;