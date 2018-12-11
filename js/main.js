var counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
  updateCounterEl();
}
function decrementCounter() {
  counter--;
  console.log(counter);
  updateCounterEl();
}

function updateCounterEl() {
  var counterEl = document.getElementById("counter");
  counterEl.innerText = counter;
}
updateCounterEl();
