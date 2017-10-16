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

*/
function chart(mon,stage,stats){
    switch(stage){
        case "Egg":
            return egg(mon);
        break;
        case "Baby I":
            return baby(mon);
        break;
        case "Baby II":
            return baby2(mon,stats);
        break;
        case "Rookie":
            return rookie(mon,stats);
        break;
        case "Champion":
            return champion(mon,stats);
        break;
        case "Ultimate":
            return ultimate(mon,stats);
        break;
        case "Mega":
            return mega(mon,stats);
        break;
    }
}

function egg(mon){
    switch(mon){
        case "Red":
            return "Jarimon";
        break;
        case "Blue":
            return "Poyomon";
        break;
        case "Green":
            return "Yuramon";
        break;
        case "Yellow":
            return "Botamon";
        break;
        case "Light blue":
            return "Dodomon";
        break;
    }
}

function baby(mon){
    switch(mon){
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

function baby2(mon,stats){
    switch(mon){
        case "":

        break;
    }
}

function rookie(mon,stats){
    switch(mon){
        case "":

        break;
    }
}

function champion(mon,stats){
    switch(mon){
        case "":

        break;
    }
}

function ultimate(mon,stats){
    switch(mon){
        case "":

        break;
    }
}

function mega(mon,stats){
    switch(mon){
        case "":

        break;
    }
}
