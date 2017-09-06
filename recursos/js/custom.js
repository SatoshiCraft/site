var loginrplay;

var customScripts = {
 
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                   //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('.header').addClass('addBg');
				}else{
						$('.header').removeClass('addBg');
				}
			}
        });
		
		$("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
			$("a[href='#basics']").click(function () {
                $("html, body").animate({ scrollTop: $('#services').offset().top}, "slow"); 
                return false;
            });
    },   
	waySlide: function(){
		  	/* Waypoints Animations
		   ------------------------------------------------------ */		   			  			
			$('#features').waypoint(function() {				
			$('#features .col-md-3').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			$('#aboutUs .row').waypoint(function() {				
			$('#aboutUs .row').addClass( 'animated fadeInUp show' );   
			}, { offset: 850}); 
			$('#contactUs').waypoint(function() {				
			$('#contactUs .parlex-back').addClass( 'animated fadeInUp show' );   
			}, { offset: 800}); 
			 						 
		}, 
    init: function () {
        customScripts.onePageNav();  
		customScripts.waySlide(); 
    }
} 
$('document').ready(function () {
	 $.backstretch([
      "recursos/images/bg1.jpg"
    , "recursos/images/bg2.jpg"
    , "recursos/images/bg3.jpg"
	, "recursos/images/bg4.jpg"
  ], {duration: 3800, fade: 1300});
  
    customScripts.init();
	$('#features .col-md-3, #aboutUs .row, #clients, #portfolio, #plans, #contactUs .parlex-back').css('opacity','0');
	$( "#menuToggle" ).toggle(function() {
	$(this).find('i').removeClass('fa-bars').addClass('fa-remove');
	 $('#mainNav').animate({"right":"0px"}, "slow");
	}, function() {
	  $('#mainNav').animate({"right":"-200px"}, "slow");
	  $(this).find('i').removeClass('fa-remove').addClass('fa-bars');
	});	
});


$(".playbutton").attr("href", "#")
$(".playbutton").click(function() {
  $.get("login.html", function (data) {
	loginrplay = "play";
    $("body").append(data);
  });
});

$("#login-button").click(function() {
  $.get("login.html", function (data) {
	loginrplay = "login";
    $("body").append(data);
  });
});