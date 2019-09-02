	document.getElementById("viewer").src = "https://www.youtube.com/embed/FqLodG33S1Q";

    var lock1 = true;

    var lock2 = true;

    var user1Text = document.getElementById("user1Text");
    var user2Text = document.getElementById("user2Text");
    var user3Text = document.getElementById("user3Text");
    var user4Text = document.getElementById("user4Text");
    var user5Text = document.getElementById("user5Text");  
    var guesttext = document.getElementById("guestText"); 

    const searchBar = document.getElementById("myInput");
    const searchBar2 = document.getElementById("myInput2"); 

    var searchPos = document.getElementsByClassName("search-box");

    var mediaView = document.getElementById("socialBox");

    var socialBox = false;

    const user1 = document.getElementById("user1");
    const user2 = document.getElementById("user2");
    const user3 = document.getElementById("user3");
    const user4 = document.getElementById("user4");
    const user5 = document.getElementById("user5");
    const user6 = document.getElementById("user6");

    var players = [user1, user2, user3, user4, user5, user6];

    var playerSet = [];

    var centerCenterX = 37;
    var centerCenterY = 35.5;
    var centerLeftX = 22.5;
    var centerRightX = 52.5;
    var centerBottomY = 20;
    var centerBottomY2 = 50;
    var cornerX = 5;
    var cornerX2 = 70;
    var cornerY1 = 7;
    var cornerY2 = 64;
    var searchY = centerCenterY + 35;
    var searchY2 = centerBottomY2 + 35;
    var searchY3 = centerCenterY +50;
    var mediaCenterY = centerCenterY +15;
    var mediaCenterY2 = centerBottomY2;

  	var count = 0;

	var winCheck = window.matchMedia("(min-width: 798px)");
	var winCheck2 = window.matchMedia("(min-width: 1008px)");

	WidthChange2(winCheck2);	

	winCheck.addListener(WidthChange);
	winCheck2.addListener(WidthChange2);

	function WidthChange(mq) {
		let check = centerCenterY;
		if (mq.matches){

    		centerCenterY = 35.5+3;
			centerBottomY = 15+8.5;
			centerBottomY2 = 50+6;
			cornerY1 = 7+6;
			cornerY2 = 62;
			searchY = centerCenterY + 29;
    		searchY2 = centerBottomY2 + 20;
    		searchY3 = centerCenterY + 28;
    		mediaCenterY = centerCenterY +5;
    		mediaCenterY2 = centerBottomY2-5;
		}
		else{
    		centerCenterY = 35.5+7;
			centerBottomY = 20+5.5;
			centerBottomY2 = 50+10;
			cornerY1 = 7+10;
			cornerY2 = 64+2;
			searchY = centerCenterY + 25;
    		searchY2 = centerBottomY2 + 16;
    		searchY3 = centerCenterY + 28;
    		mediaCenterY = centerCenterY;
    		mediaCenterY2 = centerBottomY2-5;		
		}

		if(check != centerCenterY)
			reposition();
	}

	function WidthChange2(mq) {
		let check = centerCenterY;
		if (mq.matches){
			centerCenterY = 35.5;
			centerBottomY = 20;
			centerBottomY2 = 50;
			cornerY1 = 7;
			cornerY2 = 64;
			searchY = centerCenterY + 35;
    		searchY2 = centerBottomY2 + 35;
    		searchY3 = centerCenterY +50;
    		mediaCenterY = centerCenterY + 15;
    		mediaCenterY2 = centerBottomY2;
		}else{
			WidthChange(winCheck);	
		}

		if(check != centerCenterY)
			reposition();

	}


    function openClose() {

        playerSet = [];

        if (!socialBox) {

            mediaView.style.display = "none";

        }

        else {

            mediaView.style.display = "block";

        }

        for (var i = 0; i < players.length; i++) {

            if (!players[i].classList.contains("active"))

                players[i].style.display = "none";

            else {

                playerSet.push(players[i]);

            }

        }

        if (count == 0)

            count = playerSet.length;

        reposition();

    }

    function reposition() {

        if (mediaView.style.display === "block") {

            let playerPositionX = [
                centerLeftX, cornerX + 10, cornerX + 5, cornerX, centerCenterX, cornerX,
                cornerX2 - 10, cornerX + 5, cornerX, cornerX, cornerX,
                cornerX + 5, cornerX2, cornerX, cornerX,
                cornerX2, cornerX2, cornerX2,
                cornerX2, cornerX2,
                cornerX2
            ];

            let playerPositionY = [
                centerCenterY, centerBottomY, cornerY2, cornerY1, cornerY1, centerCenterY,
                centerBottomY, centerBottomY + 15, cornerY2, cornerY2, cornerY2,
                cornerY1, cornerY1, cornerY1, cornerY1,
                cornerY2, cornerY1, cornerY1,
                cornerY2, cornerY2,
                centerCenterY
            ];

            let mediaPositionX = [
                centerCenterX, centerRightX, centerCenterX,
                cornerX2 - 10, centerCenterX, centerCenterX, centerCenterX
            ];

            let mediaPositionY = [
                centerCenterY, centerCenterY, mediaCenterY2,
                centerCenterY, centerCenterY, mediaCenterY, centerCenterY 
            ];

            let searchSetX = [
                centerCenterX, centerRightX, centerCenterX,
                cornerX2 - 10, centerCenterX, centerCenterX, centerCenterX
            ];

            let searchSetY = [
                searchY, searchY, searchY2,
                searchY, searchY, searchY3, searchY
            ];

            let x = -1;
            let y = 5;

            for (let i = 0; i < playerSet.length; i++) {

                playerSet[i].style.left = playerPositionX[count + x] + "%";
                playerSet[i].style.top = playerPositionY[count + x] + "%";

                x = x + y;
                y = y - 1;

            }

            mediaView.style.left = mediaPositionX[count] + "%";
            mediaView.style.top = mediaPositionY[count] + "%";

            searchPos[0].style.left = searchSetX[count] + "%";
            searchPos[1].style.left = searchSetX[count] + "%";

            searchPos[0].style.top = searchSetY[count] + "%";
            searchPos[1].style.top = searchSetY[count] + "%";

        }
        else {
           let playerPositionX = [
                centerCenterX, centerLeftX, centerLeftX, cornerX, centerCenterX, centerCenterX - 32,
                centerRightX, centerRightX, cornerX, cornerX, cornerX + 20,
                centerCenterX, cornerX2, cornerX, cornerX + 20,
                cornerX2, cornerX2, cornerX2 - 20,
                cornerX2, cornerX2 - 20,
                centerCenterX + 33
            ];

           let playerPositionY = [
                centerCenterY, centerCenterY, centerBottomY, cornerY1, centerCenterY, centerCenterY,
                centerCenterY, centerBottomY, cornerY2, cornerY2, cornerY2,
                centerBottomY2, cornerY1, cornerY1, cornerY1,
                cornerY2, cornerY1, cornerY1,
                cornerY2, cornerY2,
                centerCenterY
            ];

            let x = -1;
            let y = 5;

            for (let i = 0; i < playerSet.length; i++) {

                playerSet[i].style.left = playerPositionX[count + x] + "%";
                playerSet[i].style.top = playerPositionY[count + x] + "%";

                x = x + y;
                y = y - 1;
            }
        }

    }

    openClose();

    function toggleUserStream(stream, user, text) {

    let y = user.children[0];
    let z = user.children[1];

    y.classList.add("lock");
    z.classList.add("lock");

    if (user.style.display === "none") {

        setTimeout(function () {    

            y.classList.remove("lock");
            z.classList.remove("lock");

            stream.play();
            stream.muted = false;

        }, 2000);

        text.textContent = text.textContent.substring(0, text.textContent.length - 2) + "OFF";

        user.style.display = "block";
        user.classList.add("active");

        count++;
    
        openClose(); 

    } else {

        y.classList.add("lock");
        z.classList.add("lock");

        stream.muted = true;
        stream.pause();

        text.textContent = text.textContent.substring(0, text.textContent.length - 3) + " ON";

        user.classList.remove("active");

        count--;

        setTimeout(function () { 

            openClose(); 

        }, 1850);

    }

    }

  function linkStream() {
  var x = document.getElementById("viewer");
  var y = document.getElementById("twitter");
  var a = document.getElementById("screen");
  var b = document.getElementById("screen2");

    socialBox = true;
    openClose();

  if (x.style.display === "none") {
    searchPos[0].style.display = "block";
    searchPos[1].style.display = "none";

    x.style.display = "block";

    y.style.display = "none";

    a.classList.remove("search3");
    b.classList.remove("search4");
    a.classList.add("search1");
    b.classList.add("search2");

    searchBar2.style.display = "none";
    searchBar2.style.left = "0";
    searchBar.style.left = "43%";
    searchBar.style.display = "block";
    openClose();
    
  } else {

    searchPos[0].style.display = "none";
    searchPos[1].style.display = "block";

    x.style.display = "none";

    y.style.display = "block";

    a.classList.remove("search1");
    b.classList.remove("search2");
    a.classList.add("search3");
    b.classList.add("search4");


    searchBar.style.display = "none";
    searchBar.style.left = "0";
    searchBar2.style.left = "43%";
    searchBar2.style.display = "block";
    openClose();
  }

}

    function searchFunction(bar) {
        if (bar === searchBar) {
            let x = searchBar.value.replace("watch?v=", "embed/");
            document.getElementById("viewer").src = x;
        }
        if (bar === searchBar2) {
            let x = searchBar2.value;
            document.getElementById("twitter").src = "https://twitframe.com/show?url=" + x;
        }

    }
