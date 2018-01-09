// Eggs
function chooseEgg(){
  toggleChooseArrows(false);
  p.option = "egg";
  if(p.egg == null){
    p.egg = "0";
  }
  save();
  showEgg("v1");
}
function selectEgg(){
  load();
	if(p.eggs == null || p.eggs == ""){
    p.eggs="v1,v2,v3,v4,v5";
    save();
	}
	var eggsTab = p.eggs.split(",");
  if(p.egg<eggsTab.length-1){
	  p.egg++;
  }else{
	  p.egg=0;
  }
  showEgg(eggsTab[p.egg]);
  save();
}
function showEgg(egg){
  display(egg,"fix");
}
function confirmEgg(){
  //store chosen egg, set option to menu
  toggleChooseArrows();
  p.chooseEgg = p.egg;
  p.option="menu";
  p.menu="";

  p.hunger=0;
  p.strength=0;
  p.effort=0;
  p.energy=0;

  p.mon = "v"+(p.egg+1);
  p.state="fix";
  save();
  showEgg("v"+(p.egg+1));
  setTimer(5,"eggShake");
  setTimer(60,"hatch");
}
