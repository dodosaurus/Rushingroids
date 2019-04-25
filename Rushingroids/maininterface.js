class MainInterface {
    constructor() {
        
        this.font = 'Times New Roman';
        
        //score counter
        this.scoreCounter = 123;       
        this.scoreTextSize = 15;
        this.scoreX = 500;
        this.scoreY = 20;
    
        //ammo
        //pause 
        //warp speed loader to get to next lvl 
        
    }
    
    scoreShow() {
        
        textFont(this.font);
        textSize(this.scoreTextSize);
        fill(0,255,0);
        
        text("Score: " + asteroidsOut, this.scoreX, this.scoreY );
         //green text
    }
    
    showFramecount() {
        
        textFont(this.font);
        textSize(15);
        fill(255,0,0);
        
        text("Frames: " + frameCount, 10, 20);
    }
}