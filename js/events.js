function events(message){
	load();
	var event = message.split(",")[0];
	var param = message.split(",")[1];
	debug("events() - event : "+event+" param : "+param);
	windowEvent(event,param);
	save();
}

function resume(){
	display(d.mon,d.state);
}
