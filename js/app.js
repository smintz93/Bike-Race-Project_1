
console.log("Bike Race")



// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");





class Obstacle {
	constructor(x, y, length, top) {
		this.x = x;
		this.y = y;
		this.length = length;
		this.speed = 1;
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

		// console.log(this.y, this.speed)

		

		if(this.isOnTheTopRow) {
			if(this.y <= 0 || this.y + this.length > canvas.height/2) {
				// console.log("this.y (" + this.y + ") <= 0");
				// console.log("OR this.y(seeabove) + this.length (" + this.length + ") > canvas.height/2 (canvas.height = "+ canvas.height + ")");
				this.speed = this.speed * -1; console.log("switching top")
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


		// if(this.y <= 200 || this.y + this.length >= canvas.height) {
		// 	this.speed = this.speed * -1; console.log("switching bottom")
		// }

		this.drawLine();
		// Need to  tell it where to move it along Y axis
			// entire height of each half
			// canvas.height / 2 

		// Need to tell it how fast to move the y axis
			// speed variable

	}


	
}







const game = {
	obstacles: [],
	startLine: 35,
	finishLine: 655,
	startLineY1: 100,
	startLineY2: 300,
	lineLength: 40,




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

		const length = this.finishLine - this.startLine 

		// figure out distance between the individual lines
			// divide by n + 1 

		const distance = length / (n + 1)

		// move across length and draw line n times 

		for(let i = 1; i <= n; i++) {


			const obst = new Obstacle(this.startLine + distance * i, this.startLineY1, this.lineLength, true) 

			// console.log(obst)

			const obstRow2 = new Obstacle(this.startLine + distance * i, this.startLineY2, this.lineLength, false) 

			// console.log(obst, obstRow2)

			this.obstacles.push(obst)
			
			this.obstacles.push(obstRow2)			
 
		}

	}

}




// AN OBJECT IS AN INSTANCE OF A CLASS
// WHEN YOU INSTANTIATE A CLASS YOU CREATE AN OBJECT BASED ON THAT BLUEPRINT
// 'THIS' REFERS TO THAT PARTICULAR INSTANCE 


// START OF PLAYER // 

let speed = 3;
let keys = [];


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
		// console.log(this.x, this.y)

		if (this.color === 1) {
			ctx.fillStyle = "red"
		} else {
			ctx.fillStyle = "blue"
		}
		ctx.fill();
		ctx.closePath();
	}


}


const playerOne = new Player(15,100,10,0,1)


const playerTwo = new Player(15,300,10,0,2)


let it;
// This is the animate function

function move() {

		if(keys[39] && playerOne.x <= 685) {
			playerOne.x = playerOne.x + speed

		}

		if(keys[38] && playerOne.y >= 15) {
			playerOne.y = playerOne.y - speed

		}

		if(keys[37] && playerOne.x >= 15) {
			playerOne.x = playerOne.x - speed 
		}
		
		if(keys[40] && playerOne.y <=185) {
			playerOne.y = playerOne.y + speed 	

		}

		if(keys[68] && playerTwo.x <= 685) {
			playerTwo.x = playerTwo.x + speed
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


	ctx.clearRect(0, 0, canvas.width, canvas.height)

	game.createCourse();


	// Need to call the draw line function and move Obsta

	for(let i = 0; i < game.obstacles.length; i++) {
		game.obstacles[i].moveObstacles();

	}
	

	// moveObstacles();

	playerOne.makeBike();

	playerTwo.makeBike();	


	it = window.requestAnimationFrame(move);	


}


function setup(){
	// all the setup goes here
	game.createObstacles(5);
}

setup();


move();


document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    console.log(keys)
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
    // console.log(keys)
});















