const inputAngels = document.getElementsByTagName("input");
const btnCheck = document.getElementById("btn-check");
const divOutput = document.getElementById("div-output");

btnCheck.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (
      inputAngels[i].value === '' ||
      Number(inputAngels[i].value) < 0
    ) {
      alert("Enter positive numbers for each angle.");
      return;
    } else {
      sum += Number(inputAngels[i].value);
    }
  }
  let outputMessage;
  if (sum === 180)
    outputMessage = " <strong>Yes!</strong> given angel can form a triangle.🎉️";
  else
    outputMessage = "<strong>No!</strong> given angel can NOT form a triangle.";

//   let outputPara = document.createElement("p");
//   outputPara.id = "para-output";
//   outputPara.innerHTML = outputMessage;
  //   divOutput.appendChild(outputPara);
  divOutput.innerHTML = outputMessage;
});
