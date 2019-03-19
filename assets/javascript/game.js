/* Create Wins, Losses and Counter variable */
var won = 0;
var loss = 0;
var counter = 0;
var numberGuess;
var ranNums;

/* Display counters at start of game */
$("#counter").text(counter);
$("#won").text(won);
$("#loss").text(loss);

/* Generate random number between 
a minimum and maximum range. */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Function to shuffle crystal value array */
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/* Function to start a new game */
function newGame() {
  $("#crystalImg").empty();

  /* Select guess between 19-120 inclusive */
  numberGuess = randInt(19, 120);
  $("#numberGuess").text(numberGuess);

  /* Assign ranNums a shuffled array */
  ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  /* Attach first four array indexes to 
  crystal images and put into HTML */
  for (var i = 0; i < 4; i++) {
    var imgCrystal = $("<img>");

    imgCrystal.addClass("crystal-Img");

    imgCrystal.attr("src", "./assets/images/" + i + "crystal.png");

    imgCrystal.attr("crystalValue", ranNums[i]);

    $("#crystalImg").append(imgCrystal);
  }

  counter = 0;
  $("#counter").text(counter);

  /* Create on-click function to add values to counter
and check if player won or lost */
  $(".crystal-Img").on("click", function() {
    var crystalValue = $(this).attr("crystalValue");
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $("#counter").text(counter);

    if (counter === numberGuess) {
      $("#counter").text(counter);
      alert("You Win!");
      won++;
      $("#won").text(won);
      newGame();
    } else if (counter >= numberGuess) {
      $("#counter").text(counter);
      alert("You Lose!");
      loss++;
      $("#loss").text(loss);
      newGame();
    }
  });
}

/* Start a new game */
newGame();