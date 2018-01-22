function events(message){
	var event = message.split(",")[0];
	var param = message.split(",")[1];
	debug("events() - event : "+event+" param : "+param);
	switch(event){
		case "toggleChooseArrows":
			toggleChooseArrows(param);
		break;
		default :
			debug("events() - event : "+event);
		break;
	}
}
