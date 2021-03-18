const body = document.body;
body.style.backgroundImage =
  "url('https://www.transparenttextures.com/patterns/argyle.png')";

const replaceText = document.getElementById("replace-text");
replaceText.style.color = "#777";
replaceText.style.fontSize = "2em";
replaceText.innerHTML = "I can do <em>whatever</em> I want with JavaScript.";

const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
