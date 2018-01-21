function select(){
  switch(d.option){
    case "egg":
      selectEgg();
    break;
    case "menu":
      selectMenu();
    break;
  }
}

function confirm(){
  switch(d.option){
    case "egg":
      confirmEgg();
    break;
    case "menu":
      confirmMenu();
    break;
  }
}

function cancel(){
  switch(d.option){
    case "menu":
      cancelMenu();
    break;
  }
}