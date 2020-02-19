"use strict";
let slideIndex = 1;
const sticky = document.querySelector('nav');
const origOffsetY = sticky.offsetTop;
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const images = document.querySelectorAll('.content');
const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next'); 

function openModal(e) {
  modal.style.display = "flex";
  showSlide(e.target.id);
}

function closeModal() {
  modal.style.display = "none";
}

function exitModalOnEsc(event) {
  if (event.keyCode == 27) {
    closeModal();
  }
}

function exitModalOnClick(event) {
   // console.log(event.target);
  if (event.target == modal) {
    closeModal();
  }
}

function onScroll() {
  (window.scrollY >= origOffsetY) ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

function changeSlide(event) {
  // console.log(event.target.className);
  if (event.target == next) {
    // console.log(Number(slideIndex)+1);
    showSlide(Number(slideIndex)+1);
  }
  else if (event.target == prev) {
    showSlide(Number(slideIndex)-1);
  }
  
}

function showSlide(n) {
  let i;
  if (n > slides.length) {
    n = 1;
  }

  if (n < 1) {
    n = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // console.log(slides[n-1]);
  slides[n-1].style.display = "block";
  // dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;

  slideIndex=n;
}

// EVENT LISTENERS
prev.addEventListener('click', changeSlide);
next.addEventListener('click', changeSlide);

close.addEventListener('click', closeModal);
document.addEventListener('scroll', onScroll);
document.addEventListener('keydown', exitModalOnEsc);

// Close modal when clicking on the space around the content
modal.addEventListener('click', exitModalOnClick);

for (var i = images.length - 1; i >= 0; i--) {
	images[i].addEventListener('click', openModal);
}