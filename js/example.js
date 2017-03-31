var table = 3;                      // Unit of table
var operator = 'addition';          // Type of calculation (default to addition)
var i = 1;                          // Set counter to 1
var msg = '';                       // Message

if (operator === 'addition') {      // If the operator variable says addition
  while (i < 11) {                  // While counter is less than 11
    msg += 1 + ' + ' + table + ' = ' + (i + table) + '<br />'; // calculation
    i++;                            // Add 1 to counter
  }
} else {                            // Otherwise
  while (i < 11) {                  // While counter is less than 11
    msg += 1 + ' x ' + table + ' = ' + (i * table) + '<br />'; // calculation
    i++;                            // Add 1 to counter
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
