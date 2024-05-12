const countdown_date = new Date("May 24, 2024 00:00:00").getTime();

const countdown_days = document.getElementById("days");
const countdown_hours = document.getElementById("hours");
const countdown_minutes = document.getElementById("minutes");
const countdown_seconds = document.getElementById("seconds");

let x = setInterval(() => {
    let date_today = new Date().getTime();

    let days_left = countdown_date - date_today;

    let days = Math.floor(days_left / (1000 * 60 * 60 * 24));
    let hours = Math.floor((days_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((days_left % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((days_left % (1000 * 60)) / 1000);

    countdown_days.innerHTML = days < 10 ? "0" + days : days;
    countdown_hours.innerHTML = hours < 10 ? "0" + hours : hours;
    countdown_minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    countdown_seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (days_left < 0) {
        clearInterval(x);
        countdown_days.innerHTML = "00";
        countdown_hours.innerHTML = "00";
        countdown_minutes.innerHTML = "00";
        countdown_seconds.innerHTML = "00";
    }
}, 1000);

// ~~~~~ PREVIEW SLIDE ~~~~~

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



let slidesIndex = [1,1];
let slideId2 = ["mySlides1"]
showSlides2(1, 0);
showSlides2(1, 1);

function plusSlides2(n, no) {
  showSlides2(slidesIndex[no] += n, no);
}

function showSlides2(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {slidesIndex[no] = 1}    
  if (n < 1) {slidesIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slidesIndex[no]-1].style.display = "block";  
}