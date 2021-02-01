var numcolors=6;
var pickedColor;
var colors=[];

var squares=document.querySelectorAll(".square");
var dispColor=document.getElementById("DispColor");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeBtn=document.querySelectorAll(".modeBtn");

init();

function init(){
	setupButtons();
	setupSquares();
	reset();
}

function setupButtons(){
	for(var i=0;i<modeBtn.length;i++){
		modeBtn[i].addEventListener("click",function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numcolors=3;
		}else{
			numcolors=6;
		}
		reset();
		});
	}
}

function setupSquares(){
	for (var i =0; i <squares.length; i++){
		squares[i].addEventListener("click",function(){
		    var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				msg.textContent="Correct";
				resetButton.textContent = "Play Again";
				changeColor(clickedColor);
				h1.style.background=clickedColor;
			}
			else{
				this.style.background="#232323";
				msg.textContent="Try Again";
			}	
		});
	}	
}

function reset(){
	colors = generateRandomColors(numcolors);
	pickedColor = pickColor();
	dispColor.textContent = pickedColor;
	h1.style.background="steelblue";
	for (var i =0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];	
		}
		else{
			squares[i].style.display="none";
		}	
	}
	msg.textContent="";
	resetButton.textContent="New Colors";	
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numcolors=3;
// 	colors = generateRandomColors(numcolors);
// 	pickedColor = pickColor();
// 	dispColor.textContent = pickedColor;
// 	for (var i =0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];	
// 		}
// 		else{
// 			squares[i].style.display="none";
// 		}
// 	}
// 	h1.style.background="steelblue";
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numcolors=6;
// 	colors = generateRandomColors(numcolors);
// 	pickedColor = pickColor();
// 	dispColor.textContent = pickedColor;
// 	for (var i =0; i < squares.length; i++) {
// 		squares[i].style.background=colors[i];
// 		squares[i].style.display="block";
// 	}
// 	h1.style.background="steelblue";
// });

resetButton.addEventListener("click",function(){
	reset();
});

function changeColor(color){
	for (var i =0; i < squares.length; i++) {
		squares[i].style.background=color;
	}
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr =[];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	"rbg(0,22,3)"
	return "rgb(" + r +", " + g + ", " + b +")";
}