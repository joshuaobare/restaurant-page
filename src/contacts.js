function createContacts() {
    document.querySelector("html").style.backgroundSize = "300%"
    const content = document.querySelector("#content")
    const contactsPage = document.createElement("div")
    contactsPage.setAttribute("id","contactsPage")
    
    const cont = document.createElement("div")
    cont.setAttribute('id','container')
    
    

    const heading1 = document.createElement('h1')
    heading1.textContent="PHONES"

    const phones = document.createElement("div")
    phones.innerHTML = "+254-755-555555 <br> +254-705-105500 <br> +254-705-937973"

    const heading2 = document.createElement('h1')
    heading2.textContent="ADDRESS"

    const address = document.createElement("div")
    address.innerHTML = "898 Orion Extension <br> Lake Jovannyport <br> New Mexico <br> South Africa"

    
    contactsPage.appendChild(heading1)
    contactsPage.appendChild(phones)
    contactsPage.appendChild(heading2)
    contactsPage.appendChild(address)
    cont.appendChild(contactsPage)
    content.appendChild(cont)
}

export default createContacts;