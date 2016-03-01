// JavaScript Document


$(document).ready(function(){
	$("#forgot_pwd").hide();
	$(".forgot").click(function(){
        $("#sign_form").hide();
		$("#forgot_pwd").show();
    })	
	$("#ret_log").click(function(){
		$("#forgot_pwd").hide();
        $("#sign_form").show();
    })
});


$(document).ready(function() {
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
});