function toggleMode() {
  // trocar tema e img
  const html = document.documentElement
  html.classList.toggle("light")

  const image = document.querySelector("#profile img")
  if (image.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar.png")
  } else {
    image.setAttribute("src", "./assets/avatar.png")
  }
}
