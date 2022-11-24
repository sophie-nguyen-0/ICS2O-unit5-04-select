// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-unit5-04-select/sw.js", {
    scope: "/ICS2O-unit5-04-select/",
  })
}

/**
 * this function
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}
