// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.loc=function(x,y) {
        this.x=x;

        this.y=y;

    }
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {          

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x >505) {                     // this is handling the character positional range in 
        this.x=0;
    }

    this.x=this.x+(dt*50);            

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {        
   
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method. 
var player=function(){ 
                   
    this.sprite = 'images/char-boy.png';
    this.x=250;
    this.y=350;

    this.loc=function(x,y) {
        this.x=this.x+x;
        this.y=this.y+y;
  } 
};


player.prototype=Object.create(Enemy.prototype);  
player.prototype.constructor=player;



player.prototype.update = function() {            
  // below conditions are making sure that the hero (person) should remain whithin the boundary of the game window 
    
  
};


player.prototype.handleInput=function(key){
   // below conditions are executed at the appropriate key press and it makes move the character 
  // at the step of 101px in y-axis directon and 83px in x-axis direction.
   
    if (key==="left") {
     this.loc(-83,0);

    }
    if (key==="right") {
     this.loc(-83,0);
    }
    if (key==="up") {

     this.loc(0,-101);
    }
    if (key==="down") {
     this.loc(0,101);
    }  

this.key=key;
this.update();
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var en1=new Enemy();
var en2=new Enemy();
var en3=new Enemy();
var en4=new Enemy();
en1.loc(200,120);
en2.loc(10,60);
en3.loc(440,220);
en4.loc(350,30);

var allEnemies=[en1,en2,en3,en4];      
var player=new player();                      


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
// console.log(allowedKeys[e.keyCode]);
    player.handleInput(allowedKeys[e.keyCode]);
});
