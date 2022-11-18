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
  
  
  $('.line-clamp-1').each((i, val) => {
    $clamp(val, {clamp: 1 })
  });

  $('.line-clamp-2').each((i, val) => {
    $clamp(val, {clamp: 2 })
  });

  // Accordion Animation Relative Height
  $('.league-group').each((i, val) => {
    $('.league-name .text', val).on('click', function () {
      $(val).toggleClass('close')
    })
    
    var moreItem = $('.more-list .item', val).length
    if (moreItem > 0) {
      $('.show-more .button',val).removeClass('hide')
    }

    $('.show-more .button', val).on('click', function () {
      $('.more-list', val).toggleClass('open')
      $('.show-more .button', val).toggleClass('open')
    })

  })

  // Accordion Animation Relative Height
  $('.broadcast').each((i, val) => {
    
    var moreItem = $('.more-list .item', val).length
    if (moreItem > 0) {
      $('.show-more .button', val).removeClass('hide')
    }

    $('.show-more .button', val).on('click', function () {
      $('.more-list', val).toggleClass('open')
      $('.show-more .button', val).toggleClass('open')
    })

  })


  // broadcast time
  $('.broadcast-carousel-container .carousel-header').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: `<img src="/images/slick/slick-next.png" class="next" alt="Next" />`,
    prevArrow: `<img src="/images/slick/slick-prev.png" class="prev" alt="Next" />`,
  });
  $('.broadcast-carousel-container .carousel-header .nav').on('click', function () {
    $('.broadcast-carousel-container .carousel-header .nav').removeClass('active');
    $(this).addClass('active');
  })
})

// Calculate Match Analyze bar chart animation
var guruComponent = document.getElementsByClassName('component-guru-analyze-item') || undefined;
function calculatePercent(correctNum, incorrectNum) {
  var correctPercent = Math.floor((correctNum * 100) / (correctNum + incorrectNum));
  var incorrectPercent = Math.ceil(100 - correctPercent);
  return { correctPercent, incorrectPercent }
}

const observer = new IntersectionObserver(function (entry) {
  if (entry[0].isIntersecting) {
    var i = entry[0].target;
    i.classList.remove('off')
  }
}, { threshold: [1] })

if (guruComponent != undefined) {
  document.querySelectorAll('.component-guru-analyze-item .summary-group').forEach((group) => {
    group.querySelectorAll('.item').forEach((item) => {
      var guruCorrect = parseInt(item.querySelector('.number-group .correct .text span').innerText)
      var guruInCorrect = parseInt(item.querySelector('.number-group .incorrect .text span').innerText)
      var { correctPercent, incorrectPercent } = calculatePercent(guruCorrect, guruInCorrect)
      item.querySelector('.number-group .correct .line').style.width = correctPercent + '%';
      item.querySelector('.number-group .incorrect .line').style.width = incorrectPercent + '%';
    })
  })
}
var guruItemNo = 0;
document.querySelectorAll('.component-guru-analyze-item').forEach((itemEntry) => {
  itemEntry.classList.add('item-'+ ++guruItemNo)
  if (guruItemNo == 4) {
    guruItemNo = 0
  }
  observer.observe(itemEntry);
})

