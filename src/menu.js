function createMenu() {
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

    const heading1 = document.cr
    
    
    header.appendChild(header1)
    header.appendChild(header2)
    header.appendChild(header3)
    cont.appendChild(title)
    cont.appendChild(header)
    content.appendChild(cont)
}

export default createMenu