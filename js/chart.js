function digivolve(){
  switch(){
      case "v1":
        //botamon
        d.sleepTime="20h";
        d.sleepVar="45m";
        d.feedInterval="3h";
        d.energy=10;
        d.mon="botamon"
        d.sprite=1;
        d.state="idle";
      break;
      case "v2":
        //punimon
      break;
      case "v3":
        //poyomon
      break;
      case "v4":
          //yuramon
      break;
      case "v5":
          //zurumon
      break;
  }
  save();
  display(d.mon,d.state);
}
