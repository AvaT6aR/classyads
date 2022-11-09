$(window).scroll(function(){
    let windowScroll = $(window).scrollTop()
    if(windowScroll >= 200){
        $(".header").addClass("header_2")
    } else {
        $(".header").removeClass("header_2")
    }
})

