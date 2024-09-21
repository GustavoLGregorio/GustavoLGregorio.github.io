const nav_links = document.getElementById("navegacao_lista").querySelectorAll("a")

nav_links.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active")
        link.classList.add("active")
    })
})

window.addEventListener( "DOMContentLoaded", () => {
    document.body.style.animation = "carregando_conteudo"
    document.body.style.animationDuration = "1200ms"
    document.body.style.animationTimingFunction = "ease-in"
} )








const todo_h2 = document.querySelectorAll("h2")
const todo_h3 = document.querySelectorAll("h3")
const todo_p = document.querySelectorAll("p")

const largura = window.innerWidth
const altura = window.innerHeight

console.log(largura, altura)

todo_p.forEach( p => {
    //p.style.opacity = "0"
} )

