console.log("JS Connected");






window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});



// AOS.init({
//   duration:1000,
//   once:true
// });

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// mobile menu auto close
document.querySelectorAll('.nav-link').forEach(link=>{
  link.addEventListener('click',()=>{
    document.querySelector('.navbar-collapse').classList.remove('show');
  });
});

// order success alert
// document.getElementById("orderForm").addEventListener("submit",e=>{
//   e.preventDefault();
//   alert("Order placed successfully!");
//   e.target.reset();
// });


function placeOrder() {
  document.getElementById("successPopup").classList.add("show");

  const sound = document.getElementById("successSound");
  sound.currentTime = 0;
  sound.play();
}

function closePopup() {
  document.getElementById("successPopup").classList.remove("show");
}



const words = ["Indian Food", "Hyderabadi Biryani", "Korean Dish"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){
  const current = words[wordIndex];
  const typingSpan = document.querySelector(".typing");

if(!typingSpan) return; // safety check

  if(!deleting){
    typingSpan.textContent = current.substring(0, charIndex++);
    if(charIndex >= current.length){
      deleting = true;
      setTimeout(()=>{},1000);
    }
  }else{
    typingSpan.textContent = current.substring(0, charIndex--);
    if(charIndex === 0){
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typingEffect, 120);
}

typingEffect();


