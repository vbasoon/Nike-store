$(window).scroll(function () {
   var scrl = $(window).scrollTop()
   if (scrl < 60) {
      $('.header-top').removeClass('fixedbar');
   }
   else {
      $('.header-top').addClass('fixedbar');
   }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}


function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName('myslides');
   if (n > slides.length) { slideIndex = 1 }
   if (n < 1) { slideIndex = slides.length }
   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";
}