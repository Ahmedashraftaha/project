var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch

// Image List
images[0] = "p1.jpg";
images[1] = "p2.jpg";
images[2] = "p3.jpg";
images[3] = "p4.jpg";
images[4] = "p5.jpg";
images[5] = "p6.jpg";

// Change Image
function changeImg() {
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if (i < images.length - 1) {
		// Add 1 to Index
		i++;
	} else {
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;