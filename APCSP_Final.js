
console.log("Hello World.")

//self explainitory
let gameRunning = false

//variables for design
let reload = 100

let bulletSpeed = 10

let playerSpeed = 35

let enemySpeed = 20

//Counts how many waves have been sent on player, used for difficulty and score
let waveNum = 0;

//stores all data on the player
//postion(x, y), number of lives, and reload timer
let player = {x:300, y:300, lives:3, bulletTimer:0}

//enemies contains the positions, states, bullet timers, and statuses of all enemies
//Format: {x:number, y:number, state:string, bulletTimer:number, stat:alive/dead}
let enemies = []

//bullets contains the positions, trajectories, affiliations, and statuses of all bullets
//Format: {x:number, y:number, ang:number(angle), afil:friend/foe, stat:live/dead}
let bullets = []

//clear enemies that are dead
function trimEnemies () {
    if (enemies.length >= 1) {
        enemies = enemies.filter(enemy => {
            if (enemy.stat === "alive") {
                return true
            } else {
                return false
            }
        })
    }
}

//clears bullets that are not in play anymore
function trimBullets () {
    if (bullets.length >= 1) {
        bullets = bullets.filter(bullet => {
            if (bullet.stat === "live") {
                return true
            } else {
                return false
            }
        })
    }
}

//spawns enemies with according attributes
function spawnEnemy (xPos, yPos) {
    enemies.push({x: xPos, y: yPos, state: "Spawned", bulletTimer: 100, stat: "alive"})
    console.log(`Enemy spawned @ (${xPos}, ${yPos})`)
}

//spawns bullets with according attributes
function spawnBullet (xPos, yPos, angle, affili) {
    bullets.push({x: xPos, y: yPos, ang: angle, affil: affili, stat: "live"})
    console.log(`Bullet spawned @ (${xPos}, ${yPos})`)
}

//draws player
function drawPlayer () {
    noStroke()
    fill(7, 172, 232)
    ellipse(player.x, player.y, 25, 25)
}

//draws enemies
function drawEnemies () {
    if (enemies.length >= 1) {
        noStroke()
        fill(224, 54, 54)
        enemies.forEach(enemy => {
            if (enemy.stat === "alive") {
                ellipse(enemy.x, enemy.y, 25, 25)
            }
        })
    }
}

//draws bullets
function drawBullets () {
    if (bullets.length >= 1) {
        noStroke()
        bullets.forEach(bullet => {
            if (bullet.stat === "live") {
                if (bullet.affil === "friend") {
                    fill(35, 194, 45)
                } else {
                    fill(227, 127, 14)
                }
                ellipse(bullet.x, bullet.y, 10, 10)
            }
        })
    }
}

//Makes canvas and is useful for debugging
function setup () {
    createCanvas(600, 600)
    spawnEnemy(300, 100)
}

//Runs repeatedly, most important stuff happens here
function draw () {
    background(255, 255, 255)
    
    drawPlayer()
    drawEnemies()
    drawBullets()
}