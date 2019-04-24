//main runtime objects
let mainShip;
let asteroid = [];
let bullets = [];
//preloading variables
let bcgImg, shipImg;

function preload() {
    bcgImg = loadImage('assets/background.jpg');
    shipImg = loadImage('assets/spaceship.png');
}

function setup() {
    frameRate(60);
    createCanvas(600, 400);
    mainShip = new Ship();
    asteroid.push(new Asteroid(random(20,380)));
 
}

//main runtime iterator
function draw() {
    background(0); // (bcgImg) ak chcem pozadie
    fill(255,0,0);
    text(frameCount, 20, 20);
    
    //asteroids runtime
    for(var i = asteroid.length - 1; i >= 0; i--) {
        asteroid[i].show();
        asteroid[i].flow();
        
        if (asteroid[i].touch(mainShip)) {
            console.log('TOUCH');
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
    for(var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].show();
        bullets[i].flow();
    }
    

}

function mousePressed() {
    //bullets generator
    bullets.push(new Shot);
}

function collision () {
    
}


function startGame() {
    
    
}

