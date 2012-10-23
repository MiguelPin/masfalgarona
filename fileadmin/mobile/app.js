


$(document).on("pagecreate", function(event){
	


	$(function () {
	$(".rslides").responsiveSlides({
	maxwidth: 560
	});
	});

        $("#botontop").click(function() {
	$("#menutop").slideDown("slow");
	});

        $("#botontop").dblclick(function() {
	$("#menutop").slideUp("slow");
	});





});


