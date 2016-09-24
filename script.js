var canvas;
var canvasContext;
var ballX = 50;
var ballY = 50;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	drawEverything();
}

var drawEverything = function() {
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(ballX,ballY,20,20);
};