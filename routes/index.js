var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  var list = [];
  var programmers = [];
  programmers = appdata.inventors;

  appdata.inventors.forEach(function(item){
    list = list.concat(item.artwork);
  });

  res.render('index', {
    title: 'Home',
    artwork: list,
    genius: programmers,
    page: 'home'
  });
});

/* GET warrior page. */
router.get('/warriors', function(req, res, next) {

  var list = [];
  var programmers = [];
  programmers = appdata.inventors;

  appdata.inventors.forEach(function(item){
    list = list.concat(item.artwork);
  });

  res.render('warriors', {
    title: 'Warriors',
    artwork: list,
    genius: programmers,
    page: 'warriorsList'
  });
});

/* GET specific warrior page. */
router.get('/warriors/:id', function(req, res, next) {

  var list = [];
  var programmers = [];

  appdata.inventors.forEach(function(item){
    if(item.shortname == req.params.id){
      programmers.push(item);
      list = list.concat(item.artwork);
    }
  });

  res.render('warriors', {
    title: 'Warriors',
    artwork: list,
    genius: programmers,
    page: 'warriorsDetail'
  });
});


router.get('/login', function (req, res, next) {

  var list = [];
  var programmers = [];


  res.render('login', {
    title: 'LOGIN',
    page: 'loginpage'
  })

})

router.get('/contactus', function (req, res, next) {

  var list = [];
  var programmers = [];


  res.render('contact', {
    title: 'Contact Us',
    page: 'contactpage'
  })

})

router.get('/help', function (req, res, next) {

  var list = [];
  var programmers = [];


  res.render('help', {
    title: 'Help',

    page: 'helppage'
  })

})

router.get('/about', function (req, res, next) {

  var list = [];
  var programmers = [];


  res.render('about', {
    title: 'About',
    page: 'aboutpage'

  })

})

module.exports = router;
