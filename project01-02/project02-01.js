/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Greg Janvier 
      Date:   4/10/2024

      Filename: project02-01.js
 */

function CelsiusToFahrenheit (degree) {
  return degree * 1.8 + 32;
}

function FareheitToCelsius (degree) {
  return degree * 1.8 - 32;
}
      
document.getElementById("cValue").onchange = function () {
  let cDegree = document.getElementById("cValue").value;
  document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  }  

document.getElementById("fValue").onchange = function() {
  let fDegree = document.getElementById("fValue").value;
  document.getElementById("cValue").value = FareheitToCelsius(fDegree);
}

    