$(document).ready(function() {
  $(".js-add-to-cart").on("click",function(e){
    e.preventDefault();
    $img = $(this)
            .closest('.row')
            .find('picture img');
        
    $img.clone()
        .css({'position' : 'absolute', 'z-index' : '500', 'top': $img.offset().top, 'left' : $img.offset().left})
        .appendTo('body')
        .animate({opacity: 0.05,
            left: $(".js_header_cart").offset().left,
            top: $(".js_header_cart").offset().top,
            height: 10,
            width: 10}, 1000, function() {
            $(this).remove();
        });
    });
});