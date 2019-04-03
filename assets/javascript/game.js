// create variables
function range(start, end) {
    var myArray = [];
    for (var i = start; i <= end; i += 1) {
        myArray.push(i);
    }
    return myArray;
};

// 4 random crystal values array; 1-12
var crystalValue_1;
var crystalValue_2;
var crystalValue_3;
var crystalValue_4;
var crystalValuesArray = range(1, 12);
console.log(crystalValuesArray);
// Random given number array; 19-120
var givenNumber;
var givenNumberArray = range(19, 120);
console.log(givenNumberArray);

function assignCrystalValues() {
    crystalValue_1 = crystalValuesArray[Math.floor(Math.random() * crystalValuesArray.length)];
    crystalValue_2 = crystalValuesArray[Math.floor(Math.random() * crystalValuesArray.length)];
    crystalValue_3 = crystalValuesArray[Math.floor(Math.random() * crystalValuesArray.length)];
    crystalValue_4 = crystalValuesArray[Math.floor(Math.random() * crystalValuesArray.length)];
    console.log(crystalValue_1, crystalValue_2, crystalValue_3, crystalValue_4);
}

function assignGivenNumber() {
    givenNumber = givenNumberArray[Math.floor(Math.random() * givenNumberArray.length)];
    console.log("GIVEN NUMBER: ", givenNumber)
}

// running total score; runningTotal
var runningTotal;
// wins counter
// wins are 0, losses are 0
var numberWins = 0;
// losses counter
var numberLosses = 0;
// html divs
// setup
// runningTotal is 0 
// randomly assign crystal values
// randomly assign given number
// display number
function gameSetUp() {
    runningTotal = 0;
    assignCrystalValues();
    assignGivenNumber();
    $("#given-number").text(givenNumber);
    $(".running-total").text(runningTotal);
}

gameSetUp();

// player clicks crystal


$(".crystal").on("click", function() {
    console.log("THIS: " + this)
   var crystalValue = $(this).attr
   console.log(crystalValue);
// value is added to runningTotal score; displayed
runningTotal += crystalValue;
// $(".running-total").text(runningTotal);
    // check - is runningTotal less than givenNumber?
        // if runningTotal is less, player clicks another crystal
        // if runningTotal is more, player loses
            //losses counter +1
            //new random values assigned to crystals and givenNumber
            //runningTotal is reset to 0
        // if runningTotal is equal to givenNumber, player wins
            // wins counter +1
})
    
            // new random values assigned to crystals and givenNumber
            // runningTotal is reset to 0


