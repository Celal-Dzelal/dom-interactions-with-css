//! Selectors

const container = document.getElementsByClassName("container");
const sectionColor = document.getElementById("section-color");
const sectionText = document.getElementById("section-text");
const sectionText1 = document.getElementById("section-text1");
const trigger = document.getElementById("trigger");
const info = document.getElementsByClassName("info");
const header = document.getElementsByTagName("h2");
const ul = document.getElementsByTagName("ul");
const li = document.getElementsByTagName("li");

trigger.textContent = "Enter the Button";
trigger.style.color = "#0d0d0d";
trigger.style.fontWeight = "bold";
trigger.style.fontSize = "1rem";
trigger.style.cursor = "pointer";

document.body.addEventListener("keypress", (e) => {
  sectionText.textContent = `Key Code: ${e.keyCode}`;
  sectionText1.textContent = `You Pressed: ${e.key}`;
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  sectionColor.style.backgroundColor = randomColor;
  sectionColor.textContent = randomColor;
  sectionText.style.backgroundColor = randomColor;
  sectionText1.style.backgroundColor = randomColor;
  trigger.style.backgroundColor = randomColor;
});

trigger.addEventListener("click", () => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  sectionColor.style.backgroundColor = randomColor;
  sectionColor.textContent = randomColor;
  sectionText.style.backgroundColor = randomColor;
  sectionText1.style.backgroundColor = randomColor;
  trigger.style.backgroundColor = randomColor;
  sectionText1.textContent = "Button Clicked";
  if (event.button === 0) {
    sectionText.textContent = `Left Mouse Button`;
  }
});
