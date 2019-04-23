class Ship {
    constructor() {
        this.x = 25;
        this.y = 200;
        this.r = 20;
        this.moveSp = 3;
    }
    
//    move() {
//        switch (keyIsDown(var a)) {
//            case LEFT_ARROW: 
//                this.x = this.x - this.moveSp;
//                break;
//            case RIGHT_ARROW: 
//                this.x = this.x + this.moveSp;
//                break;
//            case UP_ARROW: 
//                this.y = this.y - this.moveSp;
//                break;
//            case DOWN_ARROW: 
//                this.y = this.y + this.moveSp;
//                break;
//        } 
//    }
    
    
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
    
    zobraz() {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.r, this.r);
        
//        if(this.x == 0 || this.x == width || this.y == 0 || this.y == height) {
//            this.x = this.x;
//            this.y = this.y;
//        }
    }
      
}

class Shot {
    constructor() {
        this.x = mainShip.x + mainShip.r/2;
        this.y = mainShip.y;
        this.r = 5;
        this.shotSp = 10;
        
    }
    
    show() {
        noStroke();
        fill(255,0,0);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r, this.r);
    }
    
    flow() {
        this.x = this.x + this.shotSp;
    }
    
}
