




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
});




