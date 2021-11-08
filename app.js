let cross = document.querySelector("#cross");
let other = document.querySelector(".other");
let notes = document.querySelector(".notes");
let main = document.querySelector("main");
let discount = document.querySelector(".discount");

cross.addEventListener("click", () => {
  notes.classList.remove("blur");
  main.classList.remove("blur");
  discount.classList.add("hidden");
});

other.addEventListener("click", () => {
  notes.classList.remove("blur");
  main.classList.remove("blur");
  discount.classList.add("hidden");
});

let navBtn = document.querySelector("#navBtn");
let navList = document.querySelector("#navList");
let navArea = document.querySelector("#navArea");
navBtn.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  navArea.classList.toggle("opacity-05");
});
