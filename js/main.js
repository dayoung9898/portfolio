$('.s3 .nav button').click(function(){
    let i = $(this).index();
    let contents = $(".s3_wrap .con").eq(i).offset().top;
    $('html,body').animate({'scrollTop': contents - 58});
});
$(window).scroll(function(){
    let hig = $('.s3_wrap .con').eq(0).offset().top;
    let scr = $(window).scrollTop();

    if(scr >= hig){
        console.log("fixed");
        $(".s3 .nav").addClass("active");
    } else {
        $(".s3 .nav").removeClass("active");
    }
});

$(window).scroll(function(){
    let hig2 = $('.s2').offset().top -  $(window).height() / 2;
    let scr2 = $(window).scrollTop();

    if(scr2 >= hig2){
        $(".wh_box h3 span").addClass("highlight");
    }
});
