var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Ratchapong Website'});
});


router.get('/download/:filename', function (req, res) {
    var file = __dirname + '/documents/' + req.params.filename;
    res.download(file); // Set disposition and send it.
});

router.get('/projects', function (req, res, next) {
    return res.redirect('/#portfolio');
});

router.get('/home', function (req, res, next) {
    return res.redirect('/#home');
});


router.get('/projects/firstwebsite/', function (req, res, next) {
    res.render('firstwebsite/index', {title: 'My First Website!'});
});


router.get('/projects/firstwebsite/mailform', function (req, res, next) {
    res.render('firstwebsite/mailform', {title: 'My First Website!'});
});

router.get('/projects/matlabship', function (req, res, next) {
    res.render('projects/matlabship', {title: 'MATLAB Pirate Ship'});
});

router.get('/projects/findgeorge', function (req, res, next) {
    res.render('projects/findgeorge', {title: 'Find George'});
});

router.get('/projects/trainlab', function (req, res, next) {
    res.render('projects/trainlab', {title: 'Train Lab'});
});

router.get('/projects/angrymonkey', function (req, res, next) {
    res.render('projects/angrymonkey', {title: 'Angry Monkey'});
});

router.get('/projects/gameofthrones', function (req, res, next) {
    res.render('projects/gameofthrones', {title: 'Game of Thrones'});
});

router.post('/projects/firstwebsite/thankyou', function (req, res, next) {
    res.render('firstwebsite/thankyou', {title: 'My First Website!'});
});

router.get('/projects/indoornavigation', function (req, res, next) {
    res.render('projects/indoornavigation', {
        title: 'Indoor Navigation' +
        ' Prototype'
    });
});
module.exports = router;
