$(document).ready(function() {
  console.log('js loaded');
  getJokes();
  $('#submitJoke').on('click', submitJoke);
});


function getJokes() {
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(data) {
      console.log("You have recieved the joke data ", data);
      appendJokesToDom(data);
    },
    error: function() {
      console.log("error with getJokes function");
    }
  });
}


function appendJokesToDom(data) {
  for (var i = 0; i < data.length; i++) {
    var joke = data[i];
    $('.joke-container').append('<p>Name: ' + joke.whoseJoke + '</p><p>' + joke.jokeQuestion + '</p><p>' + joke.punchLine + '</p>');
  }
  $('p').css({'display': 'block'});
}

//function to push users joke to the server
function submitJoke() {
  var jokeObject = {
    whoseJoke: $('#whoseJoke').val(),
    jokeQuestion: $('#jokeQuestion').val(),
    punchLine: $('#punchLine').val()
  };
  console.log("Joke Object: ", jokeObject);
  $.ajax({
    type: 'POST',
    url: '/jokes',
    data: jokeObject,
    success: function(data) {
      console.log("back from ajax call: ", data);
      getLastJoke(data);
    },
    error: function() {
      console.log("error with AJAX post");
    }
  });
}

//function to append and fade in recently added joke
function getLastJoke(data) {
  $.ajax({
    type: 'GET',
    url: '/jokes/',
    success: function(data) {
      console.log("received latestJoke data: ", data);
      appendLastJoke(data);
    },
    error: function() {
      console.log("error receiving latestJoke data");
    }
    });
}

function appendLastJoke(data) {
  var lastJoke = data.length - 1;
  $('.joke-container').append('<p>Name: ' + data[lastJoke].whoseJoke + '</p><p>' + data[lastJoke].jokeQuestion + '</p><p>' + data[lastJoke].punchLine + '</p>');
  $('p').fadeIn('slow');
}
