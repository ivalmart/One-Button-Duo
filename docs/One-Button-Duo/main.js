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
/**
 * @typedef {{
 * pos: Vector,
 * }} Player
 */

/**
 * @type { Player }
 */

let player;
let direction;
const playerSpeed = 0.5;

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
    player = {
      pos:vec(G.WIDTH * 0.5, G.HEIGHT - 5)
    };
    direction = 'north';
  }


  if(input.isJustPressed) {
    // Heading towards
    console.log("going " + direction);
    direction = update_Direction(direction)
  }

  // Movement
  if(direction == 'north') {
    player.pos = vec(player.pos.x, player.pos.y - playerSpeed);
  } else if(direction == 'east') {
    player.pos = vec(player.pos.x + playerSpeed, player.pos.y);
  } else if(direction == 'south') {
    player.pos = vec(player.pos.x, player.pos.y + playerSpeed);
  } else if(direction == 'west') {
    player.pos = vec(player.pos.x - playerSpeed, player.pos.y);
  }
  char("a", player.pos)

}

// Player will be moving in a clockwise motion 
function update_Direction(current_direction) {
  if(current_direction == 'north') { return 'east'; }   // Head East
  else if(current_direction == 'east') { return 'south'; }  // Head South
  else if(current_direction == 'south') { return 'west'; }   // Head West
  else { return 'north'; }   // Head North
}