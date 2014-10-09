var $win = $(window);
var $sun = $('.sun');
var $sunSection = $('.sun-section');
var $dipperSection = $('.dipper-section');
var $shuttleSection = $('.dipper-section');
var $shipSection = $('.ship-section');

var $dipper = $('.dipper');
var $shuttle = $('.shuttle');
var $ship = $('.ship');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$sun.css('transform', 'rotate(' + scrollPos / 5 + 'deg)');
	$sunSection.css('background-position', 'center ' + scrollPos / 2 + 'px');
});

$dipperSection.waypoint(function () {
	$dipper.addClass('js-dipper-fade');
}, {offset: '50%' });

$shuttleSection.waypoint(function () {
	$shuttle.addClass('js-shuttle-fade');
}, {offset: '50%' });

$shipSection.waypoint(function () {
	$ship.addClass('js-ship-fade');
}, {offset: '50%' });