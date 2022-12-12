// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 12 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-cookie-clicker/sw.js", {
    scope: "/ICS2O-Unit6-02-cookie-clicker/",
  })
}

/**
 * This function counts points for each click.
 */
function cookieClicked() {

  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks) +1
  } else {
    localStorage.clicks = 0
  }
  
  document.getElementById("points").innerHTML = "Points: " + localStorage.clicks
}


