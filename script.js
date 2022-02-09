let counterValue = document.querySelector(".screen");
let ctrStringValue = counterValue.innerText;
let ctrNumericValue = parseInt(ctrStringValue);

function buttonClick(value) {
  switch (value) {
    case "←":
      handleDecrease();
      break;

    case "→":
      handleIncrease();
      break;

    case "Reset":
      counterValue.innerText = "0";
      ctrNumericValue = 0;
      break;
  }
}

function handleIncrease() {
  ctrNumericValue += 1;

  counterValue.innerText = ctrNumericValue;
}

function handleDecrease() {
  if (ctrNumericValue > 0) {
    ctrNumericValue -= 1;
  } else {
    return;
  }

  counterValue.innerText = ctrNumericValue;
}

function init() {
  document.querySelector(".counter").addEventListener("click", (event) => {
    buttonClick(event.target.innerText);
  });
}

init();
