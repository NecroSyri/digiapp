function events(message){
	var event = message.split(",")[0];
	var param = message.split(",")[1];
	debug("events() - event : "+event+" param : "+param);
	windowEvent(event,param);
	bg.save();
}

function resume(){
	display(bg.d.mon,bg.d.state);
}
