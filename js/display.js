//display
function display(){
  $(".inscreen").html(d.mon);
}

function displayEgg(){
    $(".inscreen").html("<div id=\"mon\"></div>");
  $("#mon").addClass('egg');
/*
  $(".egg").animateSprite({
      fps: 12,
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
