console.log("Hej hej");
const menuBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

menuBtn.addEventListener("click", myFunction);
closeBtn.addEventListener("click", myFunction);


function myFunction() {
  const hamburger = document.querySelector(".menu");
  hamburger.classList.toggle("visible");
  closeBtn.classList.toggle("hidden");
  menuBtn.classList.toggle("hidden");
  console.log("Klicka");
}

