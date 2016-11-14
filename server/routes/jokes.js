var express = require('express');
var router = express.Router();

// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];

//POST request that gets joke and adds it to the array of jokes.
router.post('/', function(req, res) {
  var joke = req.body;
  console.log("joke post: ", joke);
  jokes.push(joke);
  console.log(jokes);
  res.sendStatus(201);
});

router.get('/', function(req,res) {
  res.send(jokes);
});

module.exports = router;
