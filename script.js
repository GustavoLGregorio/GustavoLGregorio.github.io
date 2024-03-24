const MAIN_CONTAINER = document.getElementById('main_container')

const BUTTON_SOBRE_MIM = document.getElementById('sobre_mim')
const BUTTON_CONHECIMENTOS = document.getElementById('conhecimentos')
const BUTTON_PROJETOS = document.getElementById('projetos')

let largura = document.body.clientWidth
let altura = document.body.scrollHeight

if(largura < 576) {
    BUTTON_SOBRE_MIM.addEventListener("click", () => {
        document.querySelector("#conteudo_sobre_mim").scrollIntoView(true)
    })
    BUTTON_CONHECIMENTOS.addEventListener("click", () => {
        document.querySelector("#conteudo_conhecimentos").scrollIntoView(true)
    })
    BUTTON_PROJETOS.addEventListener("click", () => {
        document.querySelector("#conteudo_projetos").scrollIntoView(true)
    })
}

function moverCarousel() {
    let carrousel_value = 0

    //  movimento automático, valor padrão 8000ms
    if(largura > 576) {
        setInterval(() => {
            carrousel_value += 100
            if(carrousel_value > 200) {
                carrousel_value = 0
            }
            MAIN_CONTAINER.style.right = carrousel_value + "%"
        }, 8000);
    } else {
        carrousel_value = 0
    }

    //  mover o carousel com os botões da navbar
    if(largura > 576) {
        BUTTON_SOBRE_MIM.addEventListener("click", () => {
            carrousel_value = 0
            MAIN_CONTAINER.style.right = carrousel_value + "%"
        })
        BUTTON_CONHECIMENTOS.addEventListener("click", () => {
            carrousel_value = 0 + 100
            MAIN_CONTAINER.style.right = carrousel_value + "%"
        })
        BUTTON_PROJETOS.addEventListener("click", () => {
            carrousel_value = 200
            MAIN_CONTAINER.style.right = carrousel_value + "%"
        })
    }
}
moverCarousel()

setInterval(() => {
    document.querySelector("header").classList.toggle("neon-effect")
}, 1500);