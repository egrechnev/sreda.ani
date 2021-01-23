$(function() {

	//  $(window).on('scroll', () => {
	// 	var blockPosition = $('#trigger-02').offset().top,
	// 		windowScrollPosition = $(window).scrollTop();
	   
	//    if( blockPosition < windowScrollPosition ) {
	// 	$('#info-text-02').attr('data-aos', 'hide');
	//    } else {
	// 	$('#info-text-02').attr('data-aos', 'fade');
	//    }
	//  });

//--active menu header	
	var pathname_url = window.location.pathname;
	var href_url = window.location.href;
	$(".header-menu li").each(function() {
		var link = $(this).find("a").attr("href");
		if(pathname_url == link || href_url == link) {
			$(this).addClass("active");
		}
	});

//--stiky header
	// let headerTop = $('#header, #menu-btn-mobile').offset().top;
	// let panel = $("#panel").height();
	// let header = headerTop + panel;

	// $(window).scroll(function(){

	// 	if($("div").is("#bx-panel")){
	// 		if( $(window).scrollTop() > header ) {
	// 			$('#header, #menu-btn-mobile').css({position: 'fixed'});
	// 		} else {
	// 				$('#header, #menu-btn-mobile').css({position: 'absolute'});
	// 		}
	// 	} else {
	// 		if( $(window).scrollTop() > headerTop ) {
	// 			$('#header, #menu-btn-mobile').css({position: 'fixed'});
	// 		} else {
	// 				$('#header, #menu-btn-mobile').css({position: 'absolute'});
	// 		}
	// 	}


	// });


//--hide element
	function windowScrollPosition(){
	// $(window).scroll(function(){

		var blockPosition = $('#trigger-02').offset().top,
			windowScrollPosition = $(window).scrollTop();

		if( blockPosition < windowScrollPosition ) {
			$('#info-text-02').attr('data-aos', 'hide');
			$('.info').css({'max-width': '420px'});
		} else {
			$('#info-text-02').attr('data-aos', 'fade');
		}

		// 

		var blockPosition = $('#trigger-06').offset().top,
			windowScrollPosition = $(window).scrollTop();
	   
		if( blockPosition < windowScrollPosition ) {
			$('#info-text-03').attr('data-aos', 'hide');
			$('.info').css({'max-width': '510px'});
		} else {
			$('#info-text-03').attr('data-aos', 'fade');
		}

		// 

		var blockPosition = $('#trigger-07').offset().top,
			windowScrollPosition = $(window).scrollTop();
	   
		if( blockPosition < windowScrollPosition ) {
			$('#info-text-04').attr('data-aos', 'hide');
			$('#farmer').attr('data-aos', 'hide');
			$('.info').css({'max-width': '460px'});
		} else {
			$('#info-text-04').attr('data-aos', 'fade');
			$('#farmer').attr('data-aos', 'fade');
		}			

		// 

		var blockPosition = $('#trigger-08').offset().top,
			windowScrollPosition = $(window).scrollTop();
	   
		if( blockPosition < windowScrollPosition ) {
			$('#info-text-05').attr('data-aos', 'hide');
			$('#car').attr('data-aos', 'car');
		} else {
			$('#info-text-05').attr('data-aos', 'fade');
		}	

		// 

		var blockPosition = $('#trigger-09').offset().top,
			windowScrollPosition = $(window).scrollTop();
	   
		if( blockPosition < windowScrollPosition ) {
			// $('#car').attr('data-aos', 'car-end');
			$('#car').addClass('car-end');
		} else {
			// $('#car').attr('data-aos', 'car-start');
			$('#car').removeClass('car-end');
		}

		// 

		var blockPosition = $('#trigger-10').offset().top,
			windowScrollPosition = $(window).scrollTop();
	   
		if( blockPosition < windowScrollPosition ) {
			$('.culture-main, .harvest').attr('data-aos', 'hide');
			$('#car').hide();
		} else {
			$('.culture-main, .harvest').attr('data-aos', 'fade');
			$('#car').show();
		}	

		// if ($('#info-text-03').hasClass('aos-animate')) {
		// 	$('#info-text-02').attr('data-aos', 'hide');
		// } else {
		// 	$('#info-text-02').attr('data-aos', 'fade');
		// }

		// if ($('#info-text-04').hasClass('aos-animate')) {
		// 	$('#info-text-03').attr('data-aos', 'hide');
		// } else {
		// 	$('#info-text-03').attr('data-aos', 'fade');
		// }

		// if ($('#info-text-05').hasClass('aos-animate')) {
		// 	$('#info-text-04, #farmer').attr('data-aos', 'hide');
		// } else {
		// 	$('#info-text-04, #farmer').attr('data-aos', 'fade');
		// }

		// if ($('#info-text-06').hasClass('aos-animate')) {
		// 	$('#info-text-05').attr('data-aos', 'hide');
		// } else {
		// 	$('#info-text-05').attr('data-aos', 'fade');
		// }
// 
		// if($(window).scrollTop()>1438){
		// 	$('#info-text-02').attr('data-aos', 'hide');
		// }else{
		// 	$('#info-text-02').attr('data-aos', 'fade');
		// }

		// if($(window).scrollTop()>5420){
		// 	$('#info-text-03').attr('data-aos', 'hide');
		// }else{
		// 	$('#info-text-03').attr('data-aos', 'fade');
		// }

		// if($(window).scrollTop()>6440){
		// 	$('#info-text-04, #farmer').attr('data-aos', 'hide');
		// }else{
		// 	$('#info-text-04, #farmer').attr('data-aos', 'fade');
		// }

		// if($(window).scrollTop()>7290){
		// 	$('#info-text-05').attr('data-aos', 'hide');
		// }else{
		// 	$('#info-text-05').attr('data-aos', 'fade');
		// }

		
		// if($(window).scrollTop()>8500){
		// 	$('#car').attr('data-aos', 'car-end');
		// }else{
		// 	$('#car').attr('data-aos', 'car-start');
		// }

		// if(($(window).scrollTop()>5418) && ($(window).scrollTop()<6440)){
		// 	$('.info').css({'max-width': '510px'});
		// } else if($(window).scrollTop()>6440){
		// 	$('.info').css({'max-width': '460px'});
		// } else if($(window).scrollTop()<5480){
		// 	$('.info').css({'max-width': '420px'});
		// }

	// });
	}

	$(window).on('scroll load resize',windowScrollPosition);
	
//--windowSize
	function windowSize(){
		// if ($(window).height() < '730'){
		// 	$('.info').css({'top': '42%', 'bottom': 'auto', 'max-height': 'none'});
		// } else {
		// 	$('.info').css({'top': '360px', 'bottom': 'auto', 'max-height': 'none'});
		// }

		if (($(window).height() < '640') || ($(window).width() < '1200')){
			$('.content-landing').fadeOut(300);
			$('.info-text-wrapper').fadeOut(100).css({'height' : '0'});
			$('.attention').css('display', 'flex');
			$('.info').css({'top': '0', 'max-width': '510px', 'height': '370px'});
			$('.trigger').hide();
			$('#header').hide();
		} else {
			$('.content-landing').fadeIn(300);
			$('.info-text-wrapper').fadeIn(100).css({'height' : 'auto'});
			$('.attention').hide();
			$('.info').css({'top': '50px', 'max-width': '420px', 'height': '208px'});
			$('.trigger').show();
			$('#header').show();
		}
	}
	$(window).on('load resize',windowSize);


//--AOS	
	AOS.init()


//--disable scaling
	$(document).keydown(function(e) {
		if (e.ctrlKey==true && (e.which == '61' || e.which == '107' || e.which == '173' || e.which == '109'  || e.which == '187'  || e.which == '189'  ) ) {
			e.preventDefault();
		}
			// 107 Num Key  +
			// 109 Num Key  -
			// 173 Min Key  hyphen/underscor Hey
			// 61 Plus key  +/= key
	});
		
	// $(window).bind('mousewheel DOMMouseScroll', function (e) {
	// 	if (e.ctrlKey == true) {
	// 		e.preventDefault();
	// 	}
	// });

	document.addEventListener('wheel', function(e) {
		if (e.ctrlKey == true) {
			e.preventDefault();
		}
	}, {
		passive: false
	});


//--scrollTop refresh
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});


//--IE center
	// function windowCenter(){
		// jQuery.fn.center = function () {
		// 	this.css("position","absolute");
		// 	// this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
		// 	this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
		// 	return this;
		// 	}

		// $('.bg-landing').center();
	// }
	// $(window).on('resize',windowCenter);

});