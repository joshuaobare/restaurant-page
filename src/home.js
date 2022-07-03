function createHome() {
    document.querySelector("html").style.backgroundSize = "300%"
    const content = document.querySelector("#content")
    const homePage = document.createElement("div")
    homePage.setAttribute("id","homePage")

    const cont = document.createElement("div")
    cont.setAttribute("id",'container')

    /*
    const title = document.createElement("h1")
    const header = document.createElement("div")
    header.classList.add("header")
    title.textContent = "THE STEAKHOUSE"
    const header1 = document.createElement("div")
    header1.textContent = "Home"
    const header2 = document.createElement("div")
    header2.textContent = "Menu"
    const header3 = document.createElement("div")
    header3.textContent = "Contacts"

    header1.classList.add("hmebtn")
    header2.classList.add("menubtn")
    header3.classList.add("contactbtn") */

    const heading1 = document.createElement('h1')
    heading1.textContent="BEST. STEAK. EVER"


    const mainText = document.createElement("p")
    mainText.classList.add('mainText')
    mainText.textContent = "The Steakhouse is designed to indulge your inner gourmand. We are a modern take on the New York-style steakhouse, offering aged beef, succulent seafood and indulgent desserts paired to perfection with eclectic wines and whiskies from some of the finest producers in the world."
    const hours = document.createElement("div")
    hours.classList.add('hours')
    const topHours = document.createElement("p")
    topHours.classList.add('topHours')
    topHours.textContent = "HOURS"
    const bottomHours = document.createElement("p")
    bottomHours.innerHTML = "Sunday: 8am - 8pm <br>    Monday: 6am - 6pm<br>     Tuesday: 6am - 6pm<br>    Wednesday: 6am - 6pm<br>    Thursday: 6am - 10pm<br>     Friday: 6am - 10pm<br>     Saturday: 8am - 10pm<br>"  
    bottomHours.classList.add('bottomHours')
    hours.appendChild(topHours)
    hours.appendChild(bottomHours)
  /*  header.appendChild(header1)
    header.appendChild(header2)
    header.appendChild(header3) */
    
    //cont.appendChild(title)
    //cont.appendChild(header)
    homePage.appendChild(heading1)
    homePage.appendChild(mainText)
    homePage.appendChild(hours)

    cont.appendChild(homePage)
    content.appendChild(cont)
    

}


export default  createHome;