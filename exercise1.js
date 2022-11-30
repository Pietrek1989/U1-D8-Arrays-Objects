/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let arrayOfNumbers = [1, 2, 3, 4, 5];
console.log(arrayOfNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let detailsObject = {
  name: "Piotr",
  surname: "Rodzen",
  email: "rodzyn1989@gmail.com",
  age: 32,
};
console.log(detailsObject);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

detailsObject.hasDrivingLicence = true;
console.log(detailsObject);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

delete detailsObject.age;
console.log(detailsObject);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let detailsObject2 = {
  name: "Piotr",
  surname: "Rodzen",
  email: "techpietrek@gmail.com",
};
console.log(detailsObject2);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/
console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let totalAmmount = 60;
let totalShoppingCard = totalAmmount;
if (totalShoppingCard > 50) {
  totalAmmount -= 5;
  console.log(
    "You're eligble for a free shipping! Your total ammount due is: ",
    totalAmmount,
    "$"
  );
} else {
  console.log("You have", totalAmmount, "$ to pay");
}
/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

totalAmmount = 100;
let discount = totalAmmount * 0.2;
let blackFriday = totalAmmount - discount;
if (blackFriday > 50) {
  blackFriday -= 5;
  console.log(
    "You're in luck only today we offer Black Friday discount which gives you 20% of all products! You're also eligble for a free shipping!\nYour total ammount due is: ",
    blackFriday,
    "$"
  );
} else {
  console.log(
    "You're in luck only today we offer Black Friday discount which gives you 20% of all products!\nYou have",
    blackFriday,
    "$ to pay"
  );
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let Dacia = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "KN67 8WR",
};
let Dacia2 = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "WD6 5SD",
};
let Dacia3 = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "AB1 2BD",
};
let Dacia4 = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "OP9 4DW",
};
let Dacia5 = {
  brand: "Dacia",
  model: "Sandero",
  licensePlate: "LO2 2SI",
};

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let carsForRent = [Dacia, Dacia2, Dacia3, Dacia4, Dacia5];
console.log(carsForRent);
/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);
carsForRent.pop();
carsForRent.shift();
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

console.log(Dacia2.brand, Dacia2.model, Dacia2.licensePlate);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

let carsForSale = [];
carsForSale = ["Audi", "BMW", "Dacia"];
let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log(
  "\n ----------------------------next exercise--------------------------\n"
);

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
