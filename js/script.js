$(document).ready(function () { 
    
  // Topbar Component
  $('.component-searchbar .search input').focus(() => {
    $('.component-searchbar .search').addClass('active');
  })
  $('.component-searchbar .search input').blur(() => {
    $('.component-searchbar .search').removeClass('active');
  })
  $('.component-searchbar .search form').submit(function (e) {
    e.preventDefault();
    var searchValue = $('.component-searchbar .search input').val()
    function searchQuery() {
      window.location.href = `/?s=${searchValue}`
    }
    searchQuery()
  })

  // Menubar Component
  $('.component-menubar .menu-mobile-toggle').on('click', function () {
    $('.component-menubar .menu-container').toggleClass('open')
  })

  $('.component-menubar .menu-container li a').on('click', function () {
    $('.component-menubar .menu-container').removeClass('open')
  })


  // Video Ccarousel
  $('.video-carousel-container').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: `<img src="/images/slick/slick-next.png" class="next" alt="Next" />`,
    prevArrow: `<img src="/images/slick/slick-prev.png" class="prev" alt="Next" />`,
    mobileFirst: true,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          variableWidth: false,
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          variableWidth: false,
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
    ]
  })

})
