function Tile(x, y, rez) {
    rectMode(CENTER);
    translate(x, y);
    fill(25, 180, 125);
    rect(0, 0, rez, rez);
    resetMatrix();
    rectMode(CORNER);

    if (dist(Flappy.pos.x, Flappy.pos.y, x, y) < rez/2) {
        let timer = 0;
        if(timer < 1){
            timer++;
            Flappy.pos.x -= 5;
        }if(timer > 1){
            Flappy.pos.x = Flappy.pos.x;
        }
        background(255,0,0);
    }
};