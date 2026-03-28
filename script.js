window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});






// Visitor Counter
let count = localStorage.getItem("visits");

if(count === null){
  count = 1;
} else {
  count = parseInt(count) + 1;
}

localStorage.setItem("visits", count);

let countBox = document.getElementById("count");
if(countBox){
  countBox.innerText = "Total Visits: " + count;
}


// Clock
function updateClock(){
  let clock = document.getElementById("clock");
  if(clock){
    clock.innerText = new Date().toLocaleTimeString();
  }
}

setInterval(updateClock, 1000);


// Welcome
window.addEventListener("load", function(){
  alert("Welcome to TRIVEDI 🚀");
});



