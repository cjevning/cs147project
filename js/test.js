var toggle = function() {
  var mydiv = document.getElementById('searchBarDiv');
  var nav = document.getElementById('nav');
  var container = document.getElementById('container');
  var tab = document.getElementById('tableDiv');
  var button = document.getElementById('searchButton');
  if (mydiv.style.display === 'block') {
    $(mydiv).slideToggle(400);
    $(nav).animate({
      height:"7%"
    });
    $(tab).animate({
      top:"7%"
    });
    $('#searchSpan').removeClass('glyphicon-remove').addClass('glyphicon-search');
    $(button).css("background-color", "#FFF");  
  }
  else {
    $(nav).animate({
      height:"14%"
    });
    $(tab).animate({
      top:"14%"
    });
    $(mydiv).slideToggle(400);
    $('#searchSpan').removeClass('glyphicon-search').addClass('glyphicon-remove');
    $(button).css("background-color", "#ddd");
  }
}


$(document).click(function() {
  if($("#bs-example-navbar-collapse-1").hasClass('in')) {
    $("#bs-example-navbar-collapse-1").collapse("hide");
  }
});


function expand () {

}