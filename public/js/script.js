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

  $('.video-carousel-container-category').slick({
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
        settings: "unslick"
      }
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
var guruComponent = document.querySelectorAll('.component-guru-analyze-item');

function calculatePercent(correctNum, incorrectNum) {
  var correctPercent;
  var incorrectPercent;
  if (correctNum == 0 && incorrectNum == 0) {
    correctPercent = 0;
    incorrectPercent = 0;
    return { correctPercent, incorrectPercent }
  }
  correctPercent = Math.floor((correctNum * 100) / (correctNum + incorrectNum));
  incorrectPercent = Math.ceil(100 - correctPercent);
  return { correctPercent, incorrectPercent }
}

if (guruComponent.length > 0) {
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
})

// Video Floating Handle
var videoFloating = document.querySelectorAll('.floating-video-enable');
var videoFloatingContainer = document.getElementsByClassName('floating-video-container')[0];
var videoTag = videoFloatingContainer.getElementsByTagName('video')[0];
var videoSRC = videoTag.getElementsByTagName('source')[0];
var closeVideo = videoFloatingContainer.getElementsByClassName('close')[0];
var videoToggle = videoFloatingContainer.getElementsByClassName('toggle')[0];

closeVideo.addEventListener('click', function () {
    destroyVideo()
  videoFloatingContainer.classList.remove('show')
  videoFloatingContainer.classList.add('full-page')
 })
videoToggle.addEventListener('click', function () {
  if (!videoFloatingContainer.classList.contains('full-page')) {
    videoFloatingContainer.classList.add('full-page');
  } else if (videoFloatingContainer.classList.contains('full-page')) {
    videoFloatingContainer.classList.remove('full-page');
  }
 })
    

function loadVideo(data) {
  videoSRC.setAttribute('src', data)
  videoTag.load();
  videoTag.play();
}
function destroyVideo() {
  videoTag.pause();
  videoSRC.setAttribute('src', '')
}

if (videoFloating.length > 0) { 
  videoFloating.forEach((item) => {

    item.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!videoFloatingContainer.classList.contains('show')) {
        
        loadVideo(item.dataset.video)
        videoFloatingContainer.classList.add('show')

      } else if (videoFloatingContainer.classList.contains('show')) {
        destroyVideo()
        loadVideo(item.dataset.video)
        videoFloatingContainer.classList.add('show')
        videoFloatingContainer.classList.add('full-page')
      }
    })
  })

  window.addEventListener('scroll', function () {
    if (videoFloatingContainer.classList.contains('full-page') && videoFloatingContainer.classList.contains('show')) {
      setTimeout(() => {
        videoFloatingContainer.classList.remove('full-page')
      }, 100);
    }
  })
}

$('.component-league-selector').on('click', function () {
  $(this).toggleClass('open')
})



// Date Picker
var options = $.extend(
    {},
    $.datepicker.regional["th"],
    { dateFormat: "d MM yy" },
);
$("#datepicker").datepicker(options).datepicker("setDate", new Date());
if($('.datepicker-guru-predict').length > 0) {
  $('#ui-datepicker-div').addClass('datepicker-guru-predict');
}
if($('.datepicker-matches-result').length > 0) {
  $('.matches-result-date-selector-group').append($('#ui-datepicker-div'))
  $('#ui-datepicker-div').addClass('datepicker-matches-result');
}
$('.ui-datepicker-calendar td').on('click', function () {
  $('.ui-datepicker-calendar .ui-state-default').removeClass('ui-state-highlight');
  $('.ui-datepicker-calendar td').removeClass('ui-datepicker-current-day')
  $('.ui-datepicker-calendar td a').removeClass('ui-state-active')
  $(this).addClass('ui-datepicker-current-day');
  $('a', this).addClass('ui-state-active');
})

// Video Poster Handle
$('.article-body-section .video-group .poster-group').on('click', function () {
  $('.article-body-section .video-group').addClass('watching');
  $('.article-body-section .video-group video')[0].play();
})


// Stats Graph 
var graphGroup = document.querySelectorAll('.graph-group');
if (graphGroup.length > 0) {
  document.querySelectorAll('.graph-group').forEach((group) => {
    var leftNumber = parseInt(group.querySelector('.left .number').innerText)
    var rightNumber = parseInt(group.querySelector('.right .number').innerText)
    var { correctPercent: leftPercent, incorrectPercent: rightPercent } = calculatePercent(leftNumber, rightNumber)
    group.querySelector('.left .line').style.width = leftPercent + '%';
    group.querySelector('.right .line').style.width = rightPercent + '%';
  })
}

var superGraphGroup = document.querySelectorAll('.super-graph-group');
if (superGraphGroup.length > 0) {
  document.querySelectorAll('.super-graph-group').forEach((group) => {
    var leftNumber = parseInt(group.querySelector('.l-percent').dataset.number)
    var rightNumber = parseInt(group.querySelector('.r-percent').dataset.number)
    var { correctPercent: leftPercent, incorrectPercent: rightPercent } = calculatePercent(leftNumber, rightNumber)
    group.querySelector('.l-percent').getElementsByTagName('span')[0].innerText = leftPercent;
    group.querySelector('.r-percent').getElementsByTagName('span')[0].innerText = rightPercent;
    console.log(leftPercent, rightPercent)
    group.querySelector('.graph-row').style.gridTemplateColumns = `${leftPercent}% ${rightPercent}%`;
  })
}
