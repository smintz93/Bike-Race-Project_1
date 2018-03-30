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


	// need a function that creates 4 Obsticles and draws a line every 126 X value (Top row)
	// need a function that creates 4 Obsticles and draws a line every 126 X value (bottom row)
	// 630 / 5 = 126
	// Need a loop to create lines every 126?

	createObstacles(n) {
		console.log("create obsticles called", n)
		for(let i = 0; i < n; i ++) {

			const obst = new Obstacle(6, 100, 40)

			obst.drawLine();

			this.obstacles.push(obst)

			console.log("for loop to create obstacles", i)

		}

	}

}

game.createCourse();
game.createObstacles(5)

// AN OBJECT IS AN INSTANCE OF A CLASS
// WHEN YOU INSTANTIATE A CLASS YOU CREATE AN OBJECT BASED ON THAT BLUEPRINT
// 'THIS' REFERS TO THAT PARTICULAR INSTANCE 

























