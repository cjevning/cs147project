var models = require('../models');

exports.view = function(req, res){
  var username = req.session.username;
  var user = models.User.find({"username": username}).exec(afterQuery);
  count = 0;
  function afterQuery(err, results) {
    if(err) console.log(err);
    if(results[0]) {
      var id = req.params.id;
      var l = models.LiftList.find({"_id": id}).exec(getList);
      function getList(err, list) {
        if(err) console.log(err);
        console.log(list[0]);
        var lift = list[0].lifts;
        var name = list[0].name;
        var last = list[0].lastDone;
        var lifts = new Array();
        var len = lift.length;
        if (len == 0) res.render('viewList', { 'lifts': lifts, 'name': name, "id": id, "lastDone": last});
        for (var i = 0; i < len; i++) {
          var l = models.Lift.find({"_id": lift[i]}).exec(addToArray);
          function addToArray(err, toAdd) {
            if(err) console.log(err);
            if(toAdd[0]) lifts.push(toAdd[0]);
            count += 1;
            showPage(count);
            function showPage(c) {
              if (c == len) {
                //Lets user set their order
                //lifts.sort(function(a,b) { return ((a.name  == b.name) ? 0 : ((a.name>b.name) ? 1 : -1 )); } );
                res.render('viewList', { 'lifts': lifts, 'name': name, "id": id, "lastDone": last});
              }
            }
          }
        }
      }
    }
    else {
      req.session.errorMessage = "You must be signed in to do that!";
      res.redirect('/');
    }
  }
};