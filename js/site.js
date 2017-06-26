$(document).ready(function() {
    $('.container').find('select').material_select();
    $('.button-collapse').sideNav();
	$('.datepicker').pickadate({
		selectMonths: true,
		selectYears: 2
	});
});