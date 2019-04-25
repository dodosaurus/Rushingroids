class Ship {
    constructor(shipImg) {
        this.x = 25;
        this.y = 200;
        this.r = 35;
        this.moveSp = 3;
        this.shipImg = shipImg       
    }
    
    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x = this.x - this.moveSp;
        } else if (keyIsDown(RIGHT_ARROW)) {
            this.x = this.x + this.moveSp;
        } else if (keyIsDown(UP_ARROW)) {
            this.y = this.y - this.moveSp;
        } else if (keyIsDown(DOWN_ARROW)) {
            this.y = this.y + this.moveSp;
        } 
        
    }
    
    show() {
        
        imageMode(CENTER);
        image(this.shipImg, this.x, this.y, this.r, 25);
        
    }
      
}

class Shot {
    constructor() {
        this.x = mainShip.x + mainShip.r/2;
        this.y = mainShip.y;
        this.w = 15;
        this.h = 5;
        this.rad = 20;
        this.shotSp = 10;
        
    }
    
    show() {
        noStroke();
        fill(255,0,0);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h, this.rad);
        
    }
    
    flow() {
        this.x = this.x + this.shotSp;
        
    }
    
    offscreen() {
        if(this.x >= (this.w + width)) {
            return true;
        } else {
            return false;
        }
    }
    
}


