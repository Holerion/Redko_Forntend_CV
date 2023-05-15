$( window ).on( "scroll", function() {
    console.log(scrollY);
    $('.skills').css('transform',`translateY(${scrollY/4}px)`)
})











