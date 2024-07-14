function elementCreator(element) {
  return () => {
    return document.createElement(element);
  };
}

const createDiv = elementCreator("div");
const createSpan = elementCreator("span");
const newDiv = createDiv();
const newSpan = createSpan();

const newContent = document.createTextNode("Hi there and greetings!");
const newContent2 = document.createTextNode("Hi there and greetings!");

const currentDiv = document.getElementById("div1");
newDiv.appendChild(newContent);
newSpan.appendChild(newContent2);
currentDiv.appendChild(newDiv);
currentDiv.appendChild(newSpan);
