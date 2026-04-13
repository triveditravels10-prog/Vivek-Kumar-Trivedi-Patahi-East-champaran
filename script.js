




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




// 🔥 TIMER
let time = 0;
let running = false;
let interval;

function updateTimer(){
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let secs = time % 60;

  document.getElementById("timer").innerText =
    String(hrs).padStart(2,'0') + ":" +
    String(mins).padStart(2,'0') + ":" +
    String(secs).padStart(2,'0');
}

function startTimer(){
  if(!running){
    running = true;
    interval = setInterval(() => {
      time++;
      updateTimer();
    },1000);
  }
}

function stopTimer(){
  running = false;
  clearInterval(interval);
}

function resetTimer(){
  running = false;
  clearInterval(interval);
  time = 0;
  updateTimer();
}

// 🔥 TASK LIST
function addTask(){
  let input = document.getElementById("taskInput");
  let task = input.value;

  if(task === "") return;

  let li = document.createElement("li");
  li.innerText = task;

  li.onclick = function(){
    li.style.textDecoration = "line-through";
  }

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// 🔥 MOTIVATION
function showQuote(){
  let quotes = [
    "No one is coming. Build yourself.",
    "Discipline beats motivation.",
    "You vs You.",
    "Focus now, flex later.",
    "Pain of regret > pain of effort."
  ];

  let random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = random;
}


// 🔒 PIN CHECK
function checkPin(){
  let pin = document.getElementById("pinInput").value;

  if(pin === "1234"){   // 👉 अपना PIN बदल लेना
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("loaderScreen").style.display = "flex";

    startLoading(); // 👉 loading start
  } else {
    document.getElementById("error").innerText = "Wrong PIN!";
  }
}


// 💻 LOADING SYSTEM
let messages = [
  "Initializing System...",
  "Connecting to Server...",
  "Bypassing Security...",
  "Decrypting Data...",
  "Access Granted ✔"
];

let i = 0;
let j = 0;
let currentText = "";
let speed = 50;

function startLoading(){
  typeEffect();
}

function typeEffect(){
  if(i < messages.length){
    if(j < messages[i].length){
      currentText += messages[i].charAt(j);
      document.getElementById("typingText").innerText = currentText;
      j++;
      setTimeout(typeEffect, speed);
    } else {
      currentText = "";
      j = 0;
      i++;
      setTimeout(typeEffect, 500);
    }
  } else {
    setTimeout(() => {
      document.getElementById("loaderScreen").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    }, 500);
  }
}






// 🔥 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCu9pQYnkbGRTVN8798C3ilvrc6Z_EmrH0",
  authDomain: "trivedi-8d263.firebaseapp.com",
  projectId: "trivedi-8d263",
  storageBucket: "trivedi-8d263.firebasestorage.app",
  messagingSenderId: "531536403649",
  appId: "1:531536403649:web:1a0f1d76856590eb0b8840"
};

// 🔥 Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();








// 🔐 LOGIN
function login(){
  let provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(() => alert("Login Successful 🔥"))
  .catch(err => alert(err.message));
}

// 🔓 LOGOUT
function logout(){
  auth.signOut();
  alert("Logged out");
}

// 📝 POST ADD
function addPost(){
  let text = document.getElementById("postInput").value;

  if(text !== ""){
    db.collection("posts").add({
      message: text,
      time: Date.now()
    });

    document.getElementById("postInput").value = "";
  }
}

// 📜 SHOW POSTS (LIVE)
db.collection("posts").orderBy("time", "desc")
.onSnapshot(snapshot => {
  let feed = document.getElementById("feed");
  feed.innerHTML = "";

  snapshot.forEach(doc => {
    let li = document.createElement("li");
    li.innerText = doc.data().message;
    feed.appendChild(li);
  });
});












function addPost(){
  let text = document.getElementById("postInput").value;

  if(text !== ""){
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    
    posts.push(text);
    localStorage.setItem("posts", JSON.stringify(posts));

    showPosts();
    document.getElementById("postInput").value = "";
  }
}

function showPosts(){
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  let feed = document.getElementById("feed");

  feed.innerHTML = "";

  posts.reverse().forEach(p => {
    let li = document.createElement("li");
    li.innerText = p;
    feed.appendChild(li);
  });
}

// load on start
showPosts();





