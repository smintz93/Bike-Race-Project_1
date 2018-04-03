console.log("Bike Race ")
// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

class Obstacle {
	constructor(x, y, length, top) {
		this.x = x;
		this.y = y;
		this.length = length;
		this.speed = 2;
		this.isOnTheTopRow = top;
	}

	drawLine() {
		ctx.beginPath(); 
		ctx.strokeStyle = "black"
		ctx.moveTo(this.x, this.y);
		// console.log("Moving the line")
		ctx.lineTo(this.x, this.y + this.length);
		// console.log(this.x, this.y, this.length)
		ctx.stroke();


	}

	moveObstacles() {

		this.y += this.speed

		if(this.isOnTheTopRow) {
			if(this.y <= 0 || this.y + this.length > canvas.height/2) {
				// console.log("this.y (" + this.y + ") <= 0");
				// console.log("OR this.y(seeabove) + this.length (" + this.length + ") > canvas.height/2 (canvas.height = "+ canvas.height + ")");
				this.speed = this.speed * -1; //console.log("switching top")
			} else {
				// console.log("this.y: " + this.y)
				// console.log("not switching top")
			}
		} 
		else { // (bottom row)
			// if it hits the top of this section or the bottom of this seection, then...
			if(this.y <= canvas.height/2 || this.y + this.length > canvas.height) {
				// ..."bounce" (reverse direction)
				this.speed = this.speed * -1;
			}
		}

		this.drawLine();

	}
}

class Player {
	constructor(x,y,r,e,color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.e = e;
		this.color = color;
		this.math = Math.PI * 2;
		
	}

	makeBike() {

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, this.e, this.math)

		if (this.color === 1) {
			ctx.fillStyle = "red"
		} else {
			ctx.fillStyle = "blue"
		}
		ctx.fill();
		ctx.closePath();
	}

}

// GLOBAL VARS
let speed = 3;
let keys = [];
let animationHandle; // This is a handle for stopping the animate function
const playerOne = new Player(15,100,10,0,1);
const playerTwo = new Player(15,300,10,0,2);


const game = {
	obstacles: [],
	startLine: 35,
	finishLine: 655,
	startLineY1: 100,
	startLineY2: 300,
	lineLength: 40,

	drawCourse() {
		// Middle Line 
		ctx.beginPath();
		ctx.strokeStyle = "yellow";
		ctx.moveTo(0, 200);
		ctx.lineTo(700, 200);
		ctx.stroke();
		ctx.closePath();
		// Start Line 
		ctx.beginPath();
		ctx.strokeStyle = "green";
		ctx.moveTo(35, 0);
		ctx.lineTo(35, 400);
		ctx.stroke();
		ctx.closePath();
		// Finish Line
		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.moveTo(655, 0);
		ctx.lineTo(655, 400);
		ctx.stroke();
		ctx.closePath();

	},

	createObstacles(n) {

		const length = this.finishLine - this.startLine 

		// distance between the individual lines
		const distance = length / (n + 1)

		// draw n equally spaced lines
		for(let i = 1; i <= n; i++) {

			const obst = new Obstacle(this.startLine + distance * i, this.startLineY1, this.lineLength, true) 

			const obstRow2 = new Obstacle(this.startLine + distance * i, this.startLineY2, this.lineLength, false) 

			this.obstacles.push(obst)
			
			this.obstacles.push(obstRow2)			
 
		}

	},

	setup(){
		this.createObstacles(5);
	},

	determineWinner(){

		// Function to determine winner of the race

		// Where to call this function?

		if(playerOne.x >= 655)  {
			
			const ulWin = $("<ul>").text("Player One Wins")

			$("aside").append(ulWin)

			console.log("Player one wins")
		}

		else if(playerTwo.x >= 655)
			console.log("Player two wins")
	}




}




function collisionDectection() {

// console.log(playerTwo.x+ playerTwo.r)


	for(let i = 0; i < game.obstacles.length; i++) { 
	 
		if(playerOne.x + playerOne.r >= Math.round(game.obstacles[i].x -3) && playerOne.x + playerOne.r <= Math.round(game.obstacles[i].x +3) &&
				
			playerOne.y >= game.obstacles[i].y &&

			playerOne.y <= game.obstacles[i].y + game.obstacles[i].length) {

			console.log("Player One Collision")
		} 

	}

	for(let j = 0; j < game.obstacles.length; j++) {
		if(playerTwo.x + playerTwo.r >= Math.round(game.obstacles[j].x -3) && playerTwo.x + playerTwo.r <= Math.round(game.obstacles[j].x + 3) &&

			playerTwo.y >= game.obstacles[j].y &&

			playerTwo.y <= game.obstacles[j].y + game.obstacles[j].length) {

			console.log("Player Two Collision")
		}
	}

	
	 
	}



// AnimationFrame is here 
function animate() {

	// if right is pressed and p2 is to the left of the right side (-radius)
	if(keys[39] && playerOne.x <= 685) {

	 // collisionDectection();	
		// moves p1 to the right by speed
		playerOne.x = playerOne.x + speed


	}

	//  if up is pressed and p1 is to the bottom of the top side (-radius)

	if(keys[38] && playerOne.y >= 15) {
		// moves p1 up by speed
		playerOne.y = playerOne.y - speed

	}

	//  if left is pressed and p1 is to the right of the left side (-radius)
	if(keys[37] && playerOne.x >= 15) {
		// moves p1 to the left by sppeed
		playerOne.x = playerOne.x - speed 
	}
	
	// 	 if down is pressed, and p1 is above middle line (-radius)
	if(keys[40] && playerOne.y <= 185) {
		// moves p1 to down by speed 
		playerOne.y = playerOne.y + speed 	

	}

	// if d is pressed and p2 is to the left of the right side (-radius)
	if(keys[68] && playerTwo.x <= 685) {
		// moves p2 right by speed
		playerTwo.x = playerTwo.x + speed

	}

	// if w is pressed and p2 is below the top (-radius)
	if(keys[87] && playerTwo.y >= 215) {
		// moves p2 up by speed 
		playerTwo.y = playerTwo.y - speed

	}

	// if a is pressed and p2 is to the right of the left side (-radius)
	if(keys[65] && playerTwo.x >= 15) {
		// moves p2 to the left by speed
		playerTwo.x = playerTwo.x - speed
	}
	
	// if S is pressed, and p2 is above bottom (-radius)
	if(keys[83] && playerTwo.y <= 385) {
		// moves p2 down by speed px
		playerTwo.y = playerTwo.y + speed

	}



	// erase entire screen
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	// redraw lines
	game.drawCourse();


	// move obstacle objects (automatically calls drawLine() for each one)
	for(let i = 0; i < game.obstacles.length; i++) {
		game.obstacles[i].moveObstacles();
	}
	
	playerOne.makeBike();

	playerTwo.makeBike();	

	collisionDectection();




	// runs the animation
	animationHandle = window.requestAnimationFrame(animate);	



}




game.setup();


animate(); 





$("body").on("keydown", function (e) {
    keys[e.keyCode] = true;

});



$("body").on("keyup", function (e) {
    keys[e.keyCode] = false;
  
});















