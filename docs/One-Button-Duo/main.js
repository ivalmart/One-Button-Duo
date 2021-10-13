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

const G = {
  WIDTH: 100,
  HEIGHT: 100
};

options = {
  theme: 'pixel'
};

let player;
const playerSpeed = 0.5;
let shapeSpeed = 0.25;
let shapes = [];

class shape {
  constructor() {
    this.reset(); 
  }

  reset() {
    // Decide the shape
    let shapeNum = Math.floor(Math.random() * 4);
    if (shapeNum == 0) {
      this.shapeChar = 'a';
    } else if (shapeNum == 1) {
      this.shapeChar = 'b';
    } else if (shapeNum == 2) {
      this.shapeChar = 'c';
    } else {
      this.shapeChar = 'd';
    }
    
    // Decide spawn location
    this.y =  -5;
    this.x = Math.random() * G.WIDTH;
    clamp(this.x, 5, G.WIDTH - 5);
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

class PlayerShape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 'north'
  }

  // Player will be moving in a clockwise motion when pressing button
  update_Direction() {
    console.log("direction: " + this.direction);
    if(this.direction == 'north') { this.direction = 'east'; }   // Head East
    else if(this.direction == 'east') { this.direction = 'south'; }  // Head South
    else if(this.direction == 'south') { this.direction = 'west'; }   // Head West
    else { this.direction = 'north'; }   // Head North
  }

  // Updates the player's movement given a direction
  movement() {
    // checks to see where the player is heading towards && conditions are to check whether it has reached the boundary or not
    if(this.direction == 'north' && this.y >= 5) {
      this.y -= playerSpeed;
    } else if(this.direction == 'east' && this.x <= G.WIDTH - 5) {
      this.x += playerSpeed
    } else if(this.direction == 'south' && this.y <= G.HEIGHT - 5) {
      this.y += playerSpeed
    } else if(this.direction == 'west' && this.x >= 5) {
      this.x -= playerSpeed
    }
  }
}

function update() {
  if (!ticks) {
    player = new PlayerShape(G.WIDTH * 0.5, G.HEIGHT - 5);
  }

  // Player changes direction
  if(input.isJustPressed) {
    player.update_Direction()
  }

  // Movement
  player.movement()

  char("a", player.x, player.y)
  if (shapes.length < difficulty * 5) {
    let newShape = new shape();
    shapes.push(newShape);
  }

  // Move all shapes
  shapes.forEach(s => s.move());
}
