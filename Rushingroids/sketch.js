//main runtime objects
let UI;
let asteroidsOut = 0;

//level difficulty modifiers
let nextLevelCap = 10;
let nextLevelSpeed = 0.05;
let currentLevelSpeed = 0;

let mainShip;
let asteroid = [];
let bullets = [];

//preloading variables
let bcgImg, shipImg;

function preload() {
    bcgImg = loadImage('assets/background.jpg');
    shipImg = loadImage('assets/spaceshipPixelRed.png');
}

function setup() {
    frameRate(50);
    createCanvas(600, 400);
    
    UI = new MainInterface();
    
    mainShip = new Ship(shipImg);
    asteroid.push(new Asteroid(random(20,380)));
 
}

//main runtime iterator
function draw() {
    background(0); // (bcgImg) ak chcem pozadie
    fill(255,0,0);

    //asteroids runtime
    for(var i = 0; i <= asteroid.length - 1; i++) {
        asteroid[i].show();
        asteroid[i].flow(currentLevelSpeed);
    //collision
        if (asteroid[i].touch(mainShip)) {
            console.log('TOUCH WARNING');
        }
    //clearing not visible asteroids, counting score    
        if (asteroid[i].offscreen()) {
            asteroid.shift();
            asteroidsOut++;
            
            //difficulty - speed of asteroids rising   
            if (asteroidsOut % nextLevelCap == 0) {
                currentLevelSpeed = currentLevelSpeed + nextLevelSpeed
            } 
        }
     
    }
    
    //asteroids generator
    if (frameCount % 75  == 0) {
        asteroid.push(new Asteroid(random(20, 380)));
    }
     
    //ship runtime
    mainShip.show();
    mainShip.move();
    
    
    //bullets runtime
    for(var i = 0 ; i <= bullets.length - 1; i++) {
        bullets[i].show();
        bullets[i].flow();
        
        if (bullets[i].offscreen()) {
            bullets.shift();
        }
    }
    
    //showing UI elements
    UI.scoreShow();
    UI.showFramecount();
    
    //difficulty - speed of asteroids rising   
//    if (asteroidsOut % nextLevelCap == 0) {
//        currentLevelSpeed = currentLevelSpeed + nextLevelSpeed
//    } 
//    
    //helping code here
//    console.log("Asteroids: " + asteroid.length);
//    console.log("Bullets: " + bullets.length);
    console.log(currentLevelSpeed);

}

function mousePressed() {
    //bullets generator
    bullets.push(new Shot);
}

function collision () {
    
}


function startGame() {
    
    
}

