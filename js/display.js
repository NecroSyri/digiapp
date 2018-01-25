function toggleChooseArrows(toggle){
	debug("toggleChooseArrows() toggle : "+toggle);
	if((!$(".inscreen.overlay").hasClass("chooseArrows") && isNull(toggle)) || toggle=="true" || toggle==true){
		debug("toggleChooseArrows() ON");
		$(".inscreen.overlay").addClass("chooseArrows");
		$(".inscreen.overlay").html("<div id=\"leftArrow\"></div><div id=\"rightArrow\"></div>");
	}else{
		debug("toggleChooseArrows() OFF");
		$(".inscreen.overlay").removeClass("chooseArrows");
		$(".inscreen.overlay").html("");
	}
}

function display(mon,anim){
	$(".inscreen.mon").html("<div id=\"mon\"></div>");

	debug("display() - mon : "+mon+" anim : "+anim)
	$("#mon").css("background","url(\"../img/sprites/"+mon+".png\")");
	$("#mon").css("background-position","0% 0");
	if(bg.d.stage=="Egg"){
		$("#mon").css("background-size","300%");
		var myAnimation = new AM.Sprite(document.getElementById('mon'),{
			fps:5,
			totalFames:3,
			columns:3,
			rows:1
		});
	}else{
		$("#mon").css("background-size","1600%");
		var myAnimation = new AM.Sprite(document.getElementById('mon'),{
			fps:5,
			totalFames:16,
			columns:16,
			rows:1
		});
	}
	switch(anim){
		case "fix":
			myAnimation.loopBetween(1,1,true);
			myAnimation.pause();
		break;
		case "shake":
			myAnimation.loopBetween(1,2,true);
		break;
		case "hatch":
			myAnimation.fromTo(1,3,{
				onCompleteParams:null,
				onComplete:function(){
						//TODO - after hatching
				}
			});
		break;
		default:
			myAnimation.loopBetween(1,1,true);
			myAnimation.pause();
		break;
	}
}
