// Write a javascript program to genearate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.
// 100 - no. of gueses is the score of the user. The program is expected to terminate once the number is guesed. Number should be between 1-100

let actual_number = Math.floor(Math.random() * 100);
let score = 100;
let predicted_number = Number.parseInt(prompt("Predict a number: "));

while(true){
  if(predicted_number === actual_number){
    console.log("\n***** You Won! Your Score is "+ score+ " *****")
    break
  }else if(predicted_number < actual_number){
    console.log("Predicted number was lesser than actual number\n")
    score--;
    predicted_number = Number.parseInt(prompt("Predict a number: "));
  }else if(predicted_number > actual_number){
    console.log("Predicted number was greater than actual number\n")
    score--;
    predicted_number = Number.parseInt(prompt("Predict a number: "));
  }
}