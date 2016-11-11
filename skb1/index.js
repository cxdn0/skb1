var express = require('express');

const app = express();
app.get('/', (req, res, next) => {

  const a = typeof(req.query.a)=="undefined" ? 0 : +req.query.a;
  const b = typeof(req.query.b)=="undefined" ? 0 : +req.query.b;
  res.send(`Query: ${req.originalUrl} <br>-<br>Вывод: ${a + b}`);

});

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});
