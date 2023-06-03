function MenuSwitch() {
    document.querySelector("div.menu-container").classList.toggle("menu-visible");
}

function AccomSelect() {
    document.querySelector("div.nav-accom").classList.toggle("menu-choice");
}
function GallerySelect() {
    document.querySelector("div.nav-gallery").classList.toggle("menu-choice");
}
function RestoSelect() {
    document.querySelector("div.nav-resto").classList.toggle("menu-choice");
}
function ActivitySelect() {
    document.querySelector("div.nav-activity").classList.toggle("menu-choice");
}

let slideIndex = [1,1,1,1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
    // x[i].style.display = "none";  
  }
//   x[slideIndex[no]-1].style.display = "block"; 
  x[slideIndex[no]-1].style.opacity = "1"; 
}