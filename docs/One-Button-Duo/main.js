// CMPM 170 One Button Duo Project
// Robert Radzville
// Ivan Martinez-Arias

title = "Duo Game";

description = `
`;

characters = [
  `
  PPPPP
  P   P
  P   P
  P   P
  PPPPP
  `
  ,`
  B   B
   B B
    B
   B B
  B   B
  `,
  `
    G
   GGG
   G G
  GG GG
  GGGGG
  `,
  `
   RRR
  R   R
  R   R 
  R   R
   RRR  
  `
];

options = {};

let shapeSpeed = 0.25;

class shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.reset(); 
  }

  reset() {
    // Decide the shape
    let shapeNum = Math.floor(Math.random() * 4);
    if (shapeNum == 0) {
      this.shapeChar = 'b';
    } else if (shapeNum == 1) {
      this.shapeChar = 'c';
    } else if (shapeNum == 2) {
      this.shapeChar = 'd';
    } else {
      this.shapeChar = 'e';
    }
  }

  move() {
    this.y += shapeSpeed;
    char(this.shapeChar, this.x, this.y);
  }

  checkScreen() {
    if (this.y > 100) {
      this.reset();
    }
  }
}

function update() {
  if (!ticks) {
  }
}
