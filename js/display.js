function toggleChooseArrows(toggle){
	debug("toggleChooseArrows() toggle : "+toggle);
	if((!$(".inscreen.overlay").hasClass("chooseArrows") && isNull(toggle)) || toggle=="true"){
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
	$("#mon").css("background","url(\"../img/sprites/"+p.mon+".png\")");
	$("#mon").css("background-size","1600%");
	$("#mon").css("background-position","0% 0");
	switch(anim){
		default :
		break;
	}
}
