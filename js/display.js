//display
function display(){
  $(".inscreen").html(d.mon);
}

function displayEgg(){
    $(".inscreen").html("<div id=\"mon\"></div>");
  $("#mon").addClass('egg');
  var myAnimation = new AM.Sprite(document.getElementById('mon'),{
    fps:5,
    totalFames:12,
    columns:3,
    rows:4
  });
  myAnimation.loopBetween(1,2,true);

//https://www.cssscript.com/easy-sprite-animation-javascript-library-sprite-js/
/*
var myAnimation = new AM.Sprite(document.getElementById('demo'), {
    totalFrames: 14,
    columns: 5,
    rows: 3
});

myAnimation.element.onclick = function () {
  if (myAnimation.running) {
    myAnimation.pause();
  } else {
    myAnimation.loopBetween(myAnimation.currentFrame, 0, true);
  }
};

myAnimation.loopBetween(1, 7, true);
*/
/*
  $(".egg").animateSprite({
      fps: 0,
      animations: {
          stop: [0],
          shake: [0, 1],
          pop:[0,1,2]
      },
      loop: true,
      complete: function(){
          // use complete only when you set animations with 'loop: false'
          alert("animation End");
      }
  });
  $(".egg").animateSprite("play","shake");
*/
}
