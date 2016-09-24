var canvas;
var canvasContext;
var ballX = 590;
var ballY = 300;
var ballSpeedX = 2;
var ballSpeedY = 2;
var player1 = 0;
var player2 = 0;
var paddle1X = 50;
var paddle1Y = 400;
var paddle2X = 1130;
var paddle2Y = 250;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	var framesPerSecond = 60;
	setInterval(callBoth, 1000/framesPerSecond);
}

var callBoth = function() {
	moveEverthing();
	drawEverything();
};

var moveEverthing = function() {
	ballX = ballX + ballSpeedX;
	ballSpeedX = ballSpeedX * 1.001;

	ballY = ballY + ballSpeedY;
	ballSpeedY = ballSpeedY * 1.001;

	if (ballX > (canvas.width+100)) {
		player1 = player1 + 1;
		ballX = 590;
		ballY = 300;
		ballSpeedX = -2;
		ballSpeedY = 2;
		console.log(player1, player2);
	}

	if (ballX < (0-100)) {
		player2 = player2 + 1;
		ballX = 590;
		ballY = 300;
		ballSpeedX = 2;
		ballSpeedY = 2;
		console.log(player1, player2);
	}

	if (ballY > (canvas.height-20) || ballY < 0) {
		ballSpeedY = ballSpeedY * -1;
	}

	if (ballX > 1110) {
		if (ballY > paddle2Y && ballY < (paddle2Y + 130)) {
			ballSpeedX = ballSpeedX * -1;
		}
	}

	if (ballY > paddle1Y && ballY < (paddle1Y + 130) && ballX > paddle1X && ballX < (paddle1X + 20)) {
		ballSpeedX = ballSpeedX * -1;
	}


	if (ballY > paddle2Y && ballY < (paddle2Y + 20) && ballX > paddle2X && ballX < (paddle2X + 20)) {
		ballSpeedY = ballSpeedY * -1;
	}
};

var drawEverything = function() {
	canvasContext.fillStyle = 'black';
	canvasContext.fillRect(0,0,canvas.width,canvas.height);
	canvasContext.fillStyle = 'white';
	canvasContext.fillRect(ballX,ballY,20,20);
	canvasContext.fillRect(paddle1X,paddle1Y,20,150);
	canvasContext.fillRect(paddle2X,paddle2Y,20,150);
	for (x = 25; x < canvas.height; x = x + 100) {
	canvasContext.fillRect(595,x,3,50);
	}
};