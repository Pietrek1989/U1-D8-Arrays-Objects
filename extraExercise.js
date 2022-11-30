// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let arrayOfNumbers = [1, 3, 5];
arrayOfNumbers.reverse();
console.log(arrayOfNumbers);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

console.log(Math.max(...arrayOfNumbers));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

console.log(Math.min(...arrayOfNumbers));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);
let arrayOfNumbers2 = [1, 2, 5];
for (let i = 0; i < arrayOfNumbers2.length; i++) {
  let evenorNot = arrayOfNumbers2[i] % 2;
  if (evenorNot === 0) {
    console.log(arrayOfNumbers2[i], "is an even number");
  } else {
    console.log(arrayOfNumbers2[i], "is not an even number");
  }
}

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

for (let i = 0; i < arrayOfNumbers2.length; i++) {
  let removeorNot = arrayOfNumbers2[i] % 2;
  if (removeorNot === 0) {
    console.log(delete arrayOfNumbers2[i], "Removed as even");
  } else {
    console.log(arrayOfNumbers2[i], "Not removed as it's not even number");
  }
}

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let stringVowels = "This is an example string";
let stringNoVowels = stringVowels.replace(/[aeiouy]/g, " ");
console.log(stringNoVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);
let arrayOfNumbers3 = [1, 5, 10];
for (let i = 0; i < arrayOfNumbers3.length; i++) {
  arrayOfNumbers3[i]++;
}
console.log(arrayOfNumbers3);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let arraySentence = ["strive", "is", "great"];
for (let i = 0; i < arraySentence.length; i++) {
  arraySentence[i] = arraySentence[i].length;
  console.log(arraySentence[i]);
}
