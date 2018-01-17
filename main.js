var windowObject = $(window);
var elem100 = $(".percentage100");
var elem80 = $(".percentage80");
var elem70 = $('.percentage70');
console.log(elem80)
    function isScrolledIntoView(elem, windowObject) {
        var docViewTop = windowObject.scrollTop();
        var docViewBottom = docViewTop + windowObject.height();
        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();
        console.log(elemTop, docViewBottom);
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }


$(document).on("scroll", function () {
    if (isScrolledIntoView(elem100, windowObject)) {
        elem100.addClass("animate")
        console.log("now you see me");
    }
});

$(document).on("scroll", function () {
    if (isScrolledIntoView(elem80, windowObject)) {
        elem80.addClass("animate")
        console.log("now you see me");
    }
});

$(document).on("scroll", function () {
    if (isScrolledIntoView(elem70, windowObject)) {
        elem70.addClass("animate")
        console.log("now you see me");
    }
});


var $window           = $(window),
    win_height_padded = $window.height() * 1.1,
    isTouch           = Modernizr.touch;


$window.on('scroll', revealOnScroll);
// $window.on('scroll', revealOnScrollDot);
// $window.on('scroll', revealOnScrollDotRight);

function revealOnScroll() {
    var scrolled = $window.scrollTop();
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded + 500 > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
}