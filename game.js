const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const player = {
    x: canvas.width / 2 - 50,
    y: canvas.height - 30,
    width: 100,
    height: 20,
    speed: 10,
    color: "green"
};

const tasks = [];
const taskSpeed = 5;
let score = 0;

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawTask(task) {
    ctx.fillStyle = "red";
    ctx.fillRect(task.x, task.y, task.width, task.height);
}

function spawnTask() {
    const task = {
        x: Math.random() * (canvas.width - 100),
        y: 0,
        width: 100,
        height: 20
    };
    tasks.push(task);
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move player
    if (keys.ArrowLeft && player.x > 0) player.x -= player.speed;
    if (keys.ArrowRight && player.x < canvas.width - player.width) player.x += player.speed;

    // Spawn tasks
    if (Math.random() < 0.02) spawnTask();

    // Move tasks and check for collisions
    for (let i = tasks.length - 1; i >= 0; i--) {
        tasks[i].y += taskSpeed;

        // Check collision with player
        if (tasks[i].x < player.x + player.width &&
            tasks[i].x + tasks[i].width > player.x &&
            tasks[i].y < player.y + player.height &&
            tasks[i].y + tasks[i].height > player.y) {
            tasks.splice(i, 1);
            score++;
        }

        // Remove task if it goes off screen
        if (tasks[i].y > canvas.height) {
            tasks.splice(i, 1);
            gameOver();
            return;
        }

        drawTask(tasks[i]);
    }

    drawPlayer();

    // Display score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 30);

    requestAnimationFrame(update);
}

function gameOver() {
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Game Over!", canvas.width / 2 - 120, canvas.height / 2);
}

const keys = {};
window.addEventListener("keydown", (e) => keys[e.code] = true);
window.addEventListener("keyup", (e) => keys[e.code] = false);

update();
