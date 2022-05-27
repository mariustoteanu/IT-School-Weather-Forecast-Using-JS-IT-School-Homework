let scrollToTopButton = document.querySelector(".material-icons");
console.log(scrollToTopButton);

let windowHeight = window.innerHeight;
let halfOfWindowHeight = windowHeight / 2;

function handleScroll() {
  if (window.scrollY > halfOfWindowHeight) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
}

window.addEventListener("scroll", handleScroll);

function handleClick() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

scrollToTopButton.addEventListener("click", handleClick);
