// Created by: Niko
// Created on: march 2022
// This file contains the JS functions for index.html

"use strict"

// function to calculate percentage front-end only
function calculatePercentage() {
  // declaring variable for test marks
  let testMarks = document.getElementById("testmarks").value;

  // declaring variable for test total
  let testTotal = document.getElementById("testtotal").value;

  // calculates result by dividing test marks by test total and then multiplying by 100
  let result = testMarks/testTotal * 100;
  document.getElementById("user-info").innerHTML = "Your test score was " + result.toFixed(1) + "%.";

}

// function to calculate average
// someString in function brackets acts as a place holder for the function, and when you want to use the function ,you input a variable in place of someString, and it will calculate the function for that variable instead.
function calculateAverageBackend(someString) {
  // declaring variable for test scores

  // split creates an array of strings, and counts the number of strings and saves it as a variable called numberOfPluses, so now that number of strings(the amount of test scores the user inputs) is saved as a variable called numberOfPluses and can be called.
  let numberOfPluses = someString.split('+').length;
  
  // if the user inputs no test scores, it will just display 0
  if (numberOfPluses == 0) return 0;
  
  // does final calculation, evaluates and calculates the sum of the test scores, and divides it by the number of test scores the user inputted
  let result = eval(someString)/numberOfPluses;
  
  // closes function and returns the result
  return result;
 

}


// front-end function to calculate average 
function calculateAverage() {
  // declaring variable for test scores
  let testScores = document.getElementById("testscores").value;
  // declares variable called results to display the result when testscores are plugged into the back-end function
  let myResult = calculateAverageBackend(testScores);
  document.getElementById("average").innerHTML = "Your average test score is " + myResult.toFixed(1) + "%.";
  // calculates average by dividing test marks by test total and then multiplying by 100

}
