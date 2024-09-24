const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 150;
canvas.height = 150;

const gameRadius = canvas.width / 2;

let blackBall = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 3,
    angle: Math.random() * 2 * Math.PI
};

let whiteBalls = [];

function createWhiteBall() {
    const angle = Math.random() * 2 * Math.PI;
    const distance = (gameRadius - 20) * Math.random();
    const x = canvas.width / 2 + Math.cos(angle) * distance;
    const y = canvas.height / 2 + Math.sin(angle) * distance;

    whiteBalls.push({
        x: x,
        y: y,
        radius: 10
    });
}

function moveBlackBall() {
    blackBall.x += Math.cos(blackBall.angle) * blackBall.speed;
    blackBall.y += Math.sin(blackBall.angle) * blackBall.speed;

    if (blackBall.x - blackBall.radius <= 0 || blackBall.x + blackBall.radius >= canvas.width) {
        blackBall.angle = Math.PI - blackBall.angle;
    }

    if (blackBall.y - blackBall.radius <= 0 || blackBall.y + blackBall.radius >= canvas.height) {
        blackBall.angle = -blackBall.angle;
    }
}

function checkCollision() {
    for (let i = 0; i < whiteBalls.length; i++) {
        const whiteBall = whiteBalls[i];
        const dist = Math.hypot(blackBall.x - whiteBall.x, blackBall.y - whiteBall.y);

        if (dist - blackBall.radius - whiteBall.radius < 1) {
            whiteBalls.splice(i, 1); // Remove the white ball
            if (whiteBalls.length < 15) {
                createWhiteBall(); // Add a new white ball if there are fewer than 15
            }
        }
    }
}

function drawBall(ball, color) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the black ball
    drawBall(blackBall, "black");

    // Draw the white balls
    for (let whiteBall of whiteBalls) {
        drawBall(whiteBall, "red");
    }
}

function gameLoop() {
    moveBlackBall();
    checkCollision();
    draw();

    requestAnimationFrame(gameLoop);
}

// Initialize game with one white ball
createWhiteBall();

// Start game loop
gameLoop();

canvas.addEventListener("click", ()=>{
    canvas.classList.add("hidden");
})


// dark mode
const input = document.getElementById("dark");
const hero = document.querySelector("body");
const footer = document.querySelector("footer");
const header = document.querySelector("header");


input.addEventListener("click", () =>{
    hero.classList.toggle("darkmode");
    footer.classList.toggle("darkfooter");
    header.classList.toggle("darkfooter");

})

// hamburger menu

const dropdownButton = document.getElementById("dropdown-Button");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", ()=>{
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? 'none' : "block";
    dropdownButton.textContent = dropdownButton.textContent === "close" ? 'menu' : 'close';
})

window.addEventListener('click', (event) => {
    if(!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)){
        dropdownMenu.style.display = 'none';}
})