const express = require('express'),
      router = express.Router();
      
router.get('/', (req, res) => {
res.render('main');
});

router.get('/blog', (req, res) => {
  res.render('posts');
});

router.get('/p0', (req, res) => {
  res.render('posts/post1');
});

router.get('/p1', (req, res) => {
  res.render('posts/post2');
});

router.get('/p2', (req, res) => {
  res.render('posts/post3');
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;