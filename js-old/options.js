var o = {};
$("#validate").click(function(){
    o.username=$("#username").val();
    save();
});
$("#delete").click(function(){
  o.username=null;
  save();
});

initRadio("battle");
initRadio("clean");

function initRadio(radio){
  load();
  $("input[name="+radio+"]").each(function(){
  	if($(this).val()==o.radio){
  		$(this).prop("checked",true);
  	}
  });
  $("input[name="+radio+"]").change(function(){
  	if ($(this).is(':checked'))
  	{
      o.radio=$(this).val();
      //localStorage.setItem(radio,$(this).val());
  	}
  });
}

load();

if(o.username == null){
    $("#loginForm").hide();
    $("#registerForm").show();
}else{
    $("#registerForm").hide();
    $("#loginForm").show();
}

function save(){
  localStorage.setItem("options",JSON.stringify(o));
}

function load(){
  var tmp = localStorage.getItem("options");
  if (tmp!=null && tmp != "" && tmp != "undefined" && tmp != undefined){
    o = JSON.parse(tmp);
  }
}
