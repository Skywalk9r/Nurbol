$(function() {
    $("[data-scroll]").on("click", function(event) {

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 100
        }, 1000);
    });

});