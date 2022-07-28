$(()=> {
    //меняет цвет фона меню при прокрутке вниз
    $(window).scroll(() => {
        if($(window).scrollTop() >= 200) {
            $(".menu-top").addClass("menu-scroll");
            $('.go-top').fadeIn();
        } else {
            $(".menu-top").removeClass("menu-scroll");
            $('.go-top').fadeOut();
        }
    })

    //кнопка поднятия наверх
    $('.go-top').click(()=> {
        $('body,html').animate({scrollTop:0},800);
       });
// кнопка бургер открывает всплыв меню
    $(".burger").click(()=> {
        $(".menu-all").css('display', 'flex');
    })
    // кнопка закрытия всплыв меню
    $(".close").click(()=> {
        $(".menu-all").hide();
    })
    $(".close-menu").click(()=> {
        $(".menu-all").hide();
    })
});