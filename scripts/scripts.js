let element = document.querySelector(".menu");
let button = document.querySelector(".button");
let body = document.querySelector('body');

/* Closed and open burger menu */
button.addEventListener("click", () => {
  element.classList.toggle("close-open-menu");
})

/* Stop scroll */
button.addEventListener("click", () => {
    body.classList.toggle("stop-scroll")
})