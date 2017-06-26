(function($){
	$(function(){

		$('.button-collapse').sideNav();
		$('.datepicker').pickadate({
			selectMonths: true,
			selectYears: 2
		});

	}); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    $('.container').find('select').material_select();
});