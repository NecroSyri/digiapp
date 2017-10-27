// Eggs
function chooseEgg(){
  d.option = "egg";
  localStorage.setItem("option",d.option);
  if(d.egg == null){
    d.egg = "red"
    localStorage.setItem("egg",d.egg);
  }
  show_egg()
}
function select_egg(){
  switch(d.egg){
    case "red":
      d.egg="blue";
    break;
    case "blue":
      d.egg="green";
    break;
    case "green":
      d.egg="yellow";
    break;
    case "yellow":
      d.egg="lightblue";
    break;
    case "lightblue":
      d.egg="red";
    break;
  }
  show_egg();
  localStorage.setItem("egg",d.egg);
}
function show_egg(){
  switch(d.egg){
    case "red":
      $(".inscreen").html("Red egg");
    break;
    case "blue":
      $(".inscreen").html("Blue egg");
    break;
    case "green":
      $(".inscreen").html("Green egg");
    break;
    case "yellow":
      $(".inscreen").html("Yellow egg");
    break;
    case "lightblue":
      $(".inscreen").html("Light Blue egg");
    break;
  }
}
function confirm_egg(){
  //store chosen egg, set option to menu
  d.chooseEgg = d.egg;
  localStorage.setItem("chooseEgg",d.chooseEgg);
  d.option="menu";
  localStorage.setItem("option",d.option);
  d.menu="";
  localStorage.removeItem("egg");

  d.hunger=0;
  d.strength=0;
  d.effort=0;
  d.energy=10;

  d.evotime=60;
  d.mon = d.egg;
  localStorage.setItem("mon",d.mon);

  d.startTime=new Date();
  localStorage.setItem("startTime",d.startTime);
  bg.vTime();

  display();
}
