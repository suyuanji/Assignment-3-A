
//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('class','plot')
	//.attr('transform','translate()') --> complete this line here
	.attr('transform','translate('+margin.l+','+margin.t+')');

//Start with 100 symbols
var numOfSymbols = 100;

//Create an array, generate objects to push into the array
//Attributes of these symbols are
// --> x position: between 0 and width
// --> y position: betewen 0 and height
// --> size: between 0 and 100x100
// --> type: circle or square
// --> color

//With the array you've created and populated, draw circles to represent these symbols
var Symbols = [];
function runRandomSymbols() {


	for (var i = 0; i < numOfSymbols; i++) {
		console.log("rgb"+"("+Math.round((Math.random())*255)+", 0, 0)");
		var object = {
			x: Math.random() * width,
			y: Math.random() * height,
			size: [Math.random() * 50, Math.random()*50],
			type: Math.round(Math.random()),
			color: Math.round((Math.random())*255)
		}
		Symbols.push(object);
	}
	console.log(object);
	console.log(Symbols);
}
runRandomSymbols();

Symbols.forEach(drawdraw);

function drawdraw(symbol) {
	//decide drawn what shape
	if (symbol.type == 1) {
		plot
			.append('circle')
			.attr('cx', symbol.x)
			.attr('cy', symbol.y)
			.attr('r', symbol.size[0])
			.style('fill', "rgb"+"("+symbol.color+", 0, 0)")

	} else {
		plot
			.append('rect')
			.attr('x', symbol.x)
			.attr('y', symbol.y)
			.attr('width', symbol.size[0])
			.attr('height', symbol.size[1])
			.style('fill', symbol.color)
	}


}

