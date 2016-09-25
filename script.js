//call global variables
var canvas;
var canvasContext;
var ballX = 590;
var ballY = 300;
var ballSpeedX = 3;
var ballSpeedY = 3;
var player1 = 0;
var player2 = 0;
var paddle1X = 50;
var paddle1Y = 450;
var paddle2X = 1130;
var paddle2Y = 250;

//creates the canvas and calls the game function on an interval
window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');
	setInterval(callBoth, 1000/60);
}

var callBoth = function() {
	moveEverthing();
	drawEverything();
};

//moves everything on the canvas
var moveEverthing = function() {
	ballX = ballX + ballSpeedX;
	if (ballSpeedX < 4.5) {
		ballSpeedX = ballSpeedX * 1.001;
	}	

	ballY = ballY + ballSpeedY;

//player 1 scores on player 2
	if (ballX > (canvas.width+50)) {
		player1 = player1 + 1;
		ballX = 590;
		ballY = 300;
		ballSpeedX = 2;
		ballSpeedY = 2;
		console.log(player1, player2);
	}

//player 2 scores on player 1
	if (ballX < (0-50)) {
		player2 = player2 + 1;
		ballX = 590;
		ballY = 300;
		ballSpeedX = 2;
		ballSpeedY = 2;
		console.log(player1, player2);
	}

//bounces the ball off the top and bottom of the screen
	if (ballY > (canvas.height-20) || ballY < 0) {
		ballSpeedY = ballSpeedY * -1;
	}

//ball bounces off of paddle 2
	if (ballX > (paddle2X - 20) && ballX < paddle2X) {
		if (ballY > paddle2Y && ballY < (paddle2Y + 145)) {
			ballSpeedX = ballSpeedX * -1;
			if (ballY < (paddle2Y + 20)) {
				ballSpeedY = -10;
			} else if (ballY >= (paddle2Y + 20) && ballY <= (paddle2Y + 50)) {
				ballSpeedY = -3;
			} else if (ballY >= (paddle2Y + 50) && ballY <= (paddle2Y + 80)) {
				ballSpeedY = 1;
			} else if (ballY >= (paddle2Y + 80) && ballY <= (paddle2Y + 110)) {
				ballSpeedY = 3;
			} else if (ballY >= (paddle2Y + 110)) {
				ballSpeedY = 10;
			}
		}
	}

//ball bounces off of paddle 1
	if (ballX > paddle1X && ballX < (paddle1X + 20)) {
		if (ballY > paddle1Y && ballY < (paddle1Y + 145)) {
			ballSpeedX = ballSpeedX * -1;
			if (ballY < (paddle1Y + 20)) {
				ballSpeedY = -10;
			} else if (ballY >= (paddle1Y + 20) && ballY <= (paddle1Y + 50)) {
				ballSpeedY = -3;
			} else if (ballY >= (paddle1Y + 50) && ballY <= (paddle1Y + 80)) {
				ballSpeedY = 1;
			} else if (ballY >= (paddle1Y + 80) && ballY <= (paddle1Y + 110)) {
				ballSpeedY = 3;
			} else if (ballY >= (paddle1Y + 110)) {
				ballSpeedY = 10;
			}
		}
	}

//keyboard press
	window.addEventListener("keydown", moveUp, false);
	//window.addEventListener("keydown", 40, false);

	var moveUp = function (num) {
		if (num == 38) {
			paddle2Y = paddle2Y + -10;
		}
	};

};

//draws everything on the canvas
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



/*
function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
            break;
        case 38:
            // up key pressed
            break;
        case 39:
            // right key pressed
            break;
        case 40:
            // down key pressed
            break;  
    }   
}*/