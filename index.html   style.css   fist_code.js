 

<!DOCTYPE html>

<html>

<head>
    <title>Neon Dodge</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>


<!-- GAME TITLE -->

<div class="name">
    <h1>
        <span>⚡ NEON</span>
        <span>DODGE ⚡</span>
    </h1>
</div>


<!-- MAIN GAME -->

<div class="sroe">

    <!-- TOP STATUS BAR -->

    <div class="top_bar">

        <div class="status">

            <!-- Battery -->

            <div class="battery">
                <div class="battery_fill"></div>
            </div>

            <!-- Signal -->

            <div class="signal">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>

    </div>


    <!-- SCORE BAR -->

    <h3>

        <span>⭐ SCORE: 0</span>

        <span>❤️ ❤️ ❤️</span>

        <span>⏱ 0</span>

    </h3>


    <!-- GAME BOX -->

    <div class="box">

        <!-- Falling Ball 1 -->

        <div class="circle ball1">
            😎
        </div>


        <!-- Falling Ball 2 -->

        <div class="circle ball2">
            🔥
        </div>


        <!-- Falling Ball 3 -->

        <div class="circle ball3">
            💜
        </div>


        <!-- PLAYER BASKET -->

        <div class="basket">

            <div class="basket_top"></div>

            <div class="basket_body">

                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>

    </div>


    <!-- PLAY BUTTON -->

    <button class="btu">
        ▶ PLAY
    </button>

</div>


<script src="fist_code.js"></script>


</body>

</html>

// css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

/* BODY */


body {


min-height: 100vh;

font-family: Arial, Helvetica, sans-serif;

background:
    radial-gradient(
        circle at 20% 20%,
        rgba(255, 45, 149, 0.22),
        transparent 30%
    ),

    radial-gradient(
        circle at 80% 15%,
        rgba(0, 255, 255, 0.18),
        transparent 30%
    ),

    radial-gradient(
        circle at 50% 90%,
        rgba(130, 50, 255, 0.25),
        transparent 35%
    ),

    linear-gradient(
        135deg,
        #050014,
        #100025 45%,
        #020713
    );

color: white;

overflow-x: hidden;


}

/* GAME TITLE */


.name {

display: flex;

justify-content: center;

margin-top: 35px;

text-align: center;

font-size: 25px;

font-weight: bold;

letter-spacing: 2px;

text-shadow:
    0 0 10px rgba(255, 107, 157, 0.7),
    0 0 25px rgba(94, 234, 212, 0.4);

}

.name h1 span {


display: inline-block;

margin: 0 5px;


}

.name h1 span:nth-child(1) {

color: #ff4fa3;

text-shadow:
    0 0 8px #ff4fa3,
    0 0 20px #ff1493,
    0 0 40px #ff1493;

}

.name h1 span:nth-child(2) {

color: #5affff;

text-shadow:
    0 0 8px #5affff,
    0 0 20px #00ffff,
    0 0 40px #00ffff;


}


/* MAIN GAME CONTAINER */


.sroe {


position: relative;

display: flex;

flex-direction: column;

align-items: center;

margin: 30px auto;

height: 650px;

width: 590px;

padding: 18px;

border-radius: 25px;

background:
    linear-gradient(
        145deg,
        rgba(20, 10, 55, 0.96),
        rgba(5, 5, 25, 0.98)
    );

border: 2px solid #ff38b8;

box-shadow:

    0 0 10px #ff38b8,

    0 0 25px rgba(255, 56, 184, 0.7),

    0 0 50px rgba(0, 255, 255, 0.25),

    inset 0 0 30px rgba(255, 0, 170, 0.08),

    inset 0 0 60px rgba(0, 255, 255, 0.04);

overflow: hidden;

transition: 0.4s;


}

.sroe::before {


content: "";

position: absolute;

width: 250px;

height: 250px;

background: #ff00aa;

filter: blur(120px);

opacity: 0.12;

top: -100px;

left: -100px;

pointer-events: none;


}

.sroe::after {

content: "";

position: absolute;

width: 220px;

height: 220px;

background: #00ffff;

filter: blur(120px);

opacity: 0.10;

bottom: -100px;

right: -80px;

pointer-events: none;


}

.sroe:hover {

box-shadow:

    0 0 15px #ff38b8,

    0 0 35px #ff38b8,

    0 0 70px rgba(0, 255, 255, 0.35),

    inset 0 0 35px rgba(255, 0, 170, 0.12);


}

/* TOP BAR */


.top_bar {


display: flex;

justify-content: center;

align-items: center;

padding: 8px 10px;

width: 100%;

position: relative;

z-index: 2;


}

.status {


display: flex;

align-items: center;


}

/* BATTERY */


.battery {


position: relative;

width: 34px;

height: 16px;

border: 2px solid #5affff;

border-radius: 4px;

box-shadow:

    0 0 7px #5affff,

    0 0 15px rgba(90, 255, 255, 0.6);

padding: 2px;


}

.battery::after {


content: "";

position: absolute;

right: -5px;

top: 4px;

width: 3px;

height: 6px;

background: #5affff;

border-radius: 0 2px 2px 0;

box-shadow: 0 0 5px #5affff;

}

.battery_fill {


width: 65%;

height: 100%;

background: #5affff;

border-radius: 2px;

box-shadow:

    0 0 6px #5affff,

    0 0 12px #5affff;


}

/* SIGNAL */
.signal {


display: flex;

align-items: flex-end;

gap: 3px;

margin-left: 10px;

height: 14px;


}

.signal span {


display: block;

width: 3px;

background: #5affff;

border-radius: 2px;

box-shadow: 0 0 6px #5affff;


}

.signal span:nth-child(1) {
height: 4px;
}

.signal span:nth-child(2) {
height: 8px;
}

.signal span:nth-child(3) {
height: 12px;
}


/* SCORE */


h3 {


width: 100%;

display: flex;

justify-content: space-between;

align-items: center;

margin-top: 18px;

padding: 0 12px;

font-size: 16px;

position: relative;

z-index: 2;

}

h3 span {

color: #ff6b9d;

text-shadow:

    0 0 6px #ff6b9d,

    0 0 15px rgba(255, 107, 157, 0.7);


}

h3 span:nth-child(2) {


color: #ff4d8d;

letter-spacing: 2px;


}

h3 span:nth-child(3) {


color: #5affff;

text-shadow:

    0 0 6px #5affff,

    0 0 15px rgba(90, 255, 255, 0.7);


}

/* GAME BOX */


.box {

position: relative;

width: 400px;

height: 460px;

margin-top: 30px;

border: 2px solid #7c7cff;

border-radius: 22px;

background:

    linear-gradient(
        180deg,
        rgba(8, 8, 35, 0.95),
        rgba(3, 3, 20, 0.98)
    );

box-shadow:

    0 0 8px #7c7cff,

    0 0 20px rgba(124, 124, 255, 0.7),

    inset 0 0 20px rgba(124, 124, 255, 0.15),

    inset 0 0 50px rgba(0, 255, 255, 0.04);

overflow: hidden;

transition: 0.4s;


}

.box::before {


content: "";

position: absolute;

inset: 0;

background:

    linear-gradient(
        rgba(255,255,255,0.025) 1px,
        transparent 1px
    );

background-size: 100% 25px;

pointer-events: none;


}

.box:hover {


border-color: #5affff;

box-shadow:

    0 0 10px #5affff,

    0 0 25px #5affff,

    0 0 50px rgba(255, 56, 184, 0.4),

    inset 0 0 25px rgba(90, 255, 255, 0.1);


}

/* NEON BALLS */


.circle {

position: absolute;

display: flex;

justify-content: center;

align-items: center;

width: 42px;

height: 42px;

border-radius: 50%;

font-size: 21px;

background:
    radial-gradient(
        circle at 35% 30%,
        white 0%,
        #ff6ec7 15%,
        #ff1493 55%,
        #7a004b 100%
    );

border: 2px solid #ff8bd7;

box-shadow:

    0 0 10px #ff6ec7,

    0 0 25px #ff1493,

    0 0 45px rgba(255, 20, 147, 0.8);

z-index: 3;

animation: floatBall 2s ease-in-out infinite;


}

.ball1 {


top: 35px;

left: 65px;


}

.ball2 {

top: 120px;

left: 260px;

background:
    radial-gradient(
        circle at 35% 30%,
        white 0%,
        #5affff 15%,
        #00aaff 55%,
        #004466 100%
    );

border-color: #8fffff;

box-shadow:

    0 0 10px #5affff,

    0 0 25px #00ffff,

    0 0 45px rgba(0, 255, 255, 0.7);

animation-delay: 0.5s;


}

.ball3 {


top: 200px;

left: 140px;

background:
    radial-gradient(
        circle at 35% 30%,
        white 0%,
        #c77dff 15%,
        #7b2cff 55%,
        #250052 100%
    );

border-color: #dca7ff;

box-shadow:

    0 0 10px #c77dff,

    0 0 25px #8a2be2,

    0 0 45px rgba(138, 43, 226, 0.8);

animation-delay: 1s;


}

@keyframes floatBall {


0%,
100% {

    transform: translateY(0);
}

50% {

    transform: translateY(8px);
}


}


.basket {


position: absolute;

bottom: 22px;

left: 50%;

transform: translateX(-50%);

width: 135px;

height: 80px;

z-index: 5;

filter:
    drop-shadow(0 0 8px #5affff)
    drop-shadow(0 0 18px rgba(0,255,255,0.7));


}

/* basket upper rim */

.basket_top {


position: absolute;

top: 0;

left: 0;

width: 135px;

height: 25px;

border: 4px solid #5affff;

border-radius: 50%;

background: rgba(90, 255, 255, 0.12);

box-shadow:

    0 0 8px #5affff,

    inset 0 0 8px #5affff;

}

/* basket body */

.basket_body {

position: absolute;

top: 12px;

left: 7px;

width: 121px;

height: 63px;

border-left: 4px solid #5affff;

border-right: 4px solid #5affff;

border-bottom: 5px solid #5affff;

border-radius: 5px 5px 25px 25px;

background:
    linear-gradient(
        180deg,
        rgba(94, 234, 212, 0.20),
        rgba(0, 100, 130, 0.25)
    );

box-shadow:

    inset 0 0 12px rgba(90,255,255,0.4),

    0 0 8px #5affff;


}

/* basket lines */

.basket_body span {


position: relative;

display: inline-block;

width: 3px;

height: 52px;

margin-left: 15px;

margin-top: 5px;

background: #5affff;

opacity: 0.7;

box-shadow: 0 0 5px #5affff;

transform: rotate(8deg);

}

/* PLAY BUTTON */


.btu {

position: relative;

z-index: 5;

width: 190px;

height: 65px;

margin-top: 18px;

border: 2px solid #ffb3dc;

border-radius: 18px;

background:

    linear-gradient(
        135deg,
        #ff3f9f,
        #ff1493
    );

color: white;

font-size: 20px;

font-weight: bold;

letter-spacing: 2px;

cursor: pointer;

box-shadow:

    0 0 10px #ff4fa3,

    0 0 25px #ff1493,

    0 0 45px rgba(255, 20, 147, 0.6);

transition: 0.3s;


}

.btu:hover {

transform:
    translateY(-4px)
    scale(1.05);

background:

    linear-gradient(
        135deg,
        #5affff,
        #00aaff
    );

border-color: white;

box-shadow:

    0 0 10px #5affff,

    0 0 25px #00ffff,

    0 0 50px rgba(0, 255, 255, 0.8);


}

.btu:active {


transform: scale(0.96);


}
//jsconst playbutton = document.querySelector(".btu");
const player = document.querySelector(".basket");
const circles = document.querySelectorAll(".circle");

const scoreText = document.querySelector("h3 span:nth-child(1)");
const livesText = document.querySelector("h3 span:nth-child(2)");
const timerText = document.querySelector("h3 span:nth-child(3)");

const gameBox = document.querySelector(".box");

let lives = 3;
let score = 0;
let time = 60;

let gameRunning = false;

let gameLoop = null;
let timerInterval = null;

const ballSpeed = 4;



function updateScore() {


scoreText.textContent = "⭐ SCORE: " + score;


}



function updateLives() {

if (lives > 0) {

    livesText.textContent = "❤️".repeat(lives);

} else {

    livesText.textContent = "💔";

}


}



function updateTimer() {


timerText.textContent = "⏱ " + time;


}



function resetBall(circle) {


const maxLeft = gameBox.clientWidth - circle.offsetWidth;

const randomLeft =
    Math.floor(Math.random() * maxLeft);

circle.style.left = randomLeft + "px";

circle.style.top = "0px";


}



function centerPlayer() {


player.style.left = "50%";


}



function startGame() {

if (gameRunning) {
    return;
}


gameRunning = true;


lives = 3;
score = 0;
time = 60;


updateScore();
updateLives();
updateTimer();


centerPlayer();


// Reset balls

circles.forEach(function (circle, index) {

    circle.style.top =
        -(index * 120) + "px";

    const maxLeft =
        gameBox.clientWidth - circle.offsetWidth;

    const randomLeft =
        Math.floor(Math.random() * maxLeft);

    circle.style.left =
        randomLeft + "px";

});


playbutton.textContent = "⏸ RUNNING...";


console.log("🎮 GAME STARTED");


document.addEventListener(
    "keydown",
    movePlayer
);


// GAME LOOP

gameLoop = setInterval(
    updateGame,
    30
);


// TIMER

timerInterval = setInterval(
    function () {

        time--;

        updateTimer();


        if (time <= 0) {

            endGame("⏰ TIME UP!");

        }

    },
    1000
);


}



function updateGame() {

    if (!gameRunning) {
        return;
    }

    circles.forEach(function (circle) {

        // Ball ko neeche move karo
        const currentTop = circle.offsetTop;
        const newTop = currentTop + ballSpeed;

        circle.style.top = newTop + "px";


     

        const circleBox = circle.getBoundingClientRect();
        const playerBox = player.getBoundingClientRect();

        const collision =
            circleBox.left < playerBox.right &&
            circleBox.right > playerBox.left &&
            circleBox.top < playerBox.bottom &&
            circleBox.bottom > playerBox.top;


        

        if (collision) {

            score++;

            updateScore();

            console.log("🎯 CAUGHT! Score:", score);

            resetBall(circle);

            return;
        }


        // BALL MISS HO GAYI ❌
       

        if (circle.offsetTop >= gameBox.clientHeight) {

            lives--;

            updateLives();

            console.log("❌ MISSED! Lives:", lives);

            resetBall(circle);

            if (lives <= 0) {

                endGame("💀 GAME OVER!");

            }

        }

    });

}





function movePlayer(event) {


if (!gameRunning) {
    return;
}


const playerWidth =
    player.offsetWidth;

const boxWidth =
    gameBox.clientWidth;


const currentLeft =
    player.offsetLeft;


// LEFT

if (event.key === "ArrowLeft") {

    event.preventDefault();


    const newLeft =
        currentLeft - 18;


    if (newLeft >= 0) {

        player.style.left =
            newLeft + "px";

    }

}


// RIGHT

if (event.key === "ArrowRight") {

    event.preventDefault();


    const newLeft =
        currentLeft + 18;


    const maxLeft =
        boxWidth - playerWidth;


    if (newLeft <= maxLeft) {

        player.style.left =
            newLeft + "px";

    }

}


}



function endGame(message) {

if (!gameRunning) {
    return;
}


gameRunning = false;


clearInterval(gameLoop);
clearInterval(timerInterval);


gameLoop = null;
timerInterval = null;


document.removeEventListener(
    "keydown",
    movePlayer
);


playbutton.textContent =
    "🔄 PLAY AGAIN";


console.log(message);


setTimeout(function () {

    alert(
        message +
        "\n\n⭐ Final Score: " +
        score
    );

}, 100);


}



playbutton.addEventListener(
"click",
startGame
);


updateScore();

updateLives();

updateTimer();

centerPlayer();
