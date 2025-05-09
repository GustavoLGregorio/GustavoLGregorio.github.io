/**
 *
 * caso esteja lendo isso, saiba que eu tentei ao máximo
 * organizar o código de uma forma que fizesse sentido.
 * depois de tantas funções dentro de funções, chegou
 * em um "scope hell" kkk MAS o objetivo era criar algo
 * simples em javascript, sem utilização de ferramentas
 * e sem utilizar OO (já que é horrível em JS)
 *
 *
 **/

/**
 *
 * lógicas que passam entre as páginas
 *
 **/

// criação de elementos html
const button = document.createElement("button");
const div = document.createElement("div");
const img = document.createElement("img");
const h3 = document.createElement("h3");
const p = document.createElement("p");

/**
 * arrays com as palavras (fiz hardcoded mas seria possível fazer fetch de um
 * arquivo JSON (ou servidor caso não fosse colocar em uma página estática),
 * porém aumentaria demais a complexidade do projeto por
 * ter que desenvolver tudo de maneira assincrona)
 **/
let animais = [
	"gato",
	"cao",
	"cavalo",
	"peixe",
	"rato",
	"urso",
	"lobo",
	"cobra",
	"leao",
	"pato",
	"puma",
	"suamae",
	"coelho",
	"falcao",
	"gaivota",
	"tigre",
	"burro",
	"cabra",
	"golfinho",
	"elefante",
	"iguana",
	"ra",
	"corvo",
	"sapo",
	"pinguim",
	"tatu",
	"porco",
	"hamster",
	"foca",
	"lagarto",
];
let objetos = [
	"cadeira",
	"mesa",
	"copo",
	"faca",
	"caneta",
	"papel",
	"livro",
	"telefone",
	"carro",
	"tela",
	"chave",
	"banco",
	"relogio",
	"lanterna",
	"guitarra",
	"cama",
	"caixa",
	"espelho",
	"ventilador",
	"caderno",
	"mesa",
	"pincel",
	"notebook",
	"teclado",
	"mouse",
	"escova",
	"pente",
	"tablet",
	"piano",
	"radar",
];
let filmes = [
	"avatar",
	"titanic",
	"frozen",
	"joker",
	"gladiador",
	"bravura",
	"mulan",
	"rocky",
	"corra",
	"aliens",
	"moana",
	"creed",
	"batman",
	"matrix",
	"ali",
	"hannibal",
	"predador",
	"zootopia",
	"bonsai",
	"deadpool",
	"jumanji",
	"tropaelite",
	"amnesia",
	"armageddon",
	"godzilla",
	"scarface",
	"rush",
	"jumanji",
	"thor",
	"unbroken",
];
let paises = [
	"brasil",
	"chile",
	"franca",
	"canada",
	"japao",
	"egito",
	"india",
	"italia",
	"alemanha",
	"mexico",
	"suecia",
	"noruega",
	"argentina",
	"russia",
	"polonia",
	"haiti",
	"turquia",
	"coreia",
	"grecia",
	"libano",
	"filipinas",
	"vietna",
	"colombia",
	"catar",
	"mali",
	"nepal",
	"bangladesh",
	"eslovenia",
	"suica",
	"singapura",
];

// criação de numeros aleatorios que correspondem a palavra da forca
const rand_item = Math.round(Math.random() * 120);

// containers (elementos html) que interagem entre a pagina inicial e o jogo
const container_botoes = document.getElementById("container_botoes");
const container_highscore = document.querySelector(".highscore");
const container_score = document.querySelector(".score");

// cria a dificuldade do jogo

const n_dificuldade = "dificuldade";
let v_dificuldade = localStorage.getItem(n_dificuldade) || "";

// n = nome; v = valor;
// nome para o highscore no localStorage
const n_highscore = "highscore";
// valor para o highscore
let v_highscore = parseInt(localStorage.getItem(n_highscore)) || 0;

// função que aplica o highscore na pagina inciial
function aplicar_highscore() {
	// seta o highscore para o valor do score atual (chamado a frente)
	v_highscore = v_score;

	// cria o highscore no localStorage
	localStorage.setItem(n_highscore, v_highscore);

	// mostra o highscore atualizado
	container_highscore.innerText = `Highscore: ${v_highscore}`;
}

// nome para o score no localStorage
const n_score = "score";
// valor para o score
let v_score = parseInt(localStorage.getItem(n_score)) || 0;
// reconhece se o score pode ser alterado
let score_pode_mudar = true;

// incrementa o score quando chamado (chamado na pagina_jogo())
function incrementar_score() {
	// incrementa o score a cada palavra correta
	if (
		(v_dificuldade == "NORMAL" && score_pode_mudar == true) ||
		(v_dificuldade == "" && score_pode_mudar == true)
	) {
		v_score += 1;
	} else if (v_dificuldade == "DIFÍCIL" && score_pode_mudar == true) {
		v_score += 5;
	}

	// cria o score no localStorage
	localStorage.setItem(n_score, v_score);

	// mostra o score atualizado
	container_score.innerText = `Score: ${v_score}`;
}

/**
 *
 * verifica a url do usuario para evitar que ele entre
 * na página jogo antes das variaveis corretas serem criadas
 *
 **/
// reconhece qual a url onde o usuario está
if (
	location.pathname == "/pages/jogo_da_forca/index.html" ||
	location.pathname == "/pages/jogo_da_forca/"
) {
	// inicia a função principal da pagina inicial
	pagina_inicial();

	// checa se v_score (valor score) é maior do que o v_highscore (valor highscore) atual
	if (v_score >= v_highscore) {
		aplicar_highscore();
	}

	// mostra o highscore na pagina inicial
	container_highscore.innerText = `Highscore: ${v_highscore}`;
}
if (location.pathname == "/pages/jogo_da_forca/jogo.html") {
	// checa a dificuldade e cria o jogo com 6 ou 3 tentativas
	if (v_dificuldade == "NORMAL" || v_dificuldade == "") {
		pagina_jogo(6);
	} else if (v_dificuldade == "DIFÍCIL") {
		pagina_jogo(3);
	}

	// mostra o score na pagina de jogo
	container_score.innerText = `Score: ${v_score}`;
}

/**
 *
 * lógica da página inicial
 *
 **/
function pagina_inicial() {
	// botoes da tela inicial
	const botao_novo_jogo = document.getElementById("jogar");
	const botao_memoria = document.getElementById("memoria");
	const botao_continuar = document.getElementById("continuar");
	const botao_dificuldadde = document.getElementById("dificuldade");

	// click do botão "jogar"
	botao_novo_jogo.addEventListener("click", () => {
		// escolhendo aleatoriamente o numero referente a palavra
		localStorage.setItem("rand_item", rand_item);
		localStorage.setItem("iniciou_jogo", "true");
		localStorage.setItem(n_score, 0);

		location.href = "jogo.html";
	});

	// click apaga a memoria
	botao_memoria.addEventListener("click", () => {
		localStorage.clear();
		location.reload();
	});

	// reconhece se o jogador iniciou o jogo para habilitar o botão "continuar"
	if (localStorage.getItem("iniciou_jogo") == "true") {
		botao_continuar.classList.remove("desativado");
	}

	// se o botão continuar não contem mais a classe "desativado" então pode voltar ao jogo
	if (botao_continuar.classList.contains("desativado") == false) {
		botao_dificuldadde.innerText = v_dificuldade;
		botao_continuar.addEventListener("click", () => {
			location.href = "jogo.html";
		});
	}

	// reconhece o click do botão e alterna a dificuldade do jogo
	botao_dificuldadde.addEventListener("click", () => {
		if (botao_dificuldadde.innerText == "NORMAL") {
			botao_dificuldadde.innerText = "DIFÍCIL";

			localStorage.setItem(n_dificuldade, "DIFÍCIL");
		} else {
			botao_dificuldadde.innerText = "NORMAL";

			localStorage.setItem(n_dificuldade, "NORMAL");
		}
	});
	if (v_dificuldade == "") {
		botao_dificuldadde.innerText = "Dificuldade";
	}
}

/**
 *
 * lógica de jogo
 *
 **/
function pagina_jogo(tentativas = 6) {
	const pagina_jogo = document.getElementById("jogo");
	const botao_voltar = document.getElementById("voltar");
	const tamanho_palavra = document.getElementById("tamanho_palavra");
	const container_tem_letra = document.getElementById("tem");
	const container_espaco_letras = document.getElementById("espaco_letras");
	const hangman = document.getElementById("hangman");
	const pagina_jogo_div = pagina_jogo.appendChild(div);
	const botoes_alfabeto = document.getElementById("container_alfabeto").querySelectorAll("button");
	const tipo_palavra = document.getElementById("tipo_palavra");
	const audio_jogo = document.getElementById("audio_jogo");

	// volta para a pagina inicial caso o jogador clique no botão (o score e palavra se mantem)
	botao_voltar.addEventListener("click", () => {
		window.location.href = "index.html";
	});

	// encontra qual conjunto (array) o index pertence
	let palavra_index = localStorage.getItem("rand_item");
	// variavel que recebe a palavra (vindo aleatoriamente do localStorage)
	let palavra = null;

	// caso o usuario tente forçar sua entrada na jogo.html antes de iniciar um jogo, será mandado para a index.html
	if (localStorage.getItem("iniciou_jogo") == null) {
		location.href = "index.html";
	}

	// checa o numero aleatorio gerado na sessão local, reconhece uma palavra dentro do array palavras[animais[], objetos[]]
	function retorna_palavra(palavra) {
		let i = null; // variavel auxiliar

		if (palavra_index >= 0 && palavra_index < 30) {
			i = palavra_index;
			palavra = animais[i];
			tipo_palavra.innerText = "Animal";
		} else if (palavra_index >= 30 && palavra_index < 60) {
			i = palavra_index - 30;
			palavra = objetos[i];
			tipo_palavra.innerText = "Objeto";
		} else if (palavra_index >= 60 && palavra_index < 90) {
			i = palavra_index - 60;
			palavra = filmes[i];
			tipo_palavra.innerText = "Filme";
		} else if (palavra_index >= 90 && palavra_index < 120) {
			i = palavra_index - 90;
			palavra = paises[i];
			tipo_palavra.innerText = "País";
		}
		return palavra;
	}
	// atribuindo o retorno da função para a variavel "palavra" (antes null)
	palavra = retorna_palavra();

	// informa a quantidade de letras que a palavra tem
	tamanho_palavra.innerText = palavra.length;
	// pega a palavra e separa em um array de suas letras
	let array_palavra = palavra.split("");

	// cria divs para conter as letras da palavra (resultado: * * *  (com bordas em baixo))
	for (let i = 0; i < palavra.length; i++) {
		// criando e instanciando novas divs
		let div = document.createElement("div");
		container_espaco_letras.appendChild(div).id = i;
		container_espaco_letras.appendChild(div).innerText = "*";
	}

	function digitar_letras() {
		let letra = "";

		window.addEventListener("keydown", (e) => {
			letra = e.key;
		});
		window.addEventListener("keydown", escrever_letras);

		// reconhece se a letra existe ou não na palavra
		function escrever_letras() {
			// caso a letra exista
			if (array_palavra.includes(letra) && letra != "") {
				container_tem_letra.innerText += letra;
			} else if (
				array_palavra.includes(letra) == false &&
				letra != "" &&
				RegExp(/^[a-z]+$/).test(letra)
			) {
				document.getElementById("nao_tem").innerText += letra;
				tentativas--;
				// impede que as tentativas se tornem numeros negativos
				tentativas <= 0 ? (tentativas = 0) : (tentativas = tentativas);

				// vibra caso erre a letra (precisa ter motor de vibração)
				try {
					navigator.vibrate(50);
				} catch (erro) {
					// caso não seja um aparelho com vibração
					console.info("Impossível acessar vibração/inexistente");
				}

				// reconhece e remove a imagem da forca vazia
				if ((hangman.querySelector("img").id = "forca_vazia")) {
					hangman.querySelector("img").remove();
				}
				// cria a imagem do hangman e troca o src conforme as chances acabam
				hangman.appendChild(img).src = `content/hangman/0${tentativas}.svg`;
			}
		}

		// transforma a variavel letra em um Set
		// transforma o array palavra_letras em um Set (para comparação posterior)
		const set_palavra = new Set(array_palavra);
		const espaco_letras = container_espaco_letras.querySelectorAll("div");
		let set_letras_certas = new Set();

		// escuta o teclado do usuario para analisar as letras e comparar com a palavra
		window.addEventListener("keydown", validar_letras);

		function validar_letras(tecla) {
			// insere a tecla se existe na palavra
			array_palavra.forEach((valor, index) => {
				if (tecla.key == valor || tecla == valor) {
					espaco_letras.item(index).innerText = valor;
					set_letras_certas.add(tecla.key || tecla);
				}
			});

			/**
			 * Lógica seguinte: Sets ajudam a não repetir letras, arrays possuem
			 * funções prontas mais uteis, então o string organizado
			 * de um array que vem de um Set, sempre retornará uma sequência especifica
			 * de letras, que pode ser comparada posteriormente. Considerando o contexto
			 * da aplicação, a comparação simples de strings acaba sendo efetiva sem a
			 * necessidade de criar loops para comparar letra por letra
			 * **/
			// cifra se refere as letras corretas digitadas
			let cifra_palavra = [...set_letras_certas];
			// chave se refere a palavra original (inicialmente escondida)
			let chave_palavra = [...set_palavra];

			// compara se o string da cifra é o mesmo da chave e vence a rodada
			if (cifra_palavra.sort().toString() === chave_palavra.sort().toString()) {
				// remove o evento de escutar teclas (evita bugs no score)
				window.removeEventListener("keydown", escrever_letras);
				// aciona a funçaõ que incrementa o score (aumentar os pontos)
				incrementar_score();
				// impede que o score possa ser alterado após vencer a rodada (evita bugs no score)
				score_pode_mudar = false;

				// cria a mensagem de vitoria
				pagina_jogo_div.classList.add("ganhou");
				pagina_jogo_div.appendChild(h3).innerText = "Acertou!";

				// cria o audio de vitoria
				audio_jogo.src = "content/audio/correct.mp3";
				audio_jogo.autoplay = false;
				audio_jogo.play();

				// mostra quantos pontos serão aumentados (em base de dificuldade)
				if (v_dificuldade == "NORMAL" || v_dificuldade == "") {
					pagina_jogo_div.appendChild(p).innerText = "+1 ponto";
				} else if (v_dificuldade == "DIFÍCIL") {
					pagina_jogo_div.appendChild(p).innerText = "+5 pontos";
				}

				// escuta o final da animação "fade_in"
				pagina_jogo_div.addEventListener("animationend", () => {
					// adiciona a animação "fade_out"
					pagina_jogo_div.style.animation = "fade_out 1000ms ease-in-out";
					// escuta o evento de final de animação "fade_out"
					pagina_jogo_div.addEventListener("animationend", () => {
						pagina_jogo_div.remove();
						localStorage.setItem("rand_item", rand_item);
						window.location.reload();
					});
				});

				// checa se o score atual é maior que o highscore e altera o highscore
				if (v_score >= v_highscore) {
					localStorage.setItem(n_highscore, v_score);
				}
			}

			// zera o score atual (não altera o highscore)
			if (tentativas <= 1 && v_score > 0) {
				v_score -= v_score;
			}
			// reconhece se o jogador errou o maximo de vezes (perde o jogo)
			if (tentativas == 0) {
				// remove o evento de escutar teclas (evita bugs no score)
				window.removeEventListener("keydown", escrever_letras);
				// impede que o score possa ser alterado após perder o jogo (evita bugs no score)
				score_pode_mudar = false;
				// aciona a funçaõ que incrementa o score (para zerar os pontos)
				incrementar_score();

				// cria a mensagem de derrota
				pagina_jogo_div.classList.add("perdeu");
				pagina_jogo_div.appendChild(h3).innerText = "Você perdeu!";
				pagina_jogo_div.appendChild(p).innerText = "Tente novamente";

				// cria o audio de derrota
				audio_jogo.src = "content/audio/wrong.mp3";
				audio_jogo.play();

				// escuta ofinal da animação "fade_in"
				pagina_jogo_div.addEventListener("animationend", () => {
					// adiciona a animação "fade_out"
					pagina_jogo_div.style.animation = "fade_out 1000ms ease-in-out";
					// escuta o evento de final de animação "fade_out"
					pagina_jogo_div.addEventListener("animationend", () => {
						pagina_jogo_div.remove();
						window.location.reload();
					});
				});
			}
		}

		// faz o mesmo porém utilizando os botoes ao inves do teclado
		botoes_alfabeto.forEach((botao) => {
			botao.addEventListener("click", () => {
				letra = botao.innerText.toLowerCase();
				escrever_letras();
				validar_letras(letra);
			});
		});
	}
	digitar_letras();
}
