const quizForm = document.querySelector(".form-quiz");
const btnCheckAnswers = document.querySelector("#btn-check-answer");
const outPut = document.querySelector(".output");
// const read = require('readline-sync')
// const questions = [
//   {
//     qn: "The sum of the length of any two sides of a triangle is always ______ than the third side.",
//     ans: "greater",
//     opt: ["smaller", "larger", "greater"],
//   },
//   {
//     qn: "How many vertices a triangle have?",
//     ans: "3",
//     opt: ["3", "90", "4"],
//   },
//   {
//     qn: "What is the sum of all three angles of a triangle?",
//     ans: "180 degree",
//     opt: ["90 degree", "180 degree", "360 degree"],
//   },
// ];
const ans = ["greater", "3", "180 degree"];
// const askQns = () => {
//   for (let i = 0; i < questions.length; i++) {
//     console.log(`Questions ${i + 1}. ${questions[i].qn}`);
//     for (let j = 0; j < questions[i].opt.length; j++) {
//       console.log(`${j + 1}. ${questions[i].opt[j]}`);
//     }
//   }
// };

// askQns();
const handleCheckAnswerClick = () => {
  const quizFormData = new FormData(quizForm);
  let score = 0;
  let i = 0;
  for (let entry of quizFormData.entries()) {
    if (entry[1] == ans[i]) score += 5;
    i++;
  }
  outPut.innerHTML= `your score is <strong> ${score} </Strong>` ;
};
btnCheckAnswers.addEventListener("click", handleCheckAnswerClick);
