// create variables
// 4 random crystal values array; 1-12
var crystalValue_1;
var crystalValue_2;
var crystalValue_3;
var crystalValue_4;
// Random given number array; 19-120
var givenNumber;

function randomNumber(multiplier) {
    return Math.ceil(Math.random() * multiplier)
}

function assignCrystalValues() {
    var crystalValues = [];
    var crystalValue;
    for (var i = 0; i < 4; i++) {
        do {
            crystalValue = randomNumber(12);
        } while (crystalValues.includes(crystalValue))
        crystalValues.push(crystalValue)
    }


    crystalValue_1 = crystalValues[0];
    crystalValue_2 = crystalValues[1];
    crystalValue_3 = crystalValues[2];
    crystalValue_4 = crystalValues[3];
    console.log(crystalValue_1, crystalValue_2, crystalValue_3, crystalValue_4);
}

function assignGivenNumber() {
    givenNumber = randomNumber(101) + 18;
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
    $("#crystal1").attr("crystal-value", crystalValue_1);
    $("#crystal2").attr("crystal-value", crystalValue_2);
    $("#crystal3").attr("crystal-value", crystalValue_3);
    $("#crystal4").attr("crystal-value", crystalValue_4);
    $("#given-number").text(givenNumber);
    $("#running-total").text(runningTotal);
}

gameSetUp();

// player clicks crystal


$(".crystal").on("click", function (event) {
    console.log($(this).attr("crystal-value"))
    // value is added to runningTotal score; displayed
    runningTotal += parseInt($(this).attr("crystal-value"));
    // check - is runningTotal less than givenNumber?
    if (runningTotal == givenNumber) {
        console.log("YOU WIN")
        numberWins++
        $("#win-lose").html($("<h2>").text("WINNERRRRRR"));
        $("#wins").text(numberWins);
        gameSetUp();
    } else if (runningTotal > givenNumber) {
        console.log("YOU LOSE")
        numberLosses++
        $("#win-lose").html($("<h2>").text("LOSERRRRR"));
        $("#losses").text(numberLosses);
        gameSetUp();
    }
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


