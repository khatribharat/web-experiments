function GPSIndicator(directionInDegrees, directionIntervalInDegrees, positionIntervalInPixels) {
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", 500);
	svg.setAttribute("height", 500);
	var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	circle.setAttribute("cx", 250);
	circle.setAttribute("cy", 250);
	circle.setAttribute("r", 10);
	circle.setAttribute("fill", "blue");
	svg.appendChild(circle);
	var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
	var pathInstructions = [];
	pathInstructions.push("M 250 250");
	var alpha = directionInDegrees * Math.PI / 180;
	var beta = (directionInDegrees + directionIntervalInDegrees) * Math.PI / 180;
	var r = positionIntervalInPixels;
	var p1 = {"x": r * Math.cos(alpha), "y": r * Math.sin(alpha)};
	var p2 = {"x": r * Math.cos(beta), "y": r * Math.sin(beta)};
	pathInstructions.push("l " + p1.x + " " + p1.y)
	pathInstructions.push("M 250 250");
	pathInstructions.push("l " + p2.x + " " + p2.y)
	path.setAttribute("d", pathInstructions.join(" "));
	path.setAttribute("stroke", "black");
	svg.appendChild(path);
	return svg;
}
