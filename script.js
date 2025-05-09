// navegação ativa
const nav_links = document.getElementById("navegacao_lista").querySelectorAll("a");
const img_perfil = document.getElementById("container_foto").querySelector("img");
const projetos = document.getElementById("projetos").querySelectorAll("article");

observadores();
clicks();

nav_links.forEach((link) => {
	link.addEventListener("click", () => {
		document.querySelector(".active")?.classList.remove("active");
		link.classList.add("active");
	});
});

// animação de entrada na pagina
window.addEventListener("DOMContentLoaded", () => {
	document.body.style.animation = "carregando_conteudo";
	document.body.style.animationDuration = "1200ms";
	document.body.style.animationTimingFunction = "ease-in";
});

// dar zoom na foto de perfil
img_perfil.addEventListener("click", () => {
	if (img_perfil.classList.contains("aumentar")) {
		img_perfil.classList.remove("aumentar");
	} else {
		img_perfil.classList.add("aumentar");
	}
});

function observadores() {
	// efeito de scroll (utiliza a API IntersectionObserver)
	if ("IntersectionObserver" in window) {
		// seleciona elementos com a classe ".efeito"
		const elementos = document.querySelectorAll(".efeito");

		// callback do objeto IntersectionObserver()
		const callback = (entradas, observador) => {
			// foreach para cada elemento observado
			entradas.forEach((entrada) => {
				// reconhece a intersecção da viewport com o elemento
				if (entrada.isIntersecting) {
					// vai receber o elemento
					const data_target = entrada.target;
					data_target.classList.add("aparecer");
				} else {
					const data_target = entrada.target;
					data_target.classList.remove("aparecer");
				}
			});
		};

		// opcoes que o IntersectionObserver recebe
		const options = {
			// indica a visualização de intersecção em relação a VP
			root: null,
			// porcentagem onde a intersecção começa a contar
			// antes e depois do elemento
			threshold: 0.2,
		};
		// opção para threshold imediato (porcentagem zero)
		const options2 = {
			root: null,
			threshold: 0,
		};

		// criação do objeto IntersectionObserver
		const meu_observador = new IntersectionObserver(callback, options);
		const meu_observador_imediato = new IntersectionObserver(callback, options2);

		// encontra os elementos e "diz" para o objeto observador
		// "olhar" para cada elemento (roda o código da const "callback")
		elementos.forEach((elemento) => {
			// encontra o elemento (seção) projetos e mostra ela imediatamente
			if (elemento.id == "projetos") {
				meu_observador_imediato.observe(elemento);
			}
			meu_observador.observe(elemento);
		});
		meu_observador_imediato.observe(document.querySelector("#container_h1"));
	}
}

function clicks() {
	projetos.forEach((projeto, index) => {
		projeto.addEventListener("click", () => {
			console.log(index, projeto.id);
			switch (projeto.id) {
				case "projeto_japao":
					window.open("https://gustavo-projeto-japao.vercel.app/");
					break;
				case "lixadora_gregorio":
					window.open("https://gustavo-projeto-japao.vercel.app/");
					break;
				case "snake_game":
					window.open("../pages/snake_game/");
					break;
				case "hangman_game":
					window.open("../pages/jogo_da_forca/");
					break;
			}
		});
	});
}
