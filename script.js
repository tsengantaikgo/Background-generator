var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); //input
var color2 = document.querySelector(".color2"); //input
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, "
		+ color1.value
		+ ", "
		+ color2.value
		+ ")";

	css.textContent = body.style.background + ";";
}

//RUN THE FUNCTION at the beginning.
setGradient();

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.
// RGB (Red, Green, Blue) are 8 bit each.
// The range for each individual colour is 0-255 (as 2^8 = 256 possibilities).
// The combination range is 256*256*256.
// console.log(typeof (Math.floor(Math.random() * 256)));  NUMBER //
var colorNumber = [];
var colorNumberList = [];
function addList() {
	for (var i = 0; i < 3; i++) {
		var a = Math.floor(Math.random() * 256);
		colorNumberList.push(String(a));
		colorNumber.push(a);
	}
}

function colorRandomOne() {
	addList();
	var randonA = "rgb(" + colorNumberList[0] + ", " + colorNumberList[1] + ", " + colorNumberList[2] + ")";
	return randonA;
}

function colorRandomTwo() {
	addList();
	var randonB = "rgb(" + colorNumberList[3] + ", " + colorNumberList[4] + ", " + colorNumberList[5] + ")";
	return randonB;
}


function clearcolorNumberList() {
	colorNumberList = [];
	colorNumber = [];
}

function RandomBackround() {
	body.style.background =
		"linear-gradient(to right, "
		+ colorRandomOne() + ", "
		+ colorRandomTwo()
		+ ")";
	css.textContent = body.style.background + ";";

	// hex #XXXXXX
	var hexColor1 = colorNumber[0].toString(16) + colorNumber[1].toString(16) + colorNumber[2].toString(16);
	var hexColor2 = colorNumber[3].toString(16) + colorNumber[4].toString(16) + colorNumber[5].toString(16);
	color1.value = "#" + hexColor1.toUpperCase();
	color2.value = "#" + hexColor2.toUpperCase();
	setGradient();
	clearcolorNumberList();
}

button.addEventListener("click", RandomBackround);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// HEX color #XXXXXX
// function getRandomColor() {
// 	return Math.floor(Math.random()*16777215).toString(16);
// }

// console.log("#" + getRandomColor());
// // #b08ea3