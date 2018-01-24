function eggsSelect(){
	if(d.egg<d.eggsList.length-1){
		d.egg++
	}else{
		d.egg=0;
	}
	display(d.eggsList[d.egg],d.state);
	debug("eggsSelect() - egg : "+d.eggsList[d.egg]);
	save();
}
function eggsConfirm(){
	d.process = "menu";
	d.egg = d.eggsList[d.egg];
	d.mon = d.egg;
	toggleChooseArrows(false);
	bg.setTimer(5,"eggShake");
	bg.setTimer(10,"eggHatch");
	save();
}
function eggsCancel(){

}

function eggChoose(){
	if(isNull(d.eggsList)){
		debug("eggChoose() - first play");
		//first play
		d.eggsList = ["v1","v2","v3","v4","v5"];
		save();
	}
	d.process="eggs";
	d.stage="Egg";
	d.egg=0;
	d.state="fix"
	save();
	debug("eggChoose() - toggleChooseArrows");
	toggleChooseArrows(true);
	display(d.eggsList[d.egg],d.state);
}

function eggShake(){
	d.state ="shake";
	save();
	display(d.mon,d.state);
}

function eggHatch(){
	d.state="hatch";
	save();
	display(d.mon,d.state);
}
