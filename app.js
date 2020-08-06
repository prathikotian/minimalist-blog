const express = require('express'),
      app = express(),
      routes = require('./routes/routes'),
      port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/img'));
app.set('view engine', 'ejs');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server started listening on port ${port}`);
})
