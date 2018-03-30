console.log("Bike Race")



// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");


// Middle Line 

ctx.beginPath();

ctx.strokeStyle = "yellow";

ctx.moveTo(0, 200);
ctx.lineTo(700, 200);
ctx.stroke();



ctx.closePath();

// 

// Start Line 

ctx.beginPath();

ctx.strokeStyle = "green";

ctx.moveTo(35, 0);
ctx.lineTo(35, 400);
ctx.stroke();




ctx.closePath();

// Finish LIne

ctx.beginPath();

ctx.strokeStyle = "white";

ctx.moveTo(655, 0);
ctx.lineTo(655, 400);
ctx.stroke();




ctx.closePath();

// Obstacles // Need 8 total. 4 on each course 

const Obstacles = function () {


// First Row
	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(157, 100);
	ctx.lineTo(157, 140);
	ctx.stroke();

	ctx.closePath();

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(157, 300);
	ctx.lineTo(157, 340);
	ctx.stroke();

	ctx.closePath();

// Second Row 

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(283, 100);
	ctx.lineTo(283, 140);
	ctx.stroke();

	ctx.closePath();

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(283, 300);
	ctx.lineTo(283, 340);
	ctx.stroke();

	ctx.closePath();

// Third Row 

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(409, 100);
	ctx.lineTo(409, 140);
	ctx.stroke();

	ctx.closePath();

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(409, 300);
	ctx.lineTo(409, 340);
	ctx.stroke();

	ctx.closePath();

// Fourth Row 	

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(560, 100);
	ctx.lineTo(560, 140);
	ctx.stroke();

	ctx.closePath();

	ctx.beginPath();

	ctx.strokeStyle = "black"

	ctx.moveTo(560, 300);
	ctx.lineTo(560, 340);
	ctx.stroke();

	ctx.closePath();




}

Obstacles();







