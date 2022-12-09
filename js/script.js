// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02/sw.js", {
    scope: "/ICS2O-Unit-5-02/",
  })
}

const randomNumberPos = Math.floor(Math.random() * 6) + 1
const randomNumberNeg = Math.floor(Math.random() * -6) + 1

/**
 * This function displays positive and negative number
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById("flash1").checked

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberPos + "."
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your random number is: " + randomNumberNeg + "."
  }
}
