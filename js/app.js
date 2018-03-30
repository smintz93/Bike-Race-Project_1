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

			obst.drawLine();

			this.obstacles.push(obst)
			
			console.log(obst)
 
		}


	}

}

game.createCourse();
game.createObstacles(5)

// AN OBJECT IS AN INSTANCE OF A CLASS
// WHEN YOU INSTANTIATE A CLASS YOU CREATE AN OBJECT BASED ON THAT BLUEPRINT
// 'THIS' REFERS TO THAT PARTICULAR INSTANCE 

























