$("#validate").click(function(){
    localStorage.setItem("username",$("#username").val());
});
$("#delete").click(function(){
    localStorage.removeItem("username");
});

initRadio("battle");
initRadio("clean");

function initRadio(radio){
  $("input[name="+radio+"]").each(function(){
  	if($(this).val()==localStorage.getItem(radio)){
  		$(this).prop("checked",true);
  	}
  });
  $("input[name="+radio+"]").change(function(){
  	if ($(this).is(':checked'))
  	{
  		localStorage.setItem(radio,$(this).val());
  	}
  });
}

var username = localStorage.getItem("username");

if(username == null){
    $("#loginForm").hide();
    $("#registerForm").show();
}else{
    $("#registerForm").hide();
    $("#loginForm").show();
}
