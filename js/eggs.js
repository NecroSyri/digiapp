function eggChoose(){
	if(isNull(d.eggsList)){
		debug("eggChoose() - first play");
		//first play
		d.eggsList = ["v1","v2","v3","v4","v5"];
		save();
	}
	debug("eggChoose() - toggleChooseArrows");
	trigger("toggleChooseArrows,true");
}
