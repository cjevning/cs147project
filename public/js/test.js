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

function addLift() {
  var liftID = $(event.target).closest('.addButton').attr('id');
  var row = $(event.target).closest('.collapse');
  row.removeClass("in");
  var url_call = '/store/addLift/'+liftID;
  $.post(url_call);
}

function createList() {
    var title = $('#new-list-form #title').val();
    window.location.replace('/liftlists/create/' + title);
}

function addToList () {
  var path = window.location.pathname;
  var sp = path.split('/');
  var listID = sp[sp.length-1];
  var liftID = $(event.target).closest('.addButton').attr('id');
  var row = $(event.target).closest('.collapse');
  row.removeClass("in");
  var url_call = '/liftlists/addTo/'+listID+'/'+liftID;
  $.post(url_call);
}

function forwardToLIP () {
  var listID = $(event.target).closest('.Cont').attr('id');
  window.location.replace('/listInProgress/' + listID);
}


function forwardToAdd () {
  var listID = $(event.target).closest('.Cont').attr('id');
  window.location.replace('/addLifts/' + listID);
}

function deleteLiftFromList () {
  var listID = $(event.target).closest('.Cont').attr('id');
  var liftID = $(event.target).closest('.idHolder').attr('id');
  var url_call = '../liftlists/deleteFrom/' + listID + '/' + liftID;
  $.post(url_call, function() {
      window.location.href = './' + listID; // reload the page
    });
}

function addToHistory () {
  var liftID = $(event.target).closest('.doneButtonDiv').attr('id');
  var row = $(event.target).closest('.collapse');
  var find = $(event.target).closest('.expandedLift');
  var name = find.attr('id');
  var children = find.find('.reps');
  var children2 = find.find('.weight');
  var url_call = '/user_history/'+liftID+'/'+name+'/';
  var reps = "";
  var weight = "";
  var good = true;
  for (var i = 0; i < children.length; i++) {
    var addRep = children.eq(i).val();
    var addWeight = children2.eq(i).val();
    if (addRep == "" || addWeight == "") {
      good = false;
      alert("You must have all fields filled in!");
      break;
    }
    reps += "_" + addRep;
    weight += "_" + addWeight;
  }
  if (good) {
    reps = reps.substring(1);
    weight = weight.substring(1);
    url_call += reps + "/" + weight
    row.removeClass("in");
    $.post(url_call);
  }
}