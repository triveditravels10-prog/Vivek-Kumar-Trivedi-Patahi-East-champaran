




window.addEventListener("load", function(){

  // Clock
  function updateClock(){
    let clock = document.getElementById("clock");
    if(clock){
      clock.innerText = new Date().toLocaleTimeString();
    }
  }

  setInterval(updateClock, 1000);

});












// Simple fade-in effect
const slide = document.querySelector('.slide');
slide.style.opacity = 0;

window.addEventListener('load', () => {
  slide.style.transition = 'opacity 1s';
  slide.style.opacity = 1;
});





// Fade-in slide on load
const slide = document.querySelector('.slide');
window.addEventListener('load', () => {
  slide.style.opacity = 1;
});

// Click to reveal extra info
const btn = document.getElementById('showMore');
const extra = document.getElementById('extraInfo');

btn.addEventListener('click', () => {
  extra.style.display = extra.style.display === 'none' ? 'block' : 'none';
});

// Random quotes generator
const quotes = [
  "Dream big, work hard!",
  "Success comes to those who hustle.",
  "Your only limit is your mind.",
  "Be fearless in the pursuit of greatness.",
  "Small steps every day lead to big results."
];

const quoteEl = document.getElementById('quote');
quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
