function countSeconds(t1,t2){
    t1 = new Date(t1);
    t2 = new Date(t2);
    var dif = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.floor(Math.abs(Seconds_from_T1_to_T2));
    return Seconds_Between_Dates;
}
