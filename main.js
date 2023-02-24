const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("click", toggleClass);
closeBtn.addEventListener("click", toggleClass);


function toggleClass() {
  const hamburger = document.querySelector(".menu");
  hamburger.classList.toggle("visible");
  closeBtn.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
} 
