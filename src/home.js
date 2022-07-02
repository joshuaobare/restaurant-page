function createHome() {
    const content = document.querySelector("#content")
    const cont = document.createElement("div")
    cont.classList.add('container')
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
    const mainText = document.createElement("div")
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
    header.appendChild(header1)
    header.appendChild(header2)
    header.appendChild(header3)
    cont.appendChild(title)
    cont.appendChild(header)
    cont.appendChild(mainText)
    cont.appendChild(hours)
    content.appendChild(cont)
    

}


export default createHome;