window.onload=readSingleFile();

function addRows(data) {
    var split = data.split("\n");
    var tableDiv = document.getElementById("tableDiv");
 	var html = "<table id=\"liftsTable\">";
    html += "<tr><td class=\"liftName\" id=\"liftName0\"><div class=\"force7\">Create a Lift</div></td><td class=\"liftButton\" id=\"liftButton0\">";
    buttonImage = "<div class=\"navbar-header\"> <a href=\"placeholder.html\"><button type=\"button\" class=\"navbar-toggle addButton\" " +
        "</button></a></div><!-- /.navbar-collapse -->";
    html += buttonImage + "</td></tr>";
    var rowCount = split.length;
    for (var i = 1; i <= rowCount; i++) {
    	html += "<tr class=\"force7\"><td class=\"liftName\" id=\"liftName" + i + "\"><div class=\"force7\">" + split[i-1] + "</div></td><td class=\"liftButton\" id=\"liftButton" + i + "\">";
    	var buttonImage = "<div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle myButton\" " +
        "data-toggle=\"collapse\" data-target=\"#dropLink" + i + "\" name=\"#dropLink" + i + "\"></button>" +
        "</div><div class=\"collapse navbar-collapse popup\" id=\"dropLink" + i + "\">" + 
        "<ul class=\"nav navbar-nav\"><li class=\"dropLink\" id=\"startButton\"><a href=\"placeholder.html\">Start Lift</a></li>" + 
        "<li class=\"dropLink\" id=\"addToListButton\"><a href=\"placeholder.html\">Add to LiftList(s)</a></li><li class=\"dropLink\" " + 
        "id=\"infoButton\"><a href=\"placeholder.html\">More Info</a></li></ul></div><!-- /.navbar-collapse -->";
	    html += buttonImage + "</td></tr>";
    }
    html += "<tr><td class=\"liftName\"><div class=\"force7\">Get More Lifts...</div></td><td class=\"liftButton\">";
    buttonImage = "<div class=\"navbar-header\"> <a href=\"store.html\"><button type=\"button\" class=\"navbar-toggle addButton\" " +
        "</button></a></div><!-- /.navbar-collapse -->";
    html += buttonImage + "</td></tr>";
    html += "<tr><td><div class=\"force7\"></div></td></tr><tr><td><div class=\"force7\"></div></td></tr><tr><td><div class=\"force7\"></div></td></tr>"
    html += "</table>";
    tableDiv.innerHTML = html;
}

function readSingleFile(evt) {
    $.ajax({ url: "./static/lifts.csv", success: function(data) {
		    addRows(data);
		}
	});
}