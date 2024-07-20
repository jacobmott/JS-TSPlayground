//https://www.youtube.com/watch?v=NIq3qLaHCIs

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const a = alphabet[0];
// const b = alphabet[1];

// const [a, b] = alphabet;
// const [a, , c] = alphabet;
const [a, , c, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

console.log(a);
//console.log(b);
console.log(c);
console.log(rest);
console.log(newArray);

function func1(a, b) {
  return [a + b, a * b];
}

const array = func1(2, 3);
console.log(array);

// const [sum, multiply] = func1(2, 3);

// console.log(sum);
// console.log(multiply);

const [sum, multiply, division = "no division"] = func1(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);

const personOne = {
  name: "John",
  age: 21,
  address: {
    city: "New York",
    country: "USA",
  },
};

const personTwo = {
  name: "Andrew",
  age: 22,
  address: {
    city: "Toronto",
    country: "Canada",
  },
};

const personThree = {
  name: "Michael",
  favoriteFood: "Pizza",
};

const { name, age } = personTwo;

console.log(name);
console.log(age);

const { name: firstName, age: whatAge } = personTwo;

console.log(firstName);
console.log(whatAge);

const { name: anotherName, age: anotherAge, favoriteFood = "Rice" } = personTwo;

console.log(anotherName);
console.log(anotherAge);
console.log(favoriteFood);

const { name: anotherName2, ...theRest } = personTwo;

console.log(anotherName2);
console.log(theRest);

const {
  name: anotherName3,
  address: { country: anotherCountry },
  address: { street: anotherStreet = "123" },
} = personTwo;

console.log(anotherName3);
console.log(anotherCountry);
console.log(anotherStreet);

const personFour = { ...personOne, ...personThree };

console.log(personFour);

function printUser(user) {
  //console.log(user);
  console.log(`Name: ${user.name}. Age: ${user.age}`);
}

function printUserViaDestructuring({ name, age }) {
  //console.log(user);
  console.log(`Name: ${name}. Age: ${age}`);
}

printUser(personOne);

printUserViaDestructuring(personOne);
