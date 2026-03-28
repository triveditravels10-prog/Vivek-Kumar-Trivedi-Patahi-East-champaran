




window.addEventListener("load", function(){

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

});


