console.log("Bike Race")



// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");

const createCourse = function() {
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

}

createCourse();

// AN OBJECT IS AN INSTANCE OF A CLASS
// WHEN YOU INSTANTIATE A CLASS YOU CREATE AN OBJECT BASED ON THAT BLUEPRINT
// 'THIS' REFERS TO THAT PARTICULAR INSTANCE 

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


// need a function that creates 4 Obsticles and draws a line every 126 X value (Top row)
// need a function that creates 4 Obsticles and draws a line every 126 X value (bottom row)


const createObstacles = function() {

	
}

const obstacle1 = new Obstacle(126, 100, 40);
const obstacle2 = new Obstacle(252, 100, 40);
const obstacle3 = new Obstacle(378, 100, 40);
const obstacle4 = new Obstacle(504, 100, 40);
const obstacle5 = new Obstacle(126, 300, 40);
const obstacle6 = new Obstacle(252, 300, 40);
const obstacle7 = new Obstacle(378, 300, 40);
const obstacle8 = new Obstacle(504, 300, 40);





// const createObstacles = function() {
// 		obstacle1.drawLine();
// 		obstacle2.drawLine();
// 		obstacle3.drawLine();
// 		obstacle4.drawLine();
// 		obstacle5.drawLine();
// 		obstacle6.drawLine();
// 		obstacle7.drawLine();
// 		obstacle8.drawLine();
// 	}


// createObstacles();


		












// Obstacles // Need 8 total. 4 on each course 

// const Obstacles = function () {


// // First Row
// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(157, 100);
// 	ctx.lineTo(157, 140);
// 	ctx.stroke();

// 	ctx.closePath();

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(157, 300);
// 	ctx.lineTo(157, 340);
// 	ctx.stroke();

// 	ctx.closePath();

// // Second Row 

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(283, 100);
// 	ctx.lineTo(283, 140);
// 	ctx.stroke();

// 	ctx.closePath();

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(283, 300);
// 	ctx.lineTo(283, 340);
// 	ctx.stroke();

// 	ctx.closePath();

// // Third Row 

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(409, 100);
// 	ctx.lineTo(409, 140);
// 	ctx.stroke();

// 	ctx.closePath();

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(409, 300);
// 	ctx.lineTo(409, 340);
// 	ctx.stroke();

// 	ctx.closePath();

// // Fourth Row 	

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(560, 100);
// 	ctx.lineTo(560, 140);
// 	ctx.stroke();

// 	ctx.closePath();

// 	ctx.beginPath();

// 	ctx.strokeStyle = "black"

// 	ctx.moveTo(560, 300);
// 	ctx.lineTo(560, 340);
// 	ctx.stroke();

// 	ctx.closePath();




// }

// Obstacles();







