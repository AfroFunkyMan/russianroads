$(".team_company").hide();
$(document).ready(function() {
	heightDetect();
});

$(window).resize(function () {
	heightDetect();
});

$('img[data-target=image]').click(function () {
	$('iframe#video-frame').remove();
	$('img[data-target=video]').parent().append('<img src="img/bg.jpg" data-target="video-image-toggle" class="img-ipad-two">');
	console.log('hide');
});
var videoTrigger = false;
$('img[data-target=video]').click(function () {
	if ($('.video').slick('slickCurrentSlide') === 1 && $('iframe#video-frame').length === 0){
		var width = $('img[data-target=video]').width();
		var height = $('img[data-target=video]').height();
		$('img[data-target=video-image-toggle]').remove();
		$('img[data-target=video]').parent().append('<iframe ' +
			'id="video-frame"' +
			'width="'+width+'" ' +
			'height="'+height+'" ' +
			'src="https://www.youtube.com/embed/MHSOyfQvOAU" ' +
			'frameborder="0" ' +
			'autoplay="1"' +
			'allowfullscreen></iframe>')
	}
	console.log('show');
});
screenarr = ["start","company","team_company","video_ipad","contacts","partners"];
$("#btn-one").click(function(e){
	console.log("lol");
	viewPage = 1;
	if ($('\.'+screenarr[viewPage]).is(':hidden')) {
		viewPage++;
	};
	$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
	e.preventDefault();
});


$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

function heightDetect() { //disable for debug
	$(".main_head").css("height", $(window).height());
	$('.parallax-layer-bg').parallax({mouseport: '#maestro'});
}
$(".directors").click(function(e){
	e.preventDefault();
	viewPage = 2;
	$(".company").fadeOut(500,function(){
		$(".team_company").fadeIn();
	});
	$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
});

$(".about_company").click(function(e){
	viewPage = 1;

	$(".team_company").fadeOut(500, function(){});
	$(".company").fadeIn(1000,function() {
	});
	$('html, body').scrollTop(($('\.'+screenarr[viewPage]).offset().top));
	e.preventDefault();
});
//

$("#btn-two").click(function(e){
	console.log("lol");
	viewPage = 3;
	$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
	e.preventDefault();
});
$("#btn-free").click(function(e){
	console.log("lol");
	viewPage = 3;
	$('html, body').animate({ scrollTop:  ($('\.'+screenarr[viewPage]).offset().top) }, 500 );
	e.preventDefault();
});

$('.video').slick({
	centerPadding: '60px',
	dots: false,
	focusOnSelect: true,
	initialSlide : 1,
	infinite: false,
	speed: 300,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				focusOnSelect: true,
				initialSlide : 1,
				centerMode: true,
				centerPadding: '40px',
				adaptiveHeight: true,
				variableWidth: true,
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				focusOnSelect: true,
				initialSlide : 1,
				centerMode: true,
				centerPadding: '40px',
				adaptiveHeight: true,
				variableWidth: true,
				slidesToShow: 1
			}
		}
	]

});




//# sourceMappingURL=sript.js.map
