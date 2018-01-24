function eggsSelect(){
	if(d.egg<d.eggsList.length-1){
		d.egg++
	}else{
		d.egg=0;
	}
	display(d.eggsList[d.egg],"fix");
	debug("eggsSelect() - egg : "+d.eggsList[d.egg]);
	save();
}
function eggsConfirm(){

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
	debug("eggChoose() - toggleChooseArrows");
	toggleChooseArrows(true);
	d.process="eggs";
	d.stage="Egg";
	d.egg=0;
	save();
	display(d.eggsList[d.egg],"fix");
}
