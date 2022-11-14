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
