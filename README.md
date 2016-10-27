frontend-nanodegree-arcade-game
===============================

DOWNLOADING AND RUNNING INSTRUCTION

To download the game go to my github page www.github.com/ashish/master.Clone or download the arcade-game folder.
After downloading open the index.html file in the browser to run the game.




 DISCRIPTION OF GAME

The task of the game is to make the boy raech the river which is on the other side of the footpath.
But this is not so easy because in your way enemy bugs will come and you have to protect the boy from these enemies.
If any of the enemy collides with the boy the gam e restarts.
On successfully completing the game will give you notification and the game will restart.




 CONTROLLS FOR GAME 
 
To defend the boy from enemies u can move hime using below mentioned keys.
To run the game just press arrow keys.

up: for moving up

down: for moving down

left:for moving left

Right:for moving right



   


 DISCRIPTION OF FILES


The game engine lies in the file named engine.js in the js folder.It has the function named main() in function
Engine() which continuosly in loop calls itself and inside it, it calls other functions to update the screen,timer.
It has checkCollisions() function to check whether the boy is collided with the enemy or not.
It has (lowx,highx) range for x axis and (lowy,highy) range for y axis for the collosion detection. Means. if in this range of 
enemy's surrounding, the player comes it will be known as collosion.
All the character loading functions are present in the resource.js file.
The app.js file contains constructors for making charaters. In that update function update the location of characters in the game according to 
code entered. render() fuction is used to draw the image at specified location of specified character.
THE handleInput() functions is used to update the character x,y position value based on the keyboard press which is detected by adding 
eventListner to the keyss and the function is provide at the last of app.js file.
All the character images are present in images folder.index.html file has html code for game.In css folder css file for the game is present.

Enjoy!!!!!!!!!!!
