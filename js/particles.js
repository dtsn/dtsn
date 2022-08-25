const canvas = document.getElementById('particles');
const context =canvas.getContext('2d');
const COLOURS = ['63BFF0', 'EF33EC', 'F6BB45'];

let drawTriangle = () => {
	context.strokeStyle = 'rgb(246, 187, 69)';
	context.beginPath();
	context.moveTo(75,50);
	context.lineTo(100, 75);
	context.lineTo(100, 25);
	context.fill();
}
