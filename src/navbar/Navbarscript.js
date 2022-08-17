import React from 'react'

function Navbarscript() {
  return (
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
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }



    burger = document.querySelector('.burger')
    navbar = document.querySelector('.navbar')
    navlist = document.querySelector('.navlist')
    login1 = document.querySelector('.login1')


    burger.addEventListener('click', () => {
        navlist.classList.toggle('v-class-resp')
        login1.classList.toggle('v-class-resp')
        navbar.classList.toggle('h-nav-resp')
    })

  )
}

export default Navbarscript