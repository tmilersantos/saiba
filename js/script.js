  
$( document ).ready(function() {
    // scroll para as seções
  
    let navBtn = $('.nav-item');
  
    let bannerSection = $('#myCarousel');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let contactSection = $('#contact-area');
  
    let scrollTo = '';
  
    $(navBtn).click(function() {
  
      let btnId = $(this).attr('id');
  
      if(btnId == 'about-menu') {
        scrollTo = aboutSection;
      } else if(btnId == 'services-menu') {
        scrollTo = servicesSection;
      } else if(btnId == 'team-menu') {
        scrollTo = teamSection;
      } else if(btnId == 'contact-menu') {
        scrollTo = contactSection;
      } else {
        scrollTo = bannerSection;
      }
  
      $([document.documentElement, document.body]).animate({
          scrollTop: $(scrollTo).offset().top - 70
      }, 200);
    });
  
  });




