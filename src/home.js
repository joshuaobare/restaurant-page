import image from "./images/burger.jpg"

function createHome() {
    document.querySelector("html").style.backgroundSize = "300%"
    const content = document.querySelector("#content")
    const homePage = document.createElement("div")
    homePage.setAttribute("id","homePage")

    const cont = document.createElement("div")
    cont.setAttribute("id",'container')

 
    const heading1 = document.createElement('h1')
    heading1.textContent="A RARE EXPERIENCE"


    const mainText = document.createElement("p")
    mainText.classList.add('mainText')
    mainText.textContent = "The Steakhouse will indulge the foodie in you. This is a modern take on the New York-style steakhouse, offering aged beef, brilliant seafood and decadent desserts paired to perfection with whiskies and wines from the finest producers in the world."
    const hours = document.createElement("div")
    hours.classList.add('hours')
    const topHours = document.createElement("p")
    topHours.classList.add('topHours')
    topHours.textContent = "HOURS"
    const bottomHours = document.createElement("p")
    bottomHours.innerHTML = "Sunday: 8am - 8pm <br>    Monday: 6am - 6pm<br>     Tuesday: 6am - 6pm<br>    Wednesday: 6am - 6pm<br>    Thursday: 6am - 10pm<br>     Friday: 6am - 10pm<br>     Saturday: 8am - 10pm<br>"  
    bottomHours.classList.add('bottomHours')
    const img1 = document.createElement("img")
    img1.src = image
    img1.classList.add("normalimg")
    hours.appendChild(topHours)
    hours.appendChild(bottomHours)
 
    homePage.appendChild(heading1)
    homePage.appendChild(mainText)
    homePage.appendChild(img1)
    homePage.appendChild(hours)

    cont.appendChild(homePage)
    content.appendChild(cont)
    

}


export default  createHome;