function countSeconds(t1,t2){
    t1 = new Date(t1);
    t2 = new Date(t2);
    var dif = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = dif / 1000;
    var Seconds_Between_Dates = Math.floor(Math.abs(Seconds_from_T1_to_T2));
    return Seconds_Between_Dates;
}

function save(){
  localStorage.setItem("popup",JSON.stringify(p));
}

function load(){
  var tmp = localStorage.getItem("popup");
  if (tmp!=null && tmp != "" && tmp != "undefined" && tmp != undefined){
    p = JSON.parse(tmp);
  }
}

function saveBackground(){
  localStorage.setItem("popup",JSON.stringify(b));
}

function loadBackground(){
  var tmp = localStorage.getItem("background");
  if (tmp!=null && tmp != "" && tmp != "undefined" && tmp != undefined){
    b = JSON.parse(tmp);
  }
}

function notification(title,message,icon){
  var opt = {
    type: "basic",
    title: title,
    message: message,
    iconUrl: icon
  }
chrome.notifications.create(opt, function(createdId) {
	var handler = function(id) {
		if(id == createdId) {
			navigate(url);
			chrome.notifications.clear(id);
			chrome.notifications.onClicked.removeListener(handler);
		}
	}});
}

function call(isCalling){
  if(isCalling){
    chrome.browserAction.setIcon({path: "../img/call1.png"});//set white
    if(showNotifications){
      notification("Call","You've been called !","../img/call1.png");
    }
  }else{
    chrome.browserAction.setIcon({path: "../img/ico/16-w.png"});
  }
}

function random(min,max){
  return min + Math.floor(Math.random() * max);
}
