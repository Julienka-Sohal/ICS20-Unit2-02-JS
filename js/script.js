// Copyright (c) 2020 Julienka Sohal All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */

function doMathClicked() {
  document.getElementById("area-math").innerHTML =
    "<p> The area for this rectangle is " + 5 * 3 + " cm² <p>"
  document.getElementById("perimeter-math").innerHTML =
    "<p> The perimerter is = " + 2 * (5 + 3) + " cm </p>"
}
