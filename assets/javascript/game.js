/* Generate random number between 
a minimum and maximum range. */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Assign the minimum of 19 
and maximum of 120 for the random number */
var numberGuess = randInt(19, 120);
console.log(numberGuess);

/* Input random value into the HTML */
$("#numberGuess").text(numberGuess);

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

var ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(ranNums);

for (var i = 0; i < 4; i++) {
  var imgCrystal = $("<img>");

  imgCrystal.addClass("crystal-Img");

  imgCrystal.attr(
    "src",
    "/assets/images/01crystal.png",
    "/assests/images/02crystal.jpg"
  );

  imgCrystal.attr("crystalValue", ranNums[i]);

  $("#crystalImg").append(imgCrystal);
}
