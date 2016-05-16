/**
 * Created by yudis on 5/15/2016.
 */
var express = require('express'),
    router = express.Router(),
    home = require('../controllers/home'),
    image = require('../controllers/image');

module.exports = function(app) {
    app.get('/', home.index);
    app.get('/images/:image_id', image.index);
    app.post('/images', image.create);
    app.post('/images/:image_iaaqd/like', image.like);
    app.post('/images/:image_id/comment', image.comment);
    app.use(router);
};
