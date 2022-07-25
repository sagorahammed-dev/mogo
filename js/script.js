$(function(){
    $('.banner-main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });

    $('.about-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          }
        ]
      });

      $('.counter').counterUp({
        delay: 10,
        time: 4000
    });

    $('.comment-slid').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      arrows:true,
      prevArrow:".left-comment",
      nextArrow:".right-comment",
    });

    $('.team-main').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ] 
    });

    $(Window).scroll(function(){
      var top = $(this).scrollTop()
      if(top > 300){
        $(".navbar").addClass("sticky-menu")
      }
      else{
        $(".navbar").removeClass("sticky-menu")
      }
      if(top > 300){
        $(".back-to-top").fadeIn(300)
      }
      else{
        $(".back-to-top").fadeOut(300)
      }
    })

    $(".back-to-top").click(function(){
      $("html,body").animate({scrollTop: 0},1000)
    })

    new VenoBox({
      selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'flow'
    });


    var scrollLink = $('.scroll-link');
  $(scrollLink).on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top - 40
    }, 1000);
  });
  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionhead = $(this.hash).offset().top - 40;
      if (scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });

})
