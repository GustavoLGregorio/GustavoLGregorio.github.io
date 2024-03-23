const MAIN_CONTAINER = document.getElementById('main_container')
const BUTTON_SOBRE_MIM = document.getElementById('sobre_mim')
const BUTTON_CONHECIMENTOS = document.getElementById('conhecimentos')
const BUTTON_PROJETOS = document.getElementById('projetos')
let a = document.createElement("a")
if(window.clientWidth < 576) {
    BUTTON_SOBRE_MIM.outerHTML = '<a id="sobre_mim" href="#conteudo_sobre_mim">Sobre mim</a>'
}

/////
function moverCarousel() {
    let carrousel_value = 0
    let client_width = setInterval(width_timer, 500)
    function width_timer(value) {
        value = document.body.clientWidth
        return value
    }
    console.log(client_width)
    
    //  movimento automático, valor padrão 8000ms
    console.log(document.body.clientWidth)
    if(document.body.clientWidth > 576) {
        setInterval(() => {
            carrousel_value += 100
            if(carrousel_value > 200) {
                carrousel_value = 0
            }
            MAIN_CONTAINER.style.right = carrousel_value + "%"
        }, 5000);
    } else {
        carrousel_value = 0
    }

    BUTTON_SOBRE_MIM.addEventListener("click", () => {
        carrousel_value = 0
        MAIN_CONTAINER.style.right = carrousel_value + "%"
    })
    BUTTON_CONHECIMENTOS.addEventListener("click", () => {
        carrousel_value = 100
        MAIN_CONTAINER.style.right = carrousel_value + "%"
    })
    BUTTON_PROJETOS.addEventListener("click", () => {
        carrousel_value = 200
        MAIN_CONTAINER.style.right = carrousel_value + "%"
    })
}
moverCarousel()


setInterval(() => {
    document.getElementById("header").classList.toggle("neon-effect")
}, 1500);