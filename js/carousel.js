// carousel de imagens

const carousel = document.querySelector(".carousel-2");
var moved = "";

function prev() {
  moved = "prev";
  carousel.getElementsByTagName("div")[2].classList.remove("active");
  if (window.innerWidth <= 600) {
    carousel.style.transform = 'translate(100%)';
  } else {
    carousel.style.transform = 'translate(23%)';
  }
}

function next() {
  moved = "next";
  carousel.getElementsByTagName("div")[2].classList.remove("active");
  if (window.innerWidth <= 600) {
    carousel.style.transform = 'translate(-100%)';
  } else {
    carousel.style.transform = 'translate(-23%)';
  }
}

carousel.addEventListener('transitionend', (e) => {
  if (moved == "next") {
    carousel.append(carousel.firstElementChild);
  } else {
    carousel.prepend(carousel.lastElementChild);

  }
  carousel.getElementsByTagName("div")[2].classList.add("active");
  setTimeout(function() {
    carousel.style.transition = "all 0.8s ease-in-out";
  })
  carousel.style.transition = "none";
  carousel.style.transform = "translate(0)";
});

// Carousel aneis

const carouselTop = document.querySelector(".carousel-top");
var movedTop = "";

function prevTop() {
  movedTop = "prev";
  carouselTop.getElementsByTagName("div")[0].classList.remove("active");
  if (window.innerWidth <= 600) {
    carouselTop.style.transform = 'translate(100%)';
  } else {
    carouselTop.style.transform = 'translate(23%)';
  }
}

function nextTop() {
  movedTop = "next";
  carouselTop.getElementsByTagName("div")[0].classList.remove("active");
  if (window.innerWidth <= 600) {
    carouselTop.style.transform = 'translate(-100%)';
  } else {
    carouselTop.style.transform = 'translate(-23%)';
  }
}

carouselTop.addEventListener('transitionend', (e) => {
  if (movedTop == "next") {
    carouselTop.append(carouselTop.firstElementChild);
  } else {
    carouselTop.prepend(carouselTop.lastElementChild);

  }
  carouselTop.getElementsByTagName("div")[0].classList.add("active");
  setTimeout(function() {
    carouselTop.style.transition = "all 0.8s ease-in-out";
  })
  carouselTop.style.transition = "none";
  carouselTop.style.transform = "translate(0)";
});

// banners topo

function changeSlide(element, slide) {
  document.querySelector(".image").querySelectorAll(".image__slides").forEach(function(el, idx) {
    if (el.id == slide) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  })
}