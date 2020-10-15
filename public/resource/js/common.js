function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

/* hasClass */
function hasClass__init(){
    $('.menu-btn').click(function(){
        var $menu_btn = $('.menu-btn');
        var $menu_box = $('.menu-box');
        if ($menu_btn.hasClass('active')){
            $menu_btn.removeClass('active');
        }
        else {
            $menu_btn.addClass('active');
        }
        if ($menu_box.hasClass('active')){
            $menu_box.removeClass('active');
        }
        else {
            $menu_box.addClass('active');
        }
    })
}
/* popup */
function popup_item(){
    $('#section-3 > .extraction-section> .extraction-list > ul > li > a').click(function(){
        var $selected = $(this).parent().find(' > .popup');

        $selected.addClass('selected');
    });
    $('#section-3 > .extraction-section > .extraction-list > ul > li > .popup > .close-btn').click(function(){
        var $selected_on = $('#section-3 > .extraction-section > .extraction-list > ul > li').find('> .selected');

        $selected_on.removeClass('selected');
    });  
    $('#mobile-3> .extraction-section> .extraction-list > ul > li > a').click(function(){
        var $selected = $(this).parent().find(' > .popup');

        $selected.addClass('selected');
    });
    $('#mobile-3 > .extraction-section > .extraction-list > ul > li > .popup > .close-btn').click(function(){
        var $selected_on = $('#mobile-3> .extraction-section > .extraction-list > ul > li').find('> .selected');

        $selected_on.removeClass('selected');
    });  
}
/* scroll-guide-btn moving */
function guide_arrow() {
    $(document).ready(function () {
        $('#section-1  > .home-section >.guide-arrow > .btn').animate({
            bottom: -8 + "%"
        }, 500, function () {
            $('#section-1  > .home-section >.guide-arrow > .btn').animate({
                bottom: -8.5 + "%"
            }, 500, guide_arrow);
        });
    })
};

function scroll_move(no) {
    var offset = $('#section-' + no).offset();
    var $menu_btn = $('.menu-btn');
    var $menu_box = $('.menu-box');
    $('html').animate({
        scrollTop: offset.top
    }, 450);
    $menu_btn.removeClass('active');
    $menu_box.removeClass('active');
};

function guide_btn() {
    $('#section-1>.home-section>.guide-arrow').click(function () {
        var offset_2 = $('#section-2').offset();
        $('html').animate({
            scrollTop: offset_2.top
        }, 450);
    });
}
$(function(){
    alerted();
    hasClass__init();
    popup_item();
    guide_arrow();
    guide_btn();
})