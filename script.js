function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("darkmode")

    const img = document.querySelector(".profile img")

    if(html.classList.contains("darkmode")){
        img.setAttribute("src", "./assets/avatar-light.png")
    } else{
        img.setAttribute("src", "./assets/avatar.png")
    }

}