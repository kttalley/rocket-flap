const bottomTower3 = function (x, y) {
    Tile(x,y);
    Tile(x,y+100);
    Tile(x,y+200);
    Tile(x,y+300);
  };
  
  const topTower2 = function (x, y) {
      Tile(x, y);
      Tile(x, y + 100);
      Tile(x, y + 200);
  
      //   Tile(x,y+200);
  };
  const bottomTower2 = function (x, y) {
      Tile(x, y);
      Tile(x, y - 100);
      Tile(x, y - 200);
      //   Tile(x,y-200);
  };
  const topTower1 = function (x, y) {
      Tile(x+50, y);
  
      //   Tile(x,y+200);
  };
  const bottomTower1 = function (x, y) {
      Tile(x, y);
  
      //   Tile(x,y-200);
  };

let obst1 = 800;
let obst2 = 1200;
let obst3 = 1600;
let obst4 = 2000;
let obst5 = 1800;