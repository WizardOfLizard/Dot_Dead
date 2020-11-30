
//self explainitory
let gameRunning = false

//Counts how many waves have been sent on player, used for difficulty and score
let waveNum = 0;

//stores all data on the player
//postion(x, y), number of lives, and reload timer
let player = {x:300, y:300, lives:3, bulletTimer:0}

//bullets contains the positions, trajectories, affiliations, and statuses of all bullets
//Format: {x:number, y:number, ang:number(angle), afil:friend/foe, stat:live/dead}
let bullets = {}

//enemies contains the positions, states, bullet timers, and statuses of all enemies
//Format: {x:number, y:number, state:string, bulletTimer:number, stat:alive/dead}
let enemies = {}

//clears bullets that are not in play anymore
function trimBullets () {
    
}