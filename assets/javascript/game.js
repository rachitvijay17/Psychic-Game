var computerChoices = ["a", "b", "c","d", "e", "f", 
                           "g", "h", "i","j", "k", "l", 
                           "m", "n", "o","p", "q", "r", 
                           "s", "t", "u","v", "w", "x", 
                           "y", "z"];
    var losses = 0;
    var win = 0;
    var guessleft = 9;
    var guessessofar = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function() 
    {

      // Determines which key was pressed.
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      //userText.textContent = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
     // var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if((userGuess.match(/[a-zA-Z]/) && userGuess.length == 1)){
      if((userGuess===computerGuess)){
          win++;
          guessessofar = [];
          guessleft = 9;
          alert("You guessed the correct letter: " + computerGuess);
      }
      if((userGuess !== computerGuess))
      {
          guessleft--;
          guessessofar.push(userGuess);
      }
      if(guessleft == 0){
          losses++;
          guessleft = 9;
          guessessofar = [];
          alert("The correct letter was: " + computerGuess);
      }

    }else{
        alert("Invalid selection");
    }
      document.getElementById("Yourwin").textContent = "Wins: "+ win;
      document.getElementById("Yourlosses").textContent = "Losses: "+ losses;
      document.getElementById("GuessesLeft").textContent = "Guesses Left: "+ guessleft;
      document.getElementById("Guesses").textContent = "Your guesses so far: "+ concatenation(guessessofar);

    };
      
    function concatenation(array){
        var str = "";
        for (var i = 0; i < array.length; i++){
            if (str === ""){
                str = array[i];
            }
            else{
                str = str+", "+array[i];
            }
        }
        return str;
    }