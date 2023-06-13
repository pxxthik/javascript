// Write a program using prompt function to take input of age as a value from user and use alert to tell him if he can drive
let age = prompt("Enter your age: ")
age = Number.parseInt(age)
alert(`You can${age>18?" drive":"t drive"}`)

// In question 1 confirm to ask the user if he wants to see the prompt again
let prompt_again = confirm("Want to see prompt again")
if(prompt_again){
  age = prompt("Enter your age: ")
  age = Number.parseInt(age)
  alert(`You can${age>18?" drive":"t drive"}`)
}

// In the previous question use console.error to log the error if the age entered is negative
if(age<0){
  console.error("Please enter valid age")
}

// Write program to change the url to google.com if user entered number is greater than 4
if(age===77){
  window.location.href = 'https://google.com'
}

// Change the background of the page to yellow red or any other color based on user input through prompt

let color = prompt("Enter the color: ")
document.body.style.background = color