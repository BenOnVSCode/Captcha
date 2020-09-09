const randomLetters = document.getElementById('randomLetters');
const inputFiled = document.getElementById('input-field');
const click = document.getElementById('click');
const get = document.getElementById('get');
const message = document.getElementById('message');
var randomString = Math.random().toString(36).substring(2, 2) + Math.random().toString(36).substring(2, 15);


get.addEventListener('click', getTheRandom);
click.addEventListener('click', check);
function getTheRandom() {
    randomLetters.innerHTML = randomString;
    return randomString ;
}
function check() {
    var randomx = getTheRandom() ; 
    var inputValue = inputFiled.value ;
    if (inputValue !== randomx ) {
      updateCaptcha();
      message.style.color = 'red' ;
      message.innerHTML = "Try Again!";
    }
    if (inputValue == randomx) {
      message.style.color = 'green';
      message.innerHTML = "Good!";
    }
}




function updateCaptcha() {
  var randomString = Math.random().toString(36).substring(2, 2) + Math.random().toString(36).substring(2, 15);
  setTimeout(randomString, 5);
  randomLetters.innerHTML = randomString;
}









