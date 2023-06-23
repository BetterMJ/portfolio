// Welcome Screen animation
const targetElement = document.getElementById("typed-text");
  const textToType = "Hey! I'm Matteo Jakob, a Developer.";
  setTimeout(function () {
  typeOut(textToType, targetElement);
}, 700);

function typeOut(text, targetElement) {
  const typingDelay = 30;
  const randomDelayMin = 10;
  const randomDelayMax = 50;
  let i = 0;

  const typeNextChar = () => {
    if (i >= text.length) {
      return;
    }

    const char = text[i];
    const delay =
      typingDelay +
      Math.random() * (randomDelayMax - randomDelayMin) +
      randomDelayMin;

    setTimeout(() => {
      targetElement.textContent += char;
      i++;
      typeNextChar();
    }, delay);
  };

  typeNextChar();
}

// Header animation
const header = document.querySelector("header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("header--hidden");
  } else {
    header.classList.remove("header--hidden");
  }
  lastScrollY = window.scrollY;
});

//elements animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      //entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// elements animation landing page
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showOp");
    } else {
      //entry.target.classList.remove("showOp");
    }
  });
});

const hiddenElements2 = document.querySelectorAll(".hiddenOp");
hiddenElements2.forEach((el) => observer2.observe(el));


//header landing animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const hiddenElements = document.querySelectorAll(".hiddenV");
    hiddenElements.forEach((el) => el.classList.add("showV"));
  }, 3500);
});


// Header Dropdown
var dropdownbtn = document.getElementById("dropdown")
var dropdowncontent = document.getElementById("dropdown-content")
var dropdownlinks = document.querySelectorAll(".dropdownlink")
let isOpen = false;

dropdownbtn.addEventListener("click", changeFlex)

dropdownlinks.forEach((link) => {
  link.addEventListener("click", removeDropDown)
})

function changeFlex() {
  if (isOpen){
    removeDropDown()
  }
  else{
    showDropDown()
  }
}

function showDropDown(){
  dropdowncontent.classList.add("displayflex")
  isOpen = true;
}
function removeDropDown(){
  dropdowncontent.classList.remove("displayflex")
  isOpen = false;
}