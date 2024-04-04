function ToggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");
  const body = document.body;

  
  html.classList.toggle("light")
  body.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/foto_esc.png") // Caminho da imagem para o tema claro
    body.style.backgroundImage = "url(./assets/assets/bg-mobile-light.jpg)" // Imagem de fundo para o tema claro
  } else {
    img.setAttribute("src", "./assets/assets/fot2.png") // Caminho da imagem para o tema escuro
    body.style.backgroundImage = "url(./assets/assets/bg-mobile.jpg)" // Imagem de fundo para o tema escuro
  }
}
