var buttons = 0;

function button() { 
  buttons += 1;
  document.getElementById("counter").innerHTML = buttons;
}

function giveButtons(num) {
  buttons += num;
  document.getElementById("counter").innerHTML = buttons
}
