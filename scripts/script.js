$(document).ready(function() {
	$(".icon").click(function(e){
		$(this).toggleClass('responsive');
		$('.menu ul.topnav').toggleClass('responsive');
		
		 e.preventDefault();
	});
});

var currentIndex = 0,
  items = $('.slider div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.slider div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
};

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 4000);
var $animation_elements = $('.animation-element');
var $window = $(window);
$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (element_bottom_position < window_bottom_position) 
         {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
};

