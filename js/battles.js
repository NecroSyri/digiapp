function speed(s1,s2){
    if(s1==s2){
        return 0;
    }
    if(s1>s2){
        if(s1/s2 < 2){
            return Math.ceil(1/((s1/s2)-1))
        }else{
            return -2;
        }
    }else{
        if(s2/s1 < 2){
            return (Math.ceil(1/((s2/s1)-1)))*-1
        }else{
            return -1;
        }
    }
}
