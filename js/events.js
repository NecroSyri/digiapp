function events(message){
	var event = message.split(",")[0];
	var param = message.split(",")[1];
	debug("events() - event : "+event+" param : "+param);
	if(isNull(param)){
		window[event]();
	}else{
		window[event](param);
	}
}
