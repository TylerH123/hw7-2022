var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = this.document.getElementById("player1"); 
	video.load(); 
	video.loop = false; 
	video.autoplay = false; 
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause(); 
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9; 
	console.log(video.playbackRate); 
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 1.11111; 
	console.log(video.playbackRate); 
});