

$('.fa-bars').click(function(){
	$('nav ul li').addClass("show");
	$('fa-times-circle').css("display","block");
	$('fa-bars').css("display","none");

});

$('.fa-times-circle').click(function(){
	$('nav ul li').removeClass("show");
	$('fa-bars').css("display","block");
	$('fa-times-circle').css("display","none");

});