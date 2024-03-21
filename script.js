const MAIN_CONTAINER = document.getElementById('container')
const BUTTON_SOBRE_MIM = document.getElementById('sobre_mim')
const BUTTON_CONHECIMENTOS = document.getElementById('conhecimentos')
const BUTTON_PROJETOS = document.getElementById('projetos')

let have_class = null


BUTTON_SOBRE_MIM.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "0%"
})

BUTTON_CONHECIMENTOS.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "100%"
})
BUTTON_PROJETOS.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "200%"
})

setInterval(() => {
    document.getElementById("header").classList.toggle("neon-effect")
}, 1500);
