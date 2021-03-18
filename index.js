const body = document.body;
body.style.backgroundImage =
  "url('https://www.transparenttextures.com/patterns/argyle.png')";

const replaceText = document.getElementById("replace-text");
replaceText.style.color = "#777";
replaceText.style.fontSize = "2em";
replaceText.innerHTML = "I can do <em>whatever</em> I want with JavaScript.";

const blueElements = document.getElementsByClassName("blue");

for (let i = 0; i < blueElements.length; i++) {
  blueElements[i].style.color = "blue";
}
