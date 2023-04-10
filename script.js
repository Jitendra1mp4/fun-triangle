const inputAngels = document.getElementsByTagName("input");
const btnCheck = document.getElementById("btn-check");
const divOutput = document.getElementById("div-output");

btnCheck.addEventListener("click", () => {
  let sum = getSum();
  if (sum !== undefined) setMessage(sum);
});

const getSum = () => {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (inputAngels[i].value === "" || Number(inputAngels[i].value) < 0) {
      alert("Enter positive numbers for each angle.");
      return undefined;
    } else {
      sum += Number(inputAngels[i].value);
    }
  }
  return sum;
};

function setMessage(sum) {
  let outputMessage;
  if (sum === 180)
    outputMessage =
      " <strong>Yes!</strong> given angel can form a triangle.🎉️";
  else
    outputMessage = "<strong>No!</strong> given angel can NOT form a triangle.";
  divOutput.innerHTML = outputMessage;
}
