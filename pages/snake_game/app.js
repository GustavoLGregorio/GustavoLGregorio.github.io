const container = document.getElementById("container");
const snake = document.getElementById("snake");
const apples = document.querySelectorAll(".apple");
const snake_body = document.querySelectorAll(".snake_body");
const snake_part = "data-snake-part";
const end_screen = document.querySelector(".endgame");

let part = -1;
let max_part = 0;
let arr_part = [];
let eat_apple = false;

let pos_x = 0;
let pos_y = 0;
let pos_dir = 0;
let width = 10;
let snake_id = 1;
let aumentar = 0;

const max_player_mov = 20;
const game_speed = 100;
const game_fps = 16;

// referente aos frames por segundo (padrão = 60fps (1000/60 = 16))
const game_fast = setInterval(() => {
    snake.style.translate = `${pos_x}px ${pos_y}px`;

    check_apple_exists();
    check_eated_itself();
}, game_fps);

// referente a velocidade do snake (padrão = 10px a cada 100ms)
const game_slow = setInterval(() => {
    switch (pos_dir) {
        case 1:
            pos_x += max_player_mov;
            snake.style.transform = "rotate(0deg)";

            break;
        case -1:
            pos_x -= max_player_mov;
            snake.style.transform = "rotate(180deg)";
            break;
        case 2:
            pos_y += max_player_mov;
            snake.style.transform = "rotate(90deg)";

            break;
        case -2:
            pos_y -= max_player_mov;
            snake.style.transform = "rotate(-90deg)";

            break;
    }
    if (pos_dir === 2) {
        snake.style.transform = "rotate(90deg)";
    }
    if (pos_dir === -2) {
        snake.style.transform = "rotate(-90deg)";
    }

    mk_body();

    if (pos_x < 0 || pos_x > 490 || pos_y < 0 || pos_y > 490) {
        endgame();
    }
}, game_speed);

window.addEventListener("keydown", tecla_pressionada);

function tecla_pressionada(e) {
    const tecla = e.key;

    //console.info(max_part)
    if (max_part <= 0) {
        switch (tecla) {
            case "ArrowRight":
                pos_dir = 1;
                break;
            case "ArrowLeft":
                pos_dir = -1;
                break;
            case "ArrowUp":
                pos_dir = -2;
                break;
            case "ArrowDown":
                pos_dir = 2;
                break;
        }
    } else if (pos_dir == 1) {
        switch (tecla) {
            case "ArrowRight":
                pos_dir = 1;
                break;
            case "ArrowUp":
                pos_dir = -2;
                break;
            case "ArrowDown":
                pos_dir = 2;
                break;
        }
    } else if (pos_dir == -1) {
        switch (tecla) {
            case "ArrowLeft":
                pos_dir = -1;
                break;
            case "ArrowUp":
                pos_dir = -2;
                break;
            case "ArrowDown":
                pos_dir = 2;
                break;
        }
    } else if (pos_dir == 2) {
        switch (tecla) {
            case "ArrowRight":
                pos_dir = 1;
                break;
            case "ArrowLeft":
                pos_dir = -1;
                break;
            case "ArrowDown":
                pos_dir = 2;
                break;
        }
    } else if (pos_dir == -2) {
        switch (tecla) {
            case "ArrowRight":
                pos_dir = 1;
                break;
            case "ArrowLeft":
                pos_dir = -1;
                break;
            case "ArrowUp":
                pos_dir = -2;
                break;
        }
    }
}

function mk_body() {
    const div = document.createElement("div");

    div.setAttribute(snake_part, `${part}`);
    container.appendChild(div).classList.add("snake_body");
    div.style.translate = `${pos_x}px ${pos_y}px`;

    container.querySelectorAll(".snake_body").forEach((element, index) => {
        if (element.getAttribute(snake_part) < part - max_part) {
            container.removeChild(element);
        }
    });

    part++;
}

function mk_apple() {
    let apple_r_y = Math.round(Math.random() * 24) * 20;
    let apple_r_x = Math.round(Math.random() * 24) * 20;

    try {
        const apple = document.querySelector(".apple");

        apple.style.translate = `${apple_r_y}px ${apple_r_x}px`;

        setInterval(() => {
            //console.log(`Snake: ${snake.style.translate}\nApple: ${apple.style.translate}`)

            if (snake.style.translate == apple.style.translate) {
                //console.info("Eat")

                apple.remove(apple);
                max_part++;
                score++;
            }
        }, 100);
    } catch (e) {
        console.log(`${e}: Apple ainda não instanciada`);
    }
}
mk_apple();

function check_apple_exists() {
    const div = document.createElement("div");
    let apple_exists = false;

    container.childNodes.forEach((element) => {
        if (element.nodeName == "DIV" && element.classList.contains("apple")) {
            apple_exists = true;
            return;
        }
    });

    if (!apple_exists) {
        //console.info("Apple don't exists")
        container.appendChild(div).classList.add("apple");
        mk_apple();
    }
}

function endgame() {
    end_screen.style.display = "flex";
    clearInterval(game_slow);
    clearInterval(game_fast);
}

function check_eated_itself() {
    container.querySelectorAll(".snake_body").forEach((body_part) => {
        if (
            max_part > 1 &&
            body_part.getAttribute(snake_part) != part - 1 &&
            body_part.style.translate == snake.style.translate
        ) {
            endgame();
        }
    });
}
