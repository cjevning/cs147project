var models = require('../models');

exports.doList = function(req, res){
  var username = req.session.username;
  var user = models.User.find({"username": username}).exec(afterQuery);
  count = 0;
  function afterQuery(err, results) {
    if(err) console.log(err);
    if(results[0]) {
      var id = req.params.id;
      var l = models.LiftList.find({"_id": id}).exec(getList);
      function getList(err, lis) {
        if(err) console.log(err);
        var nam = lis[0].name;
        var now = new Date();
        now.setHours( now.getHours() - 8 );
        models.LiftList.update({"name": nam}, {'lastDone': now}).exec(afterSave);
        function afterSave (err, t) {
          var upd = models.LiftList.find({"lastDone": now}).exec(red);
          function red (err, list) {
            var lift = list[0].lifts;
            var name = list[0].name;
            var last = list[0].lastDone;
            var lifts = [];
            var len = lift.length;
            if (len == 0) res.render('listInProgress', { 'lifts': lifts, 'name': name, "id": id, "lastDone": last});
            for (var i = 0; i < len; i++) {
              var l = models.LiftName.find({"_id": lift[i]}).exec(addToArray);
              function addToArray(err, toAdd) {
                if(err) console.log(err);
                if(toAdd[0]) lifts.push(toAdd[0]);
                count += 1;
                showPage(count);
                function showPage(c) {
                  if (c == len) {
                    //Lets user set their order
                    //lifts.sort(function(a,b) { return ((a.name  == b.name) ? 0 : ((a.name>b.name) ? 1 : -1 )); } );
                    res.render('listInProgress', { 'lifts': lifts, 'name': name, "id": id, "lastDone": last});
                  }
                }
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