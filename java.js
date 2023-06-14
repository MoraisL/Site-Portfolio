
var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function changePage() {
    const targetId = "LinguagensId";
    const content = document.getElementById(targetId);
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("ID não encontrada!");
    }
  }