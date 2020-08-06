const express = require('express'),
      app = express(),
      port = process.env.port || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/img'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('main');
});

app.get('/blog', (req, res) => {
  res.render('posts');
});

app.get('/p0', (req, res) => {
  res.render('posts/post1');
});

app.get('/p1', (req, res) => {
  res.render('posts/post2');
});

app.get('/p2', (req, res) => {
  res.render('posts/post3');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
})
