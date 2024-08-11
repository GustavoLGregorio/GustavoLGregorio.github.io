const MAIN_CONTAINER = document.getElementById("main_container")

const BUTTON_SOBRE_MIM = document.getElementById("sobre_mim")
const BUTTON_CONHECIMENTOS = document.getElementById("conhecimentos")
const BUTTON_PROJETOS = document.getElementById("projetos")

const CONTEUDO_SOBRE_MIM = document.getElementById("conteudo_sobre_mim")
const CONTEUDO_CONHECIMENTOS = document.getElementById("conteudo_conhecimentos")
const CONTEUDO_PROJETOS = document.getElementById("conteudo_projetos")

let largura = window.innerWidth
let altura = window.innerHeight

//  interações de movimento para dispositivos moveis/telas pequenas
if(largura < 576) {
    //  clicar nos botões faz aparecer os conteudos respectivos, funcionamento inspirado em href="#id"
    BUTTON_SOBRE_MIM.addEventListener("click", () => {
        CONTEUDO_SOBRE_MIM.scrollIntoView(true)
    })
    BUTTON_CONHECIMENTOS.addEventListener("click", () => {
        CONTEUDO_CONHECIMENTOS.scrollIntoView(true)
    })
    BUTTON_PROJETOS.addEventListener("click", () => {
        CONTEUDO_PROJETOS.scrollIntoView(true)
    })
    //  fazer conteudos aparecer ou sumir conforme a tela sobe ou desce
    window.addEventListener("scroll", () => {
        let elemento = document.querySelectorAll(".sumir")
        let windows_height = window.innerHeight
        //  variavel para colocar altura relativa ao elemento que deverá sumir ou aparecer
        let tamanho_aparecer = 200
    
        for(let i = 0; i < elemento.length; i++) {
            let elemento_aparecer = elemento[i].getBoundingClientRect().top
    
            if(elemento_aparecer < windows_height - tamanho_aparecer) {
                elemento[i].classList.add("aparecer")
            } else {
                elemento[i].classList.remove("aparecer")
            }
        }
    })
}

//  função com ações referentes ao movimento do "carrossel" de conteudo para telas grandes
function moverCarousel() {
    //  variavel para posição do #main_container (right:)
    /*
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
    */

    //  mover o carousel com os botões da navbar
    if(largura > 576) {
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
}
moverCarousel()

//  intervalo para adicionar a classe .neon-effect a um elemento
setInterval(() => {
    document.querySelector("header").classList.toggle("neon-effect")
}, 1500);