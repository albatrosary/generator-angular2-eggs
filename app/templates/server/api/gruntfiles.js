/**
 * Gruntfiles Server module.
 *
 * url:
 * * get: /api/gruntfiles
 *
 * @module server.api.gruntfiles
 */
'use strict';

exports = module.exports = function(app) {

  var Db = require('tingodb')().Db;
  var db = new Db('./server/data/', {});
  var collection = db.collection('gruntfiles');

  app.get('/api/gruntfiles', function(req, res) {
    collection.find().toArray(function(err, items) {
      res.status(200).json(items);
    });
  });
};
