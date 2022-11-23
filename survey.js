const readline = require('readline');

// Create two objects to hold our questions and user answers
// if questions are less then 7
// go next question until finished
// generate profile to user
// 


const questions = {
 
  0: "What's your name? Nicknames are also acceptable :)",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  3: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  4: "What's your favourite thing to eat for that meal?",
  5: "Which sport is your absolute favourite?",
  6: "What is your superpower? In a few words, tell us what you are amazing at!"

};

const answers = {

  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: ""

};

const rl = readline.createInterface({
  
  input: process.stdin,
  output: process.stdout

});

let i = 0;

const question = function() {
  
  if (i < 7) {

    rl.question(`${questions[i]}\n`, (answer) => {
      answers[i] = answer;

      i++;

      console.log();

      question();

    });
  
  } else {

    rl.close();

    console.log("New Profile is being generated. Please wait a moment:");

    setTimeout(() => console.log(`

    Your name is ${answers[0]}. Your favorite activity is ${answers[1]}, while listening to ${answers[2]}. Your favorite meal of the day is ${answers[3]}, and you love to eat ${answers[4]} during that time. Your absolute favorite sport is ${answers[5]}. You are amazing at ${answers[6]}.

  `), 1500);
  }
};

question();
/*
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
*/
