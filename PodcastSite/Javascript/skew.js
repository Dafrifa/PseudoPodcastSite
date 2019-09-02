var skewContainer	 = document.getElementById("skewContainer");
var translator 	   	 = document.getElementsByClassName("translator");
var skewedBox 		 = document.getElementsByClassName("skewedBox");

var cast	 = document.getElementById("cast");
var logo	 = document.getElementById("logo");

var aL = true;

function animationLock(){
	setTimeout(function(){    

   
	for(var i = 0; i<translator.length; i++){
		translator[i].classList.add("lock");
	}

	cast.classList.add("lock");
	logo.classList.add("lock");
	   turnOn();
	}, 2000);

}

function removeSkewContainer(){

setTimeout(function(){    
	skewContainer.style.display = "none";
	skewContainer.style.zIndex = -10000;
	}, 4500);

}

animationLock();
removeSkewContainer();


function animationOpen(){  
	turnOff();
	for(var i = 0; i<translator.length; i++){
		translator[i].classList.add("open");
	}

	cast.classList.add("open");
	logo.classList.add("open");

	skewContainer.style.display = "block";
	skewContainer.style.zIndex = 150;

	setTimeout(function(){    
		aL = true;

	}, 3000);

}

function animationReLock(){   
   turnOn();
	for(var i = 0; i<translator.length; i++){
		translator[i].classList.remove("open");
	}

	cast.classList.remove("open");
	logo.classList.remove("open");

removeSkewContainer();
}


function animationSwitch(){
	if(skewContainer.style.display === "none")
		aL = false;

	if(aL){
		animationReLock();
	}
	else{
		animationOpen();
	}
}

function turnOff(){
	stream1.pause();
	stream2.pause();
	stream3.pause();
	stream4.pause();
	stream5.pause();
	guest.pause();
}

function turnOn(){
	stream1.play();
	stream2.play();
	stream3.play();
	stream4.play();
	stream5.play();
	guest.play();
}
