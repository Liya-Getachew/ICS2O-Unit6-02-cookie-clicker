// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Dec 12 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-cookie-clicker/sw.js", {
    scope: "/ICS2O-Unit6-02-cookie-clicker/",
  })
}

/**
 * This function counts points for each click.
 */
function updateCookieClicker() {
  if (localStorage.clicks) {
    document.getElementById("points").innerHTML =
      "Points: " + localStorage.clicks
  } else {
    localStorage.clicks = 0
  }
}

/**
 * This function counts points for each click.
 */
function cookieClicked() {
  localStorage.clicks++

  document.getElementById("points").innerHTML = "Points: " + localStorage.clicks
}
