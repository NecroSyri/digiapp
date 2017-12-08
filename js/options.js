$("#validate").click(function(){
    localStorage.setItem("username",$("#username").val());
});
$("#delete").click(function(){
    localStorage.removeItem("username");
});

// SIZE
var size = localStorage.getItem("size");
$("input[name=size]").each(function(){
	if($(this).val()==size){
		$(this).prop("checked",true);
	}
});
$("input[name=size]").change(function(){
	if ($(this).is(':checked'))
	{
		localStorage.setItem("size",$(this).val());
	}
});

var username = localStorage.getItem("username");

if(username == null){
    $("#loginForm").hide();
    $("#registerForm").show();
}else{
    $("#registerForm").hide();
    $("#loginForm").show();
}

