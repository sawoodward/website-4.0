$(document).ready(function() {
    
    /* Scroll on buttons */
    $('.js-scroll-to-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-contact').offset().top}, 1000);   
    });
    
    $('.js-scroll-to-about').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-about').offset().top}, 1000);   
    });
    
    /* Navigation scroll */
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

    /* Animations on scroll */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    /* Mobile navigation */
    $('.js-nav-icon').click(function(){
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon i');
        
        nav.slideToggle(200)
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});