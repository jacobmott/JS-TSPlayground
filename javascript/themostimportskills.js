//https://www.youtube.com/watch?v=l8pe_MSX4Lc
//The Most Important Skill You Never Learned

function printName(firstName, lastName) {
  console.log(`My name is ${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
}

function printNTimes(n, value) {
  // debugger;
  // let log =
  //   "using debugger keyword/feature here to cause the browser" +
  //   " to pause and allow you to inspect the variables in the current scope";
  // console.log(log);
  // debugger;
  for (let i = 0; i < n; i++) {
    console.log(value);
  }
}

document.addEventListener("click", (e) => {
  console.log("Clicked");
  //document.body.classList.add("js-loading");
  document.body.append("hI");
});

var name2 = printName("John", "Doe");

printNTimes(5, "Hello World");

// debugger;
setTimeout(() => {
  //setTimeout is a browser API
  console.log("Hello World");
}, 1000);

function main() {
  printName("John", "Doe2");
  test();
}

function test() {
  printNTimes(2, "Bye");
}

main();

window.addEventListener("resize", () => {
  console.log("Resized");
});

// debugger;
setTimeout(() => {
  //setTimeout is a browser API
  name2 = "New name";
  console.log("calling settimeout");
}, 5000);
