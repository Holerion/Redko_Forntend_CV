$( window ).on( "scroll", function() {
    console.log(scrollY);

    $('.skills').css('transform',`translateY(${scrollY/25}%)`)
})











