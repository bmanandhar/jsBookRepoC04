var score = 75;             // Score
var msg = '';               // message

if score (score >= 50) {    // If score is 50 or higher
  msg = 'Congratulations!';
  msg += ' Proceed to the next round';
}
var el = document.getElementsById('answer');
el.textContent = msg;
