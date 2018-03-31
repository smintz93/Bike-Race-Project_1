console.log("Bike Race")



// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

class Obstacle {
	constructor(x, y, length) {
		this.x = x;
		this.y = y;
		this.length = length;
		// this.location2 = 157
		// this.length2 = 140

	}
	drawLine() {
		ctx.beginPath();
		ctx.strokeStyle = "black"
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x, this.y + this.length);
		ctx.stroke();


	}
	
}


const game = {
	obstacles: [],
	startLine: 35,
	finishLine: 655,

	createCourse() {
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
		console.log("create obsticles called", n)

		// todraw evenly spaced lines, we need to 

		// figure out how long the course is

		const length = this.finishLine - this.startLine 

		console.log(length)

		// figure out distance between the individual lines
			// divide by n + 1 

		const distance = length / (n + 1)


		// move across length and draw line n times 

		for(let i = 1; i <= n; i++) {

			const obst = new Obstacle(this.startLine + distance * i, 100, 40) 

			const obstRow2 = new Obstacle(this.startLine + distance * i, 300, 40) 
			obst.drawLine();
			obstRow2.drawLine();

			this.obstacles.push(obst)
			
			this.obstacles.push(obstRow2)

			console.log(obst)
 
		}


	},


	moveObstacles(){

		// Need to find where Obstacles are currently being stored (Obstacles Array)

		// Need to tell them where to move (Up and down) and where to stop

		// Need to tell them how fast they are going to move.




 		 }



}


// game.moveObstacles();


game.createCourse();
game.createObstacles(5)

// AN OBJECT IS AN INSTANCE OF A CLASS
// WHEN YOU INSTANTIATE A CLASS YOU CREATE AN OBJECT BASED ON THAT BLUEPRINT
// 'THIS' REFERS TO THAT PARTICULAR INSTANCE 


let speed = 5;


class Player {
	constructor(x,y,r,e,color) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.e = e;
		this.color = color;
		this.math = Math.PI * 2;
		this.direction = "left";

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

	// This is causing both players to move. 

	move() {
		switch(this.direction) {
			case "right":
				this.x = this.x + speed

			break;

			case "up":
				this.y = this.y - speed
			break;

			case "down":
				this.y = this.y + speed

			break;

			case "left":
				this.x = this.x - speed

			break;

		}

	}



}


const playerOne = new Player(15,100,10,0,1)


const playerTwo = new Player(15,300,10,0,2)

 // Need to clear the animation after its used 



function animateCanvas() {

	ctx.clearRect(0,0, canvas.width, canvas.height)
	playerOne.move(); // 
	playerOne.makeBike();
	playerTwo.move()
	playerTwo.makeBike();	

	

	// window.requestAnimationFrame(animateCanvas);	

}


document.addEventListener("keydown", function(event) {
	const key = event.keyCode
	console.log(key)

	if(key == 39) {
		playerOne.direction = "right"
		console.log(playerOne.direction)
		playerOne.x = playerOne.x + speed
	}
	else if(key == 38) {
		playerOne.direction = "up"
		console.log(playerOne.direction)
		playerOne.y = playerOne.y - speed
	}

	else if(key == 37) {
		playerOne.direction = "left"
		console.log(playerOne.direction)
		playerOne.x = playerOne.x - speed 
	}

	else if(key == 40) {
		playerOne.direction = "down"
		console.log(playerOne.direction)
		playerOne.y = playerOne.y + speed


	// This is clearing the board
	// Hitting the down arrow is making everything go away

	
	}


	// This is clearing the 

	ctx.clearRect(0, 0, canvas.width, canvas.height)
	game.createCourse();
	game.createObstacles(5)


	// else if (key == 68) {
	// 	playerTwo.direction = "right"
		
	// 	playerTwo.x = playerTwo.x + speed
	// }
	// else if(key == 87) {
	// 	playerTwo.direction = "up"
		
	// 	playerTwo.y = playerTwo.y - speed
	// }

	// else if(key == 65) {
	// 	playerTwo.direction = "left"

	// 	playerTwo.x = playerTwo.x - speed
	// }

	// else if(key == 83) {
	// 	playerTwo.direction = "down"

	// 	playerTwo.y = playerTwo.y + speed
	// }

	playerOne.makeBike();

	playerTwo.makeBike();

	playerOne.move();	
// 
	// playerTwo.move();



})

// 

	playerOne.makeBike();

	playerTwo.makeBike();


	// If this is called. The ball moves around like a snake and there is no background
	// Everything is being cleared

	// animateCanvas();



















