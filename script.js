const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
console.log("Acitve");
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// javacript for more or less
function myFunction1() {

    var dots1 = document.getElementById(`dots1`);
    var moreText1 = document.getElementById(`more1`);
    var btnText1 = document.getElementById(`myBtn1`);
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
    
  }
function myFunction2() {

    var dots1 = document.getElementById(`dots2`);
    var moreText1 = document.getElementById(`more2`);
    var btnText1 = document.getElementById(`myBtn2`);
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
    
  }
function myFunction3() {

    var dots1 = document.getElementById(`dots3`);
    var moreText1 = document.getElementById(`more3`);
    var btnText1 = document.getElementById(`myBtn3`);
  
    if (dots1.style.display === "none") {
      dots1.style.display = "inline";
      btnText1.innerHTML = "Read more";
      moreText1.style.display = "none";
    } else {
      dots1.style.display = "none";
      btnText1.innerHTML = "Read less";
      moreText1.style.display = "inline";
    }
    
  }

  var typed = new Typed(".auto-type", {
    strings: ["Exploration", "History", "Achievements", "Future Prospects"],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
  })