//display
function display(){
  $(".inscreen").html(d.mon);
}

function displayEgg(eggNum,animName){
    $(".inscreen").html("<div id=\"mon\"></div>");
  $("#mon").addClass('egg');
  var myAnimation = new AM.Sprite(document.getElementById('mon'),{
    fps:5,
    totalFames:18,
    columns:3,
    rows:6
  });

  switch(animName){
	  case "fix":
		  myAnimation.loopBetween(eggNum,eggNum,true);
		  myAnimation.pause();
	  break;
	  case "shake":
		  myAnimation.loopBetween(1,1,true);
	  break;
	  case "hatch":
		  myAnimation.loopBetween(1,1,true);
	  break;
  }
//https://www.cssscript.com/easy-sprite-animation-javascript-library-sprite-js/
/*
var myAnimation = new AM.Sprite(document.getElementById('demo'), {
    totalFrames: 14,
    columns: 5,
    rows: 3
});
*/
}
