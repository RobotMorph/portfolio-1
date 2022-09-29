let element = document.querySelector(".menu");
let button = document.querySelector(".button");
let body = document.querySelector('body');
let lang = document.querySelector('.lang');

/* Closed and open burger menu */
button.addEventListener("click", () => {
   element.classList.toggle("close-open-menu");
})

/* Add languages menu */
button.addEventListener("click", () => {
  lang.classList.toggle("add-lang");
})


/* Stop scroll */
button.addEventListener("click", () => {
    body.classList.toggle("stop-scroll")
})


button.addEventListener("click", () => {
  button.classList.toggle("button-click-top");
})