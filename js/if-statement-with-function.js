var score = 75;             // Score
var msg = '';               // message

function congratulate() {
    msg += 'Congratulations! ';
}

if (score >= 50) {   // If score is 50 or higher
    congratulate();
    msg += ' Proceed to the next round.';
}
var el = document.getElementsById('answer');
el.innerHTML = msg;
