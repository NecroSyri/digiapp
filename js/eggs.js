function eggChoose(){
	if(isNull(d.eggsList)){
		//first play
		d.eggsList = ["v1","v2","v3","v4","v5"];
		save();
	}
	trigger("toggleChooseArrows,true");
}