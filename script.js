

// Click Event on generate button for generate random Number
const generateBtn = document.querySelector('.generate-btn');
generateBtn.addEventListener('click', function () {
  displayGeneratePin(randomNumber());
  document.querySelector('.no_match').style.display = 'none';
})

// Output Generate Pin
function displayGeneratePin(input) {
  return document.querySelector('#pin_display').value = input;
}

// Generate Random Number 
function randomNumber() {
  return randomNumberValue = Math.round(Math.random() * 9000 + 1000);
}

randomNumber()

// Get Input Value
function getInputValue() {
  return document.querySelector('#pin_input').value;
}

// keyBoard input
function printKeyInputValue(input) {
  return document.querySelector('#pin_input').value = input;
}

//  PIN Match notify
function matchNotify() {
  const match = document.querySelector('.match_notify');
  match.style.display = 'block';
}

// Hide main page and notify
function hideMainPage() {
  getHalfWidth = document.querySelectorAll('.half-width');
  getHalfWidth.forEach(function (i) {
    i.style.display = 'none';
  })
}

// Add click event on submit button
const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function () {
  if (getInputValue().length == 4 && getInputValue() >= 100) {
    const getInputNumber = parseInt(getInputValue());
    if (getInputNumber === randomNumberValue) {
      matchNotify();
      hideMainPage()

    } else {
      const noMatch = document.querySelector('.no_match');
      noMatch.style.display = 'block'
    }
  } else {
    alert('Enter 4 Digit Valid Number');
  }
})

// Keyboard input
function keyboardInput() {
  const getNumbers = document.querySelectorAll('.number-key');
  getNumbers.forEach(function (number) {
    number.addEventListener('click', function () {
      var singleNumber = parseInt(this.innerText);

      var inputValue = getInputValue();
      var add = inputValue + singleNumber;

      printKeyInputValue(add);

    })
  })
}

keyboardInput();

// clear function
function clear() {
  printKeyInputValue('');
}

// Backspace function
function backspace() {
  var backSpace = getInputValue();
  backSpace = backSpace.substr(0, backSpace.length - 1);
  printKeyInputValue(backSpace);
}

// add Click event on clear button for clear data 
const clearBtn = document.querySelector('.clear-key');
clearBtn.addEventListener('click', function () {
  clear()
});

// add click event on backspace button for backspacing
const backspaceBtn = document.querySelector('.backspace-key');
backspaceBtn.addEventListener('click', function () {
  backspace()
})