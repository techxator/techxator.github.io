$(window).scroll(function() {

if(parseInt(getBrowserSize().width) < 1026px){
    if ($(this).scrollTop()>0)
     {
        $('.hida').fadeOut();
     }
    else
     {
      $('.hida').fadeIn();
     }
}
 });






