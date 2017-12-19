//https://www.cssscript.com/easy-sprite-animation-javascript-library-sprite-js/
//display

function display(mon,anim){
	$(".inscreen").html("<div id=\"mon\"></div>");
  
	if(mon=="v1"||mon=="v2"||mon=="v3"||mon=="v4"||mon=="v5"){
		var eggNum = mon.replace("v","");
		$("#mon").addClass('egg');
	  var myAnimation = new AM.Sprite(document.getElementById('mon'),{
	    fps:5,
	    totalFames:18,
	    columns:3,
	    rows:6
	  });
	
	  switch(anim){
		  case "fix":
			  myAnimation.loopBetween(eggNum*3-2,eggNum*3-2,true);
			  myAnimation.pause();
		  break;
		  case "shake":
			  myAnimation.loopBetween(eggNum*3-2,eggNum*3-1,true);
		  break;
		  case "hatch":
			  myAnimation.loopBetween(eggNum*3-2,eggNum*3,true);
		  break;
	  }
	}
}
