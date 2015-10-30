$(function(){
	$(document).on("scroll", onScroll);
    $('a[rel="lightbox"]').fluidbox();
	$('#site').scroll(function() {
	});
	$("a[href*=#]").anchorscroll({
		speed: 500,
		easing: 'easeInOutExpo'
	});
	onScroll();
});


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if(typeof(refElement.position()) !== 'undefined'){
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	            $('#nav li').removeClass("active");
	            currLink.parent('li').addClass("active");
	        }
	    }
    });
}