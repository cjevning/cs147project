window.onload=readSingleFile();

function addRows(data) {
    var split = data.split("\n");
    var tableDiv = document.getElementById("tableDiv");
 	var html = "<table id=\"listsTable\">";
    html += "<tr><td class=\"listName\" id=\"listName0\"><div class=\"force7\">Create a New LiftList</div></td><td class=\"listButton\" id=\"listButton0\">";
    buttonImage = "<div class=\"navbar-header\"> <a href=\"placeholder.html\"><button type=\"button\" class=\"navbar-toggle addButton\" " +
        "</button></a></div><!-- /.navbar-collapse -->";
    html += buttonImage + "</td></tr>";
    var rowCount = split.length;
    for (var i = 1; i <= rowCount; i++) {
    	html += "<tr><td class=\"listName\" id=\"listName" + i + "\"><div class=\"force7\">" + split[i-1] + "</div></td><td class=\"listButton\" id=\"listButton" + i + "\">";
        var buttonImage = "<div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle myButton\" " +
        "data-toggle=\"collapse\" data-target=\"#dropLink" + i + "\" name=\"#dropLink" + i + "\"></button>" +
        "</div><div class=\"collapse navbar-collapse popup\" id=\"dropLink" + i + "\">" + 
        "<ul class=\"nav navbar-nav\"><li class=\"dropLink\" id=\"startButton\"><a href=\"placeholder.html\">Start LiftList</a></li>" + 
        "<li class=\"dropLink\" id=\"editButton\"><a href=\"placeholder.html\">Edit LiftList</a></li>" + 
        "</ul></div><!-- /.navbar-collapse -->";
        html += buttonImage + "</td></tr>";
    }
    html += "<tr><td class=\"liftName\"><div class=\"force7\">Get More LiftLists...</div></td><td class=\"listButton\">";
    buttonImage = "<div class=\"navbar-header\"> <a href=\"store.html\"><button type=\"button\" class=\"navbar-toggle addButton\" " +
        "</button></a></div><!-- /.navbar-collapse -->";
    html += buttonImage + "</td></tr>";
    html += "<tr><td><div class=\"force7\"></div></td></tr><tr><td><div class=\"force7\"></div></td></tr><tr><td><div class=\"force7\"></div></td></tr>"
    tableDiv.innerHTML = html;
}

function readSingleFile(evt) {
    $.ajax({ url: "./static/lists.csv", success: function(data) {
		    addRows(data);
		}
	});
}