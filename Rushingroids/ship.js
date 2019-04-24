class Ship {
    constructor() {
        this.x = 25;
        this.y = 200;
        this.r = 20;
        this.moveSp = 3;
        
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
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.r, this.r);
        
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
    
}


