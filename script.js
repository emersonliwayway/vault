/* pseudocode:
1. create a string that says "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
2. make three varialbles the result of a unique operator, each one is part of the vault code 10 - 40 - 39.
3. add comments to explain code
4. create dialogue box that displays vault code */

// string variable containing message
let message =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// vault variables
let num1 = 5 + 5;
let num2 = 8 * 5;
let num3 = 41 - 2;

// print message and variables by concantenation and include dashes/spacing
alert(`${message} ${num1} - ${num2} - ${num3}`);
