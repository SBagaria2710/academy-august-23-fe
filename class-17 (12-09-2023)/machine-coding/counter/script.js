const counterValue = document.getElementById("counter-value");
const incrementbtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const changeByInput = document.getElementById("changeBy");

incrementbtn.addEventListener('click', function() {
  counterValue.textContent = Number(counterValue.textContent) + Number(changeByInput.value);
});

decrementBtn.addEventListener('click', function() {
  let newValue = Number(counterValue.textContent) - Number(changeByInput.value);
  counterValue.textContent = (newValue < 0) ? 0 : newValue;
});

changeByInput.addEventListener('change', function(e) {
  const changeByNumber = e.target.value;

  if (changeByNumber > 10) {
    changeByInput.value = 10;
  }
});

resetBtn.addEventListener('click', function() {
  counterValue.textContent = 0;
  confirm("Counter reset to 0");
});