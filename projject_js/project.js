var text="";
var num;

$("input[type='text'").keypress(function(event){
	if (event.keyCode == 13)
	{
		text = $(this).val();
		$(this).val("");
	}

});

$("input[type='number'").keypress(function(event){
	if (event.keyCode == 13)
	{
		num = $(this).val();
		$("ol").append("<li><span><i class='fa fa-trash'></i></span>" + text + "-" + num + "</li>"); 
	}

});

$(":button").keypress(function(event){
	
		$("ol").append("<li><span><i class='fa fa-trash'></i></span>" + text + "-" + num + "</li>"); 
	

});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
	$("input[type='number'").fadeToggle();
	$(":button").fadeToggle();
});

$(document).on('click', '.fa-trash', function() {

	var del = $(this).parent().parent();
	del.remove();

});


