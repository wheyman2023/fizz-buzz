// Pseudo Code
// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

let answer = parseInt(
  prompt(
    "Please enter the number you would like to FizzBuzz up to:"
  ) /* When a user inputs a number */
);

for (let i = 1; i <= answer; i++) {
  /* Loop from 1 to the entered number */

  if (i % 3 === 0 && i % 5 === 0) {
    /* If the current number is divisible by 3 and 5 then print "FizzBuzz" */
    /* With the condition if (i % 3 === 0 && i % 5 === 0) coming first, 
    we check that i is divisible by both 3 and 5 before moving on to check 
    if it is divisible by 3 or 5 individually in the else if conditions. */
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    /* If the current number is divisible by 3 then print "Fizz" */
    console.log("Fizz");
  } else if (i % 5 === 0) {
    /* If the current number is divisible by 5 then print "Buzz" */
    console.log("Buzz");
  } else {
    /* Otherwise print the current number */
    console.log(i);
  }
}
