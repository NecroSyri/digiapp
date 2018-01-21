function toggleChooseArrows(toggle){
	if(!$(".inscreen.overlay").hasClass("chooseArrows") || toggle==false){
		$(".inscreen.overlay").addClass("chooseArrows");
		$(".inscreen.overlay").html("<div id=\"leftArrow\"></div><div id=\"rightArrow\"></div>");
	}else{

		$(".inscreen.overlay").removeClass("chooseArrows");
		$(".inscreen.overlay").html("");
	}
}