let lamp = document.getElementById("lamp");
const section = document.querySelector("section");
const button = document.createElement("button");
button.setAttribute("type", "button");
button.appendChild(document.createTextNode("Troca a Lâmpada"));

lamp.addEventListener("mouseenter", () => {
  lamp.classList.remove("off");
  lamp.classList.add("on");
});
lamp.addEventListener("mouseleave", () => {
  lamp.classList.remove("on");
  lamp.classList.add("off");
});
lamp.addEventListener("click", function teste() {
  lamp.classList.remove("on");
  lamp.classList.add("broken");
  section.appendChild(button);
});

button.addEventListener("click", () => {
  lamp.classList.remove("broken", "off");
  lamp.classList.add("off");
  document.querySelector("button").remove();
});
