//https://www.cssscript.com/easy-sprite-animation-javascript-library-sprite-js/
//display

function display(mon,anim){
	$(".inscreen.mon").html("<div id=\"mon\"></div>");

	//eggs
	if(mon=="v1"||mon=="v2"||mon=="v3"||mon=="v4"||mon=="v5"){
		var eggNum = mon.replace("v","");
		$("#mon").css("background","url(\"../img/v1eggsBW.png\")");
		$("#mon").css("background-size","300%");
		$("#mon").css("background-position","0% 0");
	  var myAnimation = new AM.Sprite(document.getElementById('mon'),{
	    fps:5,
	    totalFames:18,
	    columns:3,
	    rows:6
	  });

	  switch(anim){
		  case "fix":
			  myAnimation.loopBetween(eggNum*3-2,eggNum*3-2,true);
			  myAnimation.pause();
		  break;
		  case "shake":
			  myAnimation.loopBetween(eggNum*3-2,eggNum*3-1,true);
		  break;
		  case "hatch":
			  myAnimation.fromTo(eggNum*3-2,eggNum*3,{
					onCompleteParams:null,
					onComplete:function(){
							//TODO - after hatching
							egg(p);
					}
				});
		  break;
			default:
				myAnimation.loopBetween(eggNum*3-2,eggNum*3-2,true);
				myAnimation.pause();
			break;
	  }
	}else{
		//mons 16x14
		$("#mon").css("background","url(\"../img/sprites/"+p.mon+".png\")");
		$("#mon").css("background-size","1600%");
		$("#mon").css("background-position","0% 0");
	  var myAnimation = new AM.Sprite(document.getElementById('mon'),{
	    fps:5,
	    totalFames:16,
	    columns:16,
	    rows:1
	  });
		switch(anim){
		  case "iddle":
			  myAnimation.loopBetween(p.sprite*3-2,p.sprite*3,true);
		  break;
			default:
				myAnimation.loopBetween(p.sprite*3-2,p.sprite*3,true);
			break;
	  }
	}
}

function toggleChooseArrows(toggle){
	if(!$(".inscreen.overlay").hasClass("chooseArrows") || toggle==false){
		$(".inscreen.overlay").addClass("chooseArrows");
		$(".inscreen.overlay").html("<div id=\"leftArrow\"></div><div id=\"rightArrow\"></div>");
	}else{

		$(".inscreen.overlay").removeClass("chooseArrows");
		$(".inscreen.overlay").html("");
	}
}
