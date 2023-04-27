//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
 dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
 dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string,  dog_names) {
    let foundMatch = false;
    for (let i = 0; i <  dog_names.length; i++) {
      if (dog_string.includes( dog_names[i])) {
        console.log(`Matched ${ dog_names[i]}`);
        foundMatch = true;
      }
    }
    if (!foundMatch) {
      console.log("No Matches");
    }
  }

console.log(findWords(dog_string,  dog_names))
 



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

 const arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]


function replaceEvens(arr){
    for (let i=0; i<arr.length; i+=2){
       
        arr.splice(i,1,"even index")
        
        }
    return arr
    }

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//######## Codewars problem 1 :

// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2
// You can assume that the two inputs are ASCII strings of equal length.


function hammingDistance(a, b) {
  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i].toLowerCase() !== b[i].toLowerCase()) {
      distance++;
    }
  }
  return distance;
}
//######## Codewars problem 2 :

    // Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

    // multiply(3)==15 # 3 * 5¹
    // multiply(10)==250 # 10 * 5²
    // multiply(200)==25000 # 200 * 5³
    // multiply(0)==0 # 0 * 5¹
    // multiply(-3)==-15 # -3 * 5¹
    function multiply(number) {
      if (number === 0) {
        return 0;
      } else {
        const power = Math.abs(number).toString().length;
        return number * Math.pow(5, power);
      }
    }
