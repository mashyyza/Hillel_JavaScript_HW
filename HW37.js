const range = document.querySelector('.range');
const number = document.querySelector('.number');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const count = document.querySelector('.count');

range.addEventListener('input', updateValues);
number.addEventListener('input', updateValues);

function updateValues() {
  const value = Number(this.value);
  number.value = value;
  green.style.height = value + 'px';
  const commission = calculateCommission(value);
  red.style.bottom = value + 'px';
  red.style.height = value * commission + 'px';
  count.innerHTML = (value * (1 + commission)).toFixed(2);
}

function calculateCommission(value) {
  if (value < 20) {
    return 0.02;
  } else if (value >= 20 && value < 50) {
    return 0.04;
  } else if (value >= 50 && value < 75) {
    return 0.06;
  } else {
    return 0.08;
  }
}

