let score = 0;
const questions = [
  {
    qn: "The sum of the length of any two sides of a triangle is always ______ than the third side.",
    ans: "greater",
    opt: ["smaller", "larger", "greater"],
  },
  {
    qn: "How many vertices a triangle have?",
    ans: "3",
    opt: ["3", "90", "4"],
  },
  {
    qn: "What is the sum of all three angles of a triangle?",
    ans: "180 degree",
    opt: ["90 degree", "180 degree", "360 degree"],
  },
];

const askQns = () => {
  for (let i = 0; i < questions.length; i++) {
    console.log(`Questions ${i + 1}. ${questions[i].qn}`);
    for (let j = 0; j < questions[i].opt.length; j++) {
      console.log(`${j + 1}. ${questions[i].opt[j]}`);
    }
  }
};

askQns();
