




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
