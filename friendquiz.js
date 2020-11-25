var readlineSync = require("readline-sync");
const chalk = require('chalk');
 

var userName = readlineSync.question("What's your name? ");

console.log(chalk.magenta.bold("welcome "+userName+" do you know Amit Singh? "));

var scores=[{
  name:"Amit Singh",
  scores:"3"
}]
score=0

function play(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Congratulation you are right"));
    score=score+1;
  }else{
    console.log(chalk.red("oops you are wrong"))
  }

  console.log("your current score is :"+score)
  console.log("-------------")
}

var questions = [{
  question: "Where do I live? ",
  answer: "Mumbai"
}, {
  question: "My favorite superhero would be? ",
  answer: "Iron Man"
},
{
  question: "What is your job status? ",
  answer: "Fresher"
},{
   question: "What is my collage name? ",
  answer: "Vidyalankar Institute of technology" 
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.magenta.bold("Yah! You scored "+score))
console.log(chalk.red.bold("Congratulation you have completd the game"))

for(i=0;i<scores.length;i++){
  var highscore = scores[i].scores
  if(score>highscore){
    console.log("congratulations you have beat the High score")
    console.log("congratulations "+userName+" you are leading the game with the highest score")
  }
}