// get required elements
const inputSide = document.getElementsByClassName("input-side");
const btnGetHypo = document.getElementById("btn-get-hypo");
const divOutput = document.getElementById("div-output");

// addEventListener for check btn click
btnGetHypo.addEventListener("click", () => {
  // get sum of elements
  const sum = getSum();
  const hypo = Math.sqrt(sum) ;
  if (sum !== undefined) setMessage(hypo);
});

// arrow function to calculate sum.
const getSum = () => {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    if (inputSide[i].value === "" || Number(inputSide[i].value) < 0) {
      alert("Enter positive numbers for each sides.");
      return undefined;
    } else {
      sum += (Number(inputSide[i].value))**2;
    }
  }
  return sum;
};

// arrow function to set the message (result)
const setMessage = (hypo) => {
  let outputMessage = `Hypotenuse = <strong>${hypo}</strong>`;
    divOutput.innerHTML = outputMessage;
};
