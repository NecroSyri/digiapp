/*
Phases :
Egg > Baby I > Baby II > Rookie > Champion > Ultimate > Mega > Mega 2 > Mega 3

Stats :
Training
Battle #
Win %
Dead #

HP > HP Train *5
MP > /10 Train
Atk > Train *1-5
Def > Train *1-5
Speed > Train *1-5
Brain > Win %
Weight > feed +5 train -1
Mistakes
Battle > battle#
Hapyness > + when doing something
Discipline > - when doing something
Techs > crit% (1%+1 battle, 0.5% +1 train)
Quota

Battles :
Dmg = Atk(*2 crit) - Def
Speed : more speed = atk first
if speed+/speed- >= 2 : Atk 2x

feed timer (X +/- var)
feed variant (+/- X)

sleep hour

*/
function chart(o){
    switch(o.stage){
        case "Egg":
            return egg(o);
        break;
        case "Baby I":
            return baby(o);
        break;
        case "Baby II":
            return baby2(o);
        break;
        case "Rookie":
            return rookie(o);
        break;
        case "Champion":
            return champion(o);
        break;
        case "Ultimate":
            return ultimate(o);
        break;
        case "Mega":
            return mega(o);
        break;
    }
}

function egg(o){
    switch(o.mon){
        case "v1":
          //botamon
          o.sleepTime="20h";
          o.sleepVar="45m";
          o.feedInterval="3h";
          o.energy=10;
          o.mon="botamon"
          o.sprite=1;
          o.state="idle";
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
    display(o.mon,o.state);
}

function baby(o){
    switch(o.mon){
        case "Jarimon":
            return "Gigimon";
        break;
        case "Poyomon":
            return "Tokomon";
        break;
        case "Yuramon":
            return "Badomon";
        break;
        case "Botamon":
            return "Koromon";
        break;
        case "Dodomon":
            return "Wanyamon";
        break;
    }
}

function baby2(o){
    switch(o.mon){
        case "":

        break;
    }
}

function rookie(o){
    switch(o.mon){
        case "":

        break;
    }
}

function champion(o){
    switch(o.mon){
        case "":

        break;
    }
}

function ultimate(o){
    switch(o.mon){
        case "":

        break;
    }
}

function mega(o){
    switch(o.mon){
        case "":

        break;
    }
}
