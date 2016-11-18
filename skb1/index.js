var express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.get('/', (req, res, next) => {

  const a = typeof(req.query.a)=="undefined" ? 0 : +req.query.a;
  const b = typeof(req.query.b)=="undefined" ? 0 : +req.query.b;
  //console.log(`Query: ${req.originalUrl} <br>-<br>Вывод: ${a + b}`);
  console.log(a+b);
  res.send(a+b+"");

});

app.listen(3000, function() {
	console.log('App listening on port 3000!');
});
