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

var openMenu = "";

$(document).click(function() {
  name = event.target.name;
  if (name == "undefined") {
    var par = event.target.parentElement.parentElement.parentElement.parentElement;
    if ($(par).hasClass("menuButton")) {
      name = "#bs-example-navbar-collapse-1";
    }
    else {
      name = par.name;
    }
  }
  closeMenu(name);
});

function closeMenu(name) {
  if($(openMenu).hasClass('in')) {
    $(openMenu).collapse("hide");
  }
  openMenu = name;
}