// get required elements
const inputBase = document.getElementById("base");
const inputHeight = document.getElementById("height");
const btnGetArea = document.getElementById("btn-get-area");
const divOutput = document.getElementById("div-output");

// addEventListener for btn-get-area click
btnGetArea.addEventListener("click", () => {
  // get sum of elements
  if (inputBase.value !== "" || inputBase.value !== "") {
    const area = getArea(inputBase.value, inputHeight.value);
    inform(area);
  } else inform();
});

// arrow function to calculate area.
const getArea = (base, height) => {
  return (base * height) / 2;
};

// arrow function to set the message (result)
const inform = (area = "") => {
  let message;
  if (area !== "") message = `Area of Triangle = <strong>${area}</strong>`;
  else message = "Please enter the values and try again!";
  divOutput.innerHTML = message;
};
