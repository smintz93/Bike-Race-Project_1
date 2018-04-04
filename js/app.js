console.log("Bike Race ")
// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

class Obstacle {
	constructor(x, y, length, top) {
		this.x = x;
		this.y = y;
		this.length = length;
		this.speed = Math.floor(Math.random() * 3 + 1);
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
	constructor(y, playerNumber) {
		this.x = 15;
		this.y = y;
		this.r = 10;
		this.e = 0;
		this.playerNumber = playerNumber;
		this.math = Math.PI * 2;
		
	}

	initialize() {
		// reset x
		this.x = 15;
	
		// reset y
		if(this.playerNumber === 1) {
			this.y = 100;
		} else {
			this.y = 300;
		}
		
		this.makeBike();
	}

	makeBike() {

		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, this.e, this.math)

		if (this.playerNumber === 1) {
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
const playerOne = new Player(100, 1);
const playerTwo = new Player(300, 2);


const game = {
	obstacles: [],
	startLine: 35,
	finishLine: 655,
	startLineY1: 100,
	startLineY2: 300,
	lineLength: 50,
	p1Points: 0,
	p2Points: 0,
	round: 1,

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

		// erase canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height)


		// redraw course and obstacles
		game.drawCourse();

		// delete obstacles here


		this.obstacles.length = 0;

		
		// create different amount of obstacles based on round number? 
		this.createObstacles(5);

		
		playerOne.initialize();
		playerTwo.initialize();

		// playerOne.makeBike();	
		// playerTwo.makeBike();


		animate();

		// this.gameover();

	},


	determineWinner(){


		if(playerOne.x >= 655)  {
			
			game.p1Points ++ 

			game.round += 1 

			$("#race-wins-1").text("Race Wins: " + game.p1Points);

			console.log("Player one wins")

			$("#winner").text("Player One Wins!")

			return true;

		}



		 if(playerTwo.x >= 655) {

		 	game.p2Points ++

		 	game.round += 1 

		 	$("#race-wins-2").text("Race Wins: " + game.p2Points);

		 	console.log("Player two wins")

		 	$("#winner").text("Player Two Wins")		
		 
		 	return true;

		} else {

		 	return 0;


		}		

		
	},

	gameover() {

		if(game.p1Points === 3 || game.p2Points === 3) {
			window.alert("gameover")

			// stop animation 
		}
	}   



}



function collisionDectection(x,y) {

// console.log(playerTwo.x+ playerTwo.r)



	for(let i = 0; i < game.obstacles.length; i++) { 
	 
		if(playerOne.x + playerOne.r >= Math.round(game.obstacles[i].x -2) && playerOne.x + playerOne.r <= Math.round(game.obstacles[i].x +2) &&
				
			playerOne.y >= game.obstacles[i].y &&

			playerOne.y <= game.obstacles[i].y + game.obstacles[i].length) {

			// console.log("Player One Collision")
			return true;

		} 

	}

	for(let j = 0; j < game.obstacles.length; j++) {
		if(playerTwo.x + playerTwo.r >= Math.round(game.obstacles[j].x -2) && playerTwo.x + playerTwo.r <= Math.round(game.obstacles[j].x + 2) &&

			playerTwo.y >= game.obstacles[j].y &&

			playerTwo.y <= game.obstacles[j].y + game.obstacles[j].length) {

			// console.log("Player Two Collision")
			return true;
		
		}
	}

			return false;
	 
}



// AnimationFrame is here 
function animate() {

 
	if(keys[39] && playerOne.x <= 685) {

		const obstacleHit =  collisionDectection(playerOne.x, playerOne.y + speed)
	
	if(obstacleHit) {


	} else 

		playerOne.x = playerOne.x + speed

	}

	if(keys[38] && playerOne.y >= 15) {
	
		playerOne.y = playerOne.y - speed

	}

	if(keys[37] && playerOne.x >= 15) {
	
		playerOne.x = playerOne.x - speed 
	}
	

	if(keys[40] && playerOne.y <= 185) {

		playerOne.y = playerOne.y + speed 	

	}

	
	if(keys[68] && playerTwo.x <= 685) {

		const obstacleHit = collisionDectection(playerTwo.x, playerTwo.y + speed)

		if(obstacleHit) {

		} else {

			playerTwo.x = playerTwo.x + speed
		}

	}

	
	if(keys[87] && playerTwo.y >= 215) {

		playerTwo.y = playerTwo.y - speed

	}

	if(keys[65] && playerTwo.x >= 15) {
	
		playerTwo.x = playerTwo.x - speed
	}
	
	
	if(keys[83] && playerTwo.y <= 385) {
	
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


	if(game.determineWinner() == true || game.determineWinner() == true){


		game.setup();

		game.gameover();

		return;
		
	}   


	// runs the animation
	animationHandle = window.requestAnimationFrame(animate);	

} // animate


game.setup();


$("body").on("keydown", function (e) {
    keys[e.keyCode] = true;

});



$("body").on("keyup", function (e) {
    keys[e.keyCode] = false;
  
});















