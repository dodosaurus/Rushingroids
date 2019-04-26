class Asteroid {
    constructor(y) {
        this.x = 660;
        this.y = y;
        this.r = random(50, 120); // random(40, 100);
        this.col = random(50, 200);
        this.speed = 1.75;
    }
    
    show() {
        noStroke();
        fill(this.col);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r)
    }
    
    flow(addSpeed) {
        this.x = this.x - (this.speed + addSpeed);
    }
    
    //working only if PNG of ship have w and h equal
    touch(lod) {
        var d = dist(this.x, this.y, lod.x, lod.y);       
        if (d < (this.r/2 + lod.w/2)) {
            return true;
        }
    }
    
    offscreen() {
        if(this.x <= -this.r) {
            return true;
        } else {
            return false;
        }
    }
    
}