$(document). ready(function() {
 'use strict' ;
	paper. install(window);
	paper. setup(document. getElementById('mainCanvas' ));
	
	
	var c = Shape. Circle(200, 200, 80);
	c. fillColor = 'black' ;
	var text = new PointText(200, 200);
	text. justification = 'center' ;
	text. fillColor = 'white' ;
	text. fontSize = 20;
	text. content = 'hello world' ;
	
	
	var tool = new Tool();
	tool. onMouseDown = function(event) {
		var c = Shape. Circle(event.point, 20);
		var Rcolor = Math.trunc(Math.random()*255).toString(16);
		
		var Gcolor = Math.trunc(Math.random()*255).toString(16);
		var Bcolor = Math.trunc(Math.random()*255).toString(16);
		var circleColor = "#"+Rcolor+Gcolor+Bcolor
		c. fillColor = circleColor
	}
	paper. view. draw();
});
