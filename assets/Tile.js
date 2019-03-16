function Tile(x, y) {
    rectMode(CENTER);
    translate(x, y);
    fill(25, 180, 125);
    rect(0, 0, 100, 100);
    resetMatrix();
    rectMode(CORNER);
    if (dist(Flappy.pos.x, Flappy.pos.y, x, y) < 60) {
        background(255, 0, 0);
    }
};