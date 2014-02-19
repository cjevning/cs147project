var toggle = function() {
  var mydiv = document.getElementById('searchBarDiv');
  var nav = document.getElementById('nav');
  var container = document.getElementById('container');
  var tab = document.getElementById('tableDiv');
  var button = document.getElementById('searchButton');
  if (mydiv.style.display === 'block') {
    $(mydiv).slideToggle(400);
    $(nav).animate({
      height:"9%"
    });
    $(tab).animate({
      top:"9%"
    });
    $('#searchSpan').removeClass('glyphicon-remove').addClass('glyphicon-search');
    $(button).css("background-color", "#FFF");  
  }
  else {
    $(nav).animate({
      height:"18%"
    });
    $(tab).animate({
      top:"18%"
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


function deleteSet() {
  var t = event.target;
  var len = $(t).closest("table").find("tr").length;
  if (len <= 2) {
    alert("You must have at least one set!")
  }
  else {
    var tr = t.parentElement.parentElement;
    tr.remove();
  }
}

function addSet() {
  var table = $(event.target).closest("table");
  var len = table.find("tr").length;
  var tr = table.find("tr").eq(len-2);
  var nr = tr.clone(true);
  tr.after(nr);
}