new p5();

let Flappy = {
    pos: createVector(150, 50),
    vel: createVector(0, 0),
    acc: createVector(0, 0),
    mass: createVector(0, 1),
    face: -45,
    asc: false,
    timer: 0,
    sze: 0.5,
    
    
    show: function () {
        // this.face= this.face - 1;
        this.timer = this.timer+ 0.1;
        translate(this.pos.x, this.pos.y);
        scale(this.sze);
        rotate(this.pos.y/15 - this.face);
        fill(230,150,0,250);
        triangle(15,25+this.timer/500,50,25+this.timer/500,32.5,random(25,55)+this.timer/50);
        
        noStroke();
        fill(0, 102, 153);
        triangle(0, 0, 0 + 30, 0, 0 + 15, 0 + 30);
        fill(130, 150, 153);
        triangle(0 + 30, 0 - 30, 0 + 15, 0 + 15, 0 + 50, 0 + 15);
        fill(0, 102, 153);
        triangle(0 + 30, 0, 0 + 60, 0, 0 + 45, 0 + 30);
        resetMatrix();

        // resetMatrix();
    },
    update: function () {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.add(this.mass);
        
        if(keyIsPressed || mouseIsPressed){
            this.vel.y = -5;
        }
        
        // if(this.asc === false){
        //     this.acc.add(this.mass);
        // }
        // // this.acc.rotate(this.face*random(10));
        // if (keyIsPressed || mouseIsPressed) {
        //     this.asc = true;
        // } else {
        //     this.asc = false;
        // }

        // if (this.asc === true) {
        //     this.acc.y = -0.25;
        // }
        
        //boundaries
        if(this.pos.y > height){
            this.vel.y = random(-10,-20);
            this.face = random (-200, 200);
            this.face = this.face-random(-20, 20);
        }
    },
    applyForce: function (force) {
        let forceCopy = force;
        this.mass.div(forceCopy);

        // this.acc.set(0,0);
    },
};


const flappy = function () {
    Flappy.update();
    Flappy.show();
    Flappy.applyForce(grav);
};