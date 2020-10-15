function info_hover(){
    var coffee_list = $('.coffee-info > .sub-line > .this-position > .drop-down-list');
    $('.coffee-info > .sub-line > .this-position > .coffee-list').mouseenter(function(){

        coffee_list.addClass('active');
    });
    $('.coffee-info > .sub-line > .this-position > .drop-down-list').mouseleave(function(){

        coffee_list.removeClass('active');
    });
};




$(function(){
    info_hover();
});