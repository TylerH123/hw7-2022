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

document.querySelector("#skip").addEventListener("click", function() {
	let curTime = video.currentTime; 
	if (curTime + 10 > video.duration) 
		video.currentTime = 0; 
	else {
		video.currentTime += 10; 
	}
	console.log(video.currentTime); 
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) 
		video.muted = false; 
	else {
		video.muted = true; 
	}
});