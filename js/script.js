// Copyright (c) 2020 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Nov 2022
// This file contains the JS functions for index.html

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-02/sw.js", {
    scope: "/ICS2O-Unit-5-02/",
  })
}

/**
 * This function updates slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked(buttonOnChecked) {
  let buttonPositiveChecked = document.getElementById("positive").checked

  if (buttonPositiveChecked == true) {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    document.getElementById("radio-button-value").inenrHTML =
      "Value is: " + randomNumber
  } else {
    let randomNumber = Math.floor(Math.random() * -6) - 1
    document.getElementById("radio-button-value").inenrHTML =
      "Value is: " + randomNumber
  }
}
