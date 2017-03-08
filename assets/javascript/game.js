$(document).ready(function(){

  var audioElement1 = document.createElement('audio');
  audioElement1.setAttribute('src', 'https://s3-us-west-1.amazonaws.com/week4sounds/sounds/register.WAV');

  var audioElement2 = document.createElement('audio');
  audioElement2.setAttribute('src', 'https://s3-us-west-1.amazonaws.com/week4sounds/sounds/register.mp3');

  var song = document.createElement('audio');
  song.setAttribute('src', 'https://s3-us-west-1.amazonaws.com/week4sounds/sounds/song.mp3');

  var wins = 0;
  var losses = 0;

  var counter;
  var numberGuess;

  var crystal1 = $( '#crystal1_span' );
  var crystal2 = $( '#crystal2_span' );
  var crystal3 = $( '#crystal3_span' );
  var crystal4 = $( '#crystal4_span' );


  $('#startButton').on('click', function(){
    audioElement1.play();

    $( '#startButton' ).effect( 'puff' );
    $( '#crystal1_span' ).effect( 'pulsate' );
    $( '#crystal2_span' ).effect( 'pulsate' );
    $( '#crystal3_span' ).effect( 'pulsate' );
    $( '#crystal4_span' ).effect( 'pulsate' );
  });


  $('.crystal-btn').on('click', function(){
    $( this ).effect( 'pulsate' )
    counter += $( this ).data( 'crystal-value' )
    $( '#playerCounter' ).html( counter );

    if (counter > numberGuess) {
      gameLose();
    } else if (counter === numberGuess) {
      gameWin();
    };

  });

  function generateRandomNumber (min, max) {
    max -= min;
    return Math.floor(Math.random() * max) + min;
  };

  function setRandomGameValues () {
    crystal1.data( 'crystal-value', generateRandomNumber(1, 12) );
    crystal2.data( 'crystal-value', generateRandomNumber(1, 12) );
    crystal3.data( 'crystal-value', generateRandomNumber(1, 12) );
    crystal4.data( 'crystal-value', generateRandomNumber(1, 12) );

    counter = 0;
    $( '#playerCounter' ).html( counter );

    numberGuess = generateRandomNumber(19, 120);
    $( '#numberToGuess').html( numberGuess );
  };

  function gameLose () {

    losses ++;

    $('#playerLosses').html(losses);

    alert('You lost Crystal Collector!');

    setRandomGameValues();
  };

  function gameWin () {

    song.play();

    wins ++;

    $('#playerWins').html(wins);

    alert('You Win!');

    setRandomGameValues();
  };

  setRandomGameValues();

  $('#playerCounter').html(counter);
  $('#playerWins').html(wins);
  $('#playerLosses').html(losses);

});
