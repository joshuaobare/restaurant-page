function createContacts() {
    document.querySelector("html").style.backgroundSize = "300%"
    const content = document.querySelector("#content")
    const contactsPage = document.createElement("div")
    contactsPage.classList.add("contactsPage")
    //contactsPage.classList.add("hide")
    contactsPage.style.display ="none"
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
    header1.classList.add("hmebtn")
    header2.classList.add("menubtn")
    header3.classList.add("contactbtn")

    const heading1 = document.createElement('h1')
    heading1.textContent="PHONES"

    const phones = document.createElement("div")
    phones.innerHTML = "+254-755-555555 <br> +254-705-105500 <br> +254-705-937973"

    const heading2 = document.createElement('h1')
    heading2.textContent="ADDRESS"

    const address = document.createElement("div")
    address.innerHTML = "898 Orion Extension <br> Lake Jovannyport <br> New Mexico <br> South Africa"

    header.appendChild(header1)
    header.appendChild(header2)
    header.appendChild(header3)
    cont.appendChild(title)
    cont.appendChild(header)
    cont.appendChild(heading1)
    cont.appendChild(phones)
    cont.appendChild(heading2)
    cont.appendChild(address)
    contactsPage.appendChild(cont)
    content.appendChild(contactsPage)
}

export default createContacts();