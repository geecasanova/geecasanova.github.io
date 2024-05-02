/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Greg Janvier
      Date:   4/25/2024

      Filename: project02-02.js
 */

//function for script
function verifyForm() {

    //declare variables
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    //conditional operator
    (name && email && phone) ? window.alert("Thank you!") : window.alert("Please fill in all fields");
}

//give submit eventlistener to peform function.
document.getElementById("submit").addEventListener("click", verifyForm);