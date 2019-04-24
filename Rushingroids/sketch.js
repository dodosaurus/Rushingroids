let mainShip;
let asteroid = [];
let bullets = [];
let bcgImg;
let betaAst;

function preload() {
    bcgImg = loadImage('assets/background.jpg')
}

function setup() {
    frameRate(30);
    createCanvas(600, 400);
    mainShip = new Ship();
    asteroid.push(new Asteroid(random(20,380)));
//    betaAst = new Asteroid();  
 
}

function draw() {
    background(0); // (bcgImg) ak chcem pozadie
    fill(255,0,0);
    text(frameCount, 20, 20);
    

     for(var i = asteroid.length - 1; i >= 0; i--) {
        asteroid[i].show();
        asteroid[i].flow();
        
        if (asteroid[i].touch(mainShip)) {
            console.log('TOUCH');
        }
    }
       if (frameCount % 75  == 0) {
        asteroid.push(new Asteroid(random(20, 380)));
    }
     
    mainShip.show();
    mainShip.move();
    
    for(var i = bullets.length - 1; i >= 0; i--) {
        bullets[i].show();
        bullets[i].flow();
    }
    
    /*if (keyIsDown(SPACE)) {
        bullets.push(new Shot);
    }
 */
}

function mousePressed() {
    bullets.push(new Shot);
}

function collision () {
    
}


function startGame() {
    
    
}

