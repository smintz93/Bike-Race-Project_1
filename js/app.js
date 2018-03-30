console.log("Bike Race")



// CANVAS 

const canvas = document.getElementById("my-canvas");

const ctx = canvas.getContext("2d");


ctx.beginPath();

ctx.strokeStyle = "yellow";

ctx.moveTo(0, 200);
ctx.lineTo(700, 200);
ctx.stroke();


ctx.fill();

ctx.closePath();


