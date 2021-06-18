
function toggleMenu(menu, bars, opened){
    console.log("here");
    console.log(menu);
    $(menu).css('display', 'block');
    $(bars).eq(1).css('opacity', (opened == 0 ? '0' : '1'));

    $(bars).eq(0).css({'transform': `rotate(${(opened == 0) ? '45deg' : '0'}) 
                                    translate(${(opened == 0) ? '3px, 10px' : '0,0'})`});
    $(bars).eq(0).css({'width': opened == 0 ? '27px' : '21px'});
    $(bars).eq(2).css({'transform':`rotate(${(opened == 0) ? '-45deg' : '0'}) 
                                    translate(${(opened == 0) ? '2px, -10px' : '0,0'})`});
    $(menu).animate({opacity: opened == 0 ? 1 : 0}, {queue: false, duration:300, complete : function(){
            if(opened == 1){
                $(menu).css('display', 'none');
            }
        }});
    return (opened == 0 ? 1 : 0);
}
$(document).ready(function(e){
    $('.hamburger-menu').on('click', function(e){
        e.preventDefault();
        $(this).attr('data-clicked', toggleMenu('.navbar-menu', '.hamburger-menu__bars', $(this).attr('data-clicked')));
    });
});