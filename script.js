const MAIN_CONTAINER = document.getElementById('container')
const BUTTON_SOBRE_MIM = document.getElementById('sobre_mim')
const BUTTON_CONHECIMENTOS = document.getElementById('conhecimentos')
const BUTTON_PROJETOS = document.getElementById('projetos')

let have_class = null


BUTTON_SOBRE_MIM.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "0%"
    BUTTON_SOBRE_MIM.parentElement.classList.add("current_tab")

    have_class = 1
})

BUTTON_CONHECIMENTOS.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "100%"
    BUTTON_CONHECIMENTOS.parentElement.classList.add("current_tab")

    have_class = 2
})
BUTTON_PROJETOS.addEventListener("click", () => {
    MAIN_CONTAINER.style.right = "200%"
    BUTTON_PROJETOS.parentElement.classList.add("current_tab")

    have_class = 3
})


switch (have_class) {
    case 1:
        BUTTON_CONHECIMENTOS.parentElement.classList.add("current_tab")
        BUTTON_PROJETOS.parentElement.classList.add("current_tab")
        
        break;
    case 2:
        BUTTON_SOBRE_MIM.parentElement.classList.remove("current_tab")
        BUTTON_PROJETOS.parentElement.classList.remove("current_tab")

        break;
    case 3:
        BUTTON_SOBRE_MIM.parentElement.classList.remove("current_tab")
        BUTTON_CONHECIMENTOS.parentElement.remove("current_tab")

        break;
}

if(have_class == 1) {
    BUTTON_CONHECIMENTOS.parentElement.classList.add("current_tab")
    BUTTON_PROJETOS.parentElement.classList.add("current_tab")
} else if(have_class == 2) {
    BUTTON_SOBRE_MIM.parentElement.classList.remove("current_tab")
    BUTTON_PROJETOS.parentElement.classList.remove("current_tab")
} else if(have_class == 3) {
    BUTTON_SOBRE_MIM.parentElement.classList.remove("current_tab")
    BUTTON_CONHECIMENTOS.parentElement.remove("current_tab")
}