const canvas = document.getElementById("particles");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const context = canvas.getContext("2d");
const COLOURS = [
	[239, 51, 236],
	[99, 191, 240],
	[246, 187, 69],
	[255, 255, 255],
];

const roundedPolygon = (ctx, points, radius) => {
    const distance = (p1, p2) => Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)

    const lerp = (a, b, x) => a + (b - a) * x

    const lerp2D = (p1, p2, t) => ({
        x: lerp(p1.x, p2.x, t),
        y: lerp(p1.y, p2.y, t)
    })

    const numPoints = points.length

    let corners = []
    for (let i = 0; i < numPoints; i++) {
        let lastPoint = points[i]
        let thisPoint = points[(i + 1) % numPoints]
        let nextPoint = points[(i + 2) % numPoints]

        let lastEdgeLength = distance(lastPoint, thisPoint)
        let lastOffsetDistance = Math.min(lastEdgeLength / 2, radius)
        let start = lerp2D(
            thisPoint,
            lastPoint,
            lastOffsetDistance / lastEdgeLength
        )

        let nextEdgeLength = distance(nextPoint, thisPoint)
        let nextOffsetDistance = Math.min(nextEdgeLength / 2, radius)
        let end = lerp2D(
            thisPoint,
            nextPoint,
            nextOffsetDistance / nextEdgeLength
        )

        corners.push([start, thisPoint, end])
    }

	ctx.beginPath();
    ctx.moveTo(corners[0][0].x, corners[0][0].y)
    for (let [start, ctrl, end] of corners) {
        ctx.lineTo(start.x, start.y)
        ctx.quadraticCurveTo(ctrl.x, ctrl.y, end.x, end.y)
    }

    ctx.closePath();
	return ctx;
}




let rgbToString = (rgb) => {
	return `rgb(${rgb.join(",")})`;
};

let transpose = (startingPos, x, y) => {
	return {
		x: startingPos.x + x,
		y: startingPos.y + y,
	};
}

function drawRectangle(position, rotation = 0) {
	context.lineWidth = 5;
	context.strokeStyle = rgbToString(COLOURS[0]);
	context.rotate(rotation * Math.PI / 180);
	roundedPolygon(context, [position, transpose(position, 38, 0), transpose(position, 38, 38), transpose(position, 0, 38)], 5).stroke();
};

function drawTriangle(position, rotation = 0) {
	context.lineWidth = 5;
	context.strokeStyle = rgbToString(COLOURS[1]);
	context.rotate(rotation * Math.PI / 180);
	roundedPolygon(context, [position, transpose(position, 38, 0), transpose(position, 19, 38)], 5).stroke();
};

function drawLine(position, rotation = 0) {
	context.lineWidth = 5;
	context.strokeStyle = rgbToString(COLOURS[2]);
	context.rotate(rotation * Math.PI / 180);
	roundedPolygon(context, [position, transpose(position, 38, 0)], 5).stroke();
};

var particles = {},
    particleIndex = 0,
    settings = {
      density: 20,
      particleSize: 10,
      startingX: canvas.width,
      startingY: 0,
      gravity: 0.5,
      maxLife: 100
    };

function Particle() {
	// Establish starting positions and velocities
	this.x = settings.startingX;
	this.y = settings.startingY;

	// Random X and Y velocities
	this.vx = Math.random() * 20 - 10;
	this.vy = Math.random() * 20 - 5;



	const shape = Math.floor(Math.random() * (1 - 0 + 2) + 0);
	switch (shape) {
		case 0:
			this.shape = 'Rectangle';
			break;
		case 1:
			this.shape = 'Triangle';
			break;
		case 2:
			this.shape = 'Line'
			break;
	}

	// Add new particle to the index
	particleIndex ++;
	particles[particleIndex] = this;
	this.id = particleIndex;
	this.life = 0;
}

Particle.prototype.draw = function() {
	this.x += this.vx;
	this.y += this.vy;

	// Adjust for gravity
	this.vy += settings.gravity;

	// Age the particle
	this.life++;

	// If Particle is old, remove it
	if (this.life >= settings.maxLife) {
	  delete particles[this.id];
	}


	window['draw' + this.shape]({x: this.x, y: this.y}, 0);

	// Create the shapes
	// context.clearRect(settings.leftWall, settings.groundLevel, canvas.width, canvas.height);
	// context.beginPath();
	// context.fillStyle="#ffffff";
	// context.arc(this.x, this.y, settings.particleSize, 0, Math.PI*2, true);
	// context.closePath();
	// context.fill();
  }

  var posX = canvas.width,
	posY = 0;

  setInterval(function() {
	context.fillStyle = "rgba(75,73,239,0.8)";
	context.fillRect(0, 0, canvas.width, canvas.height);

	// Draw the particles
	for (var i = 0; i < settings.density; i++) {
	  if (Math.random() > 0.97) {
		// Introducing a random chance of creating a particle
		// corresponding to an chance of 1 per second,
		// per "density" value
		new Particle();
	  }
	}

	for (var i in particles) {
	  particles[i].draw();
	}
  }, 30);


// drawRectangle({x: 50, y: 50}, 5);
// drawTriangle({x: 100, y: 100}, 0);
// drawLine({x: 150, y: 100});
