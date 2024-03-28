// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Niko
// Created on: march 2022
// This file contains the JS functions for index.html

"use strict"

// function to calculate percentage
function calculatePercentage() {
  // declaring variable for 
  let testMarks = document.getElementById("testmarks").value;

  // declaring variable for wage with value set as value inputed by user 
  let testTotal = document.getElementById("testtotal").value;

  // calculates result by multiplying the inputed wage and hours together to get total pay
  let result = testMarks/testTotal * 100;
  document.getElementById("user-info").innerHTML = "Your test score was " + result.toFixed(0) + "%.";

}


// Take the score and divide it by the number of questions and multiply it by 100 to get the percentage
