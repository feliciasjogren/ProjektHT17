var nextButton = document.getElementById("next");
var imgElement = document.getElementsByTagName("img")[0];

var images = [
	"port1.jpg",
	"port2.jpg",
	"port3.jpg"
];

var index = 0;

function showNextImg(){
	index++;
	var shouldResetIndex = index === images.length;

	if(shouldResetIndex) {
		index = 0;
	}

	imgElement.setAttribute("src", images[index]);

};


nextButton.addEventListener("click", showNextImg)

showNextImg();

var timer = setInterval(showNextImg, 2000);

var stopButton = document.getElementById("stop");

stopButton.addEventListener("click", function(){
	clearInterval(timer);
})


$(document).ready(function(){
	$("button").click(function(){
		$("div").animate({
			height: 'toggle'
		});
	});
});