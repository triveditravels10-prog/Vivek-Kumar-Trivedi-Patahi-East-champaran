




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






























window.addEventListener('DOMContentLoaded', () => {
  // Slide fade-in
  const slide = document.querySelector('.slide');
  slide.style.opacity = 1;

  // Button click
  const btn = document.getElementById('showMore');
  const extra = document.getElementById('extraInfo');
  if(btn && extra){
    btn.addEventListener('click', () => {
      extra.style.display = extra.style.display === 'none' ? 'block' : 'none';
    });
  }

  // Random quote
  const quotes = [
    "Dream big, work hard!",
    "Success comes to those who hustle.",
    "Your only limit is your mind.",
    "Be fearless in the pursuit of greatness.",
    "Small steps every day lead to big results."
  ];
  const quoteEl = document.getElementById('quote');
  if(quoteEl){
    quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  }

// ===== Sliding image left → right =====
  const slideImage = document.querySelector('.slide-img img');
  if(slideImage){
    setTimeout(() => {
      slideImage.style.left = '0'; // screen me slide in
    }, 500); // 0.5s delay
  }
  
});






window.addEventListener('load', () => {
  const images = document.querySelectorAll('.slide-img img');
  let current = 0;

  // first image show
  images[current].style.left = '0';
  images[current].style.opacity = '1';

  setInterval(() => {
    // hide current
    images[current].style.left = '-100%';
    images[current].style.opacity = '0';

    // next index
    current = (current + 1) % images.length;

    // show next
    images[current].style.left = '0';
    images[current].style.opacity = '1';

  }, 3000);
});



