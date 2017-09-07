$(document).ready(function() {
    $('.container').find('select').material_select();
    $('.button-collapse').sideNav();
	$('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 2
	});

	function windowPopup(url, width, height) {
		var left = (screen.width / 2) - (width / 2),
			top = (screen.height / 2) - (height / 2);

		window.open(
			url
			, ""
			,"menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
		);
	}

	$(".social-share").on("click", function(e) {
		e.preventDefault();

		windowPopup($(this).attr("href"), 500, 300);
	});
});

