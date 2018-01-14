var colors = generateRandomColors(6);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function(){
  
  colors = generateRandomColors(6);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;

  for(i=0; i<square.length; i++)
  {

  	square[i].style.backgroundColor = colors[i];
  }
  
    h1.style.backgroundColor = "steelblue";
});





for(var i = 0; i<square.length; i++)
{

	square[i].style.backgroundColor = colors[i];

	square[i].addEventListener("click", function()
	{
     var clickedColor = this.style.backgroundColor;
     if(clickedColor===pickedColor)
     {

     	
     	messageDisplay.textContent = "Correct";
     	changeColor(clickedColor);
     	resetButton.textContent = "Play Again";
     	h1.style.backgroundColor = clickedColor;
     }

     else {

     	this.style.backgroundColor = "#232323";
     	messageDisplay.textContent = "Try Again";
     }

	});
}

function changeColor(color)
{

	for(i = 0; i<square.length; i++)
		square[i].style.backgroundColor = color;
}


function pickColor()

{

   var random = Math.floor(Math.random() * colors.length);
   return colors[random];

}

function generateRandomColors(num){

	var arr = [];
    
    for(var i = 0; i<num; i++)

    {
      arr.push(randomColor());

    }

    return arr;



    }

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}