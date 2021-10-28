var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // Build a fake url so we can get the search parameters using a URL object
  fake_url = "https://fake.com/path" + req.url
  const url = new URL(fake_url)
  const search_params = url.searchParams
  var input = Math.floor((Math.random() * 100) + 1)
  var output = null
  if(search_params.get("x")){
    input = search_params.get("x")
  }


  res.write(`Math.abs() applied to ${input} is ${Math.abs(input)}\n`);
  res.write(`Math.acos() applied to ${input} is ${Math.acos(input)}\n`);
  res.write(`Math.sin() applied to ${input} is ${Math.sin(input)}\n`);
  res.write(`Math.sinh() applied to ${input} is ${Math.sinh(input)}`);
  res.send();

});

module.exports = router;

   
   